import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

async function optimizeImages() {
    console.log('Optimizing images...\n');

    // Optimize FotoHomepage_EncimaLogos - resize to exact display size 662x441
    const homepageImg = path.join(publicDir, 'FotoHomepage_EncimaLogos-DoYCUdFl.jpg');
    const homepageTemp = path.join(publicDir, 'temp-homepage.jpg');
    
    await sharp(homepageImg)
        .resize(662, 441, { fit: 'cover' })
        .jpeg({ quality: 75, progressive: true })
        .toFile(homepageTemp);
    
    await fs.unlink(homepageImg);
    await fs.rename(homepageTemp, homepageImg);
    
    const homepageStats = await fs.stat(homepageImg);
    console.log(`✓ FotoHomepage optimized (662x441) - ${(homepageStats.size / 1024).toFixed(1)} KB`);

    // Convert logo to WebP and resize to exact display size 162x70
    const logoImg = path.join(publicDir, 'logo.png');
    const logoWebp = path.join(publicDir, 'logo.webp');
    
    await sharp(logoImg)
        .resize(162, 70, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .webp({ quality: 80 })
        .toFile(logoWebp);
    
    const logoStats = await fs.stat(logoWebp);
    console.log(`✓ logo.webp created (162x70) - ${(logoStats.size / 1024).toFixed(1)} KB`);

    console.log('\nDone! Images optimized.');
    console.log('Note: Update code references from logo.png to logo.webp');
}

optimizeImages().catch(console.error);
