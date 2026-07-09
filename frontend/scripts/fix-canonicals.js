const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (stat.isFile() && (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('https://wciecdelhi.com')) {
        // Replace wciecdelhi.com with www.wciecdelhi.com where https:// is present
        const updatedContent = content.replaceAll('https://wciecdelhi.com', 'https://www.wciecdelhi.com');
        fs.writeFileSync(fullPath, updatedContent, 'utf8');
        console.log(`✓ Updated canonicals in: ${path.relative(srcDir, fullPath)}`);
      }
    }
  }
}

console.log('--- Fixing Canonical URLs in src ---');
walkDir(srcDir);
console.log('--- Canonical URL Fix Completed ---');
