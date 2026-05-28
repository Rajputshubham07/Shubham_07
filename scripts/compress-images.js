const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '..', 'public');
const sequenceDir = path.join(publicDir, 'sequence');

async function compressSequence() {
  console.log('Starting 3D sequence compression to WebP...');
  const files = fs.readdirSync(sequenceDir)
    .filter(f => f.endsWith('.png'));

  console.log(`Found ${files.length} PNG frames to compress.`);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const srcPath = path.join(sequenceDir, file);
    const destName = file.replace('.png', '.webp');
    const destPath = path.join(sequenceDir, destName);

    // Convert to webp with 75% quality (excellent balance of size and visual quality)
    await sharp(srcPath)
      .webp({ quality: 75 })
      .toFile(destPath);

    // Delete the original PNG to save space
    fs.unlinkSync(srcPath);

    if ((i + 1) % 20 === 0 || i === files.length - 1) {
      console.log(`Compressed ${i + 1}/${files.length} frames...`);
    }
  }
  console.log('3D sequence compression complete!');
}

async function compressFeaturedImage() {
  console.log('Compressing Gramsevek.png to WebP...');
  const srcPath = path.join(publicDir, 'Gramsevek.png');
  const destPath = path.join(publicDir, 'Gramsevek.webp');

  if (fs.existsSync(srcPath)) {
    await sharp(srcPath)
      .webp({ quality: 80 })
      .toFile(destPath);
    
    // Delete original heavy PNG
    fs.unlinkSync(srcPath);
    console.log('Gramsevek.png compressed to Gramsevek.webp successfully!');
  } else {
    console.log('Gramsevek.png not found, skipping.');
  }
}

async function main() {
  try {
    await compressSequence();
    await compressFeaturedImage();
    console.log('All image assets compressed successfully!');
  } catch (err) {
    console.error('Error during image compression:', err);
  }
}

main();
