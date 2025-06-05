const sharp = require('sharp');

async function optimizeImage() {
  try {
    await sharp('assets/images/4551972.jpg')
      .resize(1200, null, { withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile('assets/images/ryan-optimised.webp');
    console.log('Image optimized successfully in assets directory!');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImage(); 