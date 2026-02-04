import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

async function optimizeImages() {
    console.log('Optimizing images...\n');

    // Optimize FotoHomepage_EncimaLogos - resize to 800x533 (displayed at ~662x441)
    const homepageImg = path.join(publicDir, 'FotoHomepage_EncimaLogos-DoYCUdFl.jpg');
    const homepageTemp = path.join(publicDir, 'temp-homepage.jpg');
    
    await sharp(homepageImg)
        .resize(800, 533, { fit: 'cover' })
        .jpeg({ quality: 80, progressive: true })
        .toFile(homepageTemp);
    
    await fs.unlink(homepageImg);
    await fs.rename(homepageTemp, homepageImg);
    
    console.log('✓ FotoHomepage_EncimaLogos-DoYCUdFl.jpg optimized (800x533)');

    // Optimize logo.png - resize to 324x140 (displayed at 162x70, 2x for retina)
    const logoImg = path.join(publicDir, 'logo.png');
    const logoTemp = path.join(publicDir, 'temp-logo.png');
    
    await sharp(logoImg)
        .resize(324, 140, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png({ compressionLevel: 9 })
        .toFile(logoTemp);
    
    await fs.unlink(logoImg);
    await fs.rename(logoTemp, logoImg);
    
    console.log('✓ logo.png optimized (324x140)');

    console.log('\nDone! Images optimized.');
}

optimizeImages().catch(console.error);
