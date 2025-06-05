const sharp = require('sharp');

async function optimizeImage() {
  try {
    await sharp('assets/images/4551972.jpeg')
      .resize(1200, null, { withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile('assets/images/4551972-optimised.webp');
    console.log('Image optimized successfully!');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImage(); 