const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/hero.jpg');
const destination = path.resolve(__dirname, 'src/public/images');

if (fs.existsSync(target)) {
  if (!fs.existsSync(`${destination}/hero-large.jpg`)) {
    sharp(target)
      .resize(800)
      .toFile(
        path.resolve(
          __dirname,
          `${destination}/hero-large.jpg`,
        ),
      );
  }
  if (!fs.existsSync(`${destination}/hero-small.jpg`)) {
    sharp(target)
      .resize(480)
      .toFile(
        path.resolve(
          __dirname,
          `${destination}/hero-small.jpg`,
        ),
      );
  }
}
