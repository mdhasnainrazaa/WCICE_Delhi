const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '../out');
const dest = path.join(__dirname, '../Deployment_Data');

console.log('--- Syncing Build Output to Deployment_Data ---');

try {
  if (fs.existsSync(dest)) {
    // Recursively clear old build files to keep deployment clean
    fs.rmSync(dest, { recursive: true, force: true });
    console.log('✓ Cleared old Deployment_Data directory');
  }
  
  // Copy static export folder to Deployment_Data
  fs.cpSync(src, dest, { recursive: true, force: true });
  console.log('✓ Copied build output to Deployment_Data');
  console.log('✓ Success! Your latest changes are saved in Deployment_Data.');
} catch (err) {
  console.error('✗ Error copying build data:', err.message);
  process.exit(1);
}
