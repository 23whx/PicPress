import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');

async function convertIcons() {
  console.log('🎨 开始转换图标...\n');

  try {
    // 转换 favicon.webp 为 PNG 和 ICO
    console.log('📸 转换 favicon.webp...');
    await sharp(join(publicDir, 'favicon.webp'))
      .resize(32, 32)
      .png()
      .toFile(join(publicDir, 'favicon-32.png'));
    
    await sharp(join(publicDir, 'favicon.webp'))
      .resize(64, 64)
      .png()
      .toFile(join(publicDir, 'favicon.png'));
    
    // ICO 格式使用 PNG 作为基础
    await sharp(join(publicDir, 'favicon.webp'))
      .resize(32, 32)
      .png()
      .toFile(join(publicDir, 'favicon.ico'));
    
    console.log('✅ favicon.png (64x64) - 完成');
    console.log('✅ favicon-32.png (32x32) - 完成');
    console.log('✅ favicon.ico (32x32) - 完成\n');

    // 转换 icon.webp 为不同尺寸的 PNG
    console.log('📸 转换 icon.webp...');
    await sharp(join(publicDir, 'icon.webp'))
      .resize(180, 180)
      .png()
      .toFile(join(publicDir, 'apple-touch-icon.png'));
    
    await sharp(join(publicDir, 'icon.webp'))
      .resize(192, 192)
      .png()
      .toFile(join(publicDir, 'icon-192.png'));
    
    await sharp(join(publicDir, 'icon.webp'))
      .resize(512, 512)
      .png()
      .toFile(join(publicDir, 'icon-512.png'));
    
    console.log('✅ apple-touch-icon.png (180x180) - 完成');
    console.log('✅ icon-192.png (192x192) - 完成');
    console.log('✅ icon-512.png (512x512) - 完成\n');

    // 转换 logo.webp 为 PNG
    console.log('📸 转换 logo.webp...');
    await sharp(join(publicDir, 'logo.webp'))
      .png()
      .toFile(join(publicDir, 'logo.png'));
    
    console.log('✅ logo.png - 完成\n');

    console.log('🎉 所有图标转换完成！');
    console.log('\n生成的文件：');
    console.log('  - favicon.ico (32x32)');
    console.log('  - favicon.png (64x64)');
    console.log('  - favicon-32.png (32x32)');
    console.log('  - apple-touch-icon.png (180x180)');
    console.log('  - icon-192.png (192x192)');
    console.log('  - icon-512.png (512x512)');
    console.log('  - logo.png');

  } catch (error) {
    console.error('❌ 转换失败:', error);
    process.exit(1);
  }
}

convertIcons();

