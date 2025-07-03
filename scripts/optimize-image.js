const sharp = require('sharp');

async function optimizeImage() {
  try {
    await sharp('assets/images/73de9417-7d20-4ca6-947f-4eb99db8905d_1280x720.jpg')
      .resize(1200, null, { withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile('assets/images/unity-office-optimised.webp');
    console.log('Image optimized successfully in assets directory!');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImage(); 