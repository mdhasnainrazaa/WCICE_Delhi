const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const LOGOS_DIR = path.join(__dirname, '..', 'public', 'logos');
const OPTIMIZED_DIR = path.join(IMAGES_DIR, 'optimized');

// Ensure optimized directory exists
if (!fs.existsSync(OPTIMIZED_DIR)) {
  fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
}

// Function to optimize an image
async function optimizeImage(filePath, outputDir, customWidth = null) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
    return;
  }

  const filename = path.basename(filePath, ext);
  const outPath = path.join(outputDir, `${filename.toLowerCase()}.webp`);

  try {
    const metadata = await sharp(filePath).metadata();
    let pipeline = sharp(filePath);

    // If customWidth is specified or image is very large
    if (customWidth) {
      pipeline = pipeline.resize({ width: customWidth, withoutEnlargement: true });
      console.log(`Resizing ${filename}${ext} to width ${customWidth}px`);
    } else if (metadata.width > 1200) {
      pipeline = pipeline.resize({ width: 1200, withoutEnlargement: true });
      console.log(`Resizing large image ${filename}${ext} to 1200px width`);
    }

    await pipeline
      .webp({ quality: 80, effort: 4 })
      .toFile(outPath);

    const oldSize = fs.statSync(filePath).size;
    const newSize = fs.statSync(outPath).size;
    const savings = ((oldSize - newSize) / oldSize * 100).toFixed(1);

    console.log(`✓ Optimized ${filename}${ext} -> ${path.basename(outPath)}`);
    console.log(`  Size: ${(oldSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB (Saved ${savings}%)`);
  } catch (err) {
    console.error(`✗ Error optimizing ${filePath}:`, err.message);
  }
}

async function run() {
  console.log('--- Starting Image Optimization ---');

  // 1. Optimize Logo
  const logoPath = path.join(LOGOS_DIR, 'logo.png');
  if (fs.existsSync(logoPath)) {
    // Save as logo.webp in same folder (size around 128x160 as requested)
    await optimizeImage(logoPath, LOGOS_DIR, 128);
    // Also save as wciec-logo.webp
    try {
      await sharp(logoPath)
        .resize({ width: 128, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(path.join(LOGOS_DIR, 'wciec-logo.webp'));
      console.log('✓ Created wciec-logo.webp');
    } catch (err) {
      console.error('Error creating wciec-logo.webp:', err.message);
    }
  }

  // 2. Optimize Images in public/images
  const files = fs.readdirSync(IMAGES_DIR);
  for (const file of files) {
    const fullPath = path.join(IMAGES_DIR, file);
    const stat = fs.statSync(fullPath);

    if (stat.isFile()) {
      await optimizeImage(fullPath, OPTIMIZED_DIR);
    }
  }

  console.log('--- Image Optimization Completed ---');
}

run();
