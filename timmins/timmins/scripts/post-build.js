const fs = require('fs');
const path = require('path');

// Copy .htaccess from public to out
const publicHtaccess = path.join(__dirname, '../public/.htaccess');
const outHtaccess = path.join(__dirname, '../out/.htaccess');

if (fs.existsSync(publicHtaccess)) {
  fs.copyFileSync(publicHtaccess, outHtaccess);
  console.log('✓ Copied .htaccess to out/');
} else {
  console.log('⚠ .htaccess not found in public/');
}

// Create index.html in courses/5g directory that redirects to 5g.html
const outDir = path.join(__dirname, '../out');
const courses5gDir = path.join(outDir, 'courses/5g');
const courses5gHtml = path.join(outDir, 'courses/5g.html');

if (fs.existsSync(courses5gHtml)) {
  // Ensure directory exists
  if (!fs.existsSync(courses5gDir)) {
    fs.mkdirSync(courses5gDir, { recursive: true });
  }
  
  // Read the 5g.html content
  const htmlContent = fs.readFileSync(courses5gHtml, 'utf8');
  
  // Create index.html in the 5g directory
  const indexHtml = path.join(courses5gDir, 'index.html');
  fs.writeFileSync(indexHtml, htmlContent);
  console.log('✓ Created courses/5g/index.html');
} else {
  console.log('⚠ courses/5g.html not found');
}

console.log('Post-build script completed!');
