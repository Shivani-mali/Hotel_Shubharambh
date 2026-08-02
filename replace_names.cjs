const fs = require('fs');
const path = require('path');

const NEW_NAME = '🏨 हॉटेल शुभारंभ Lodging & Family Restaurant';

const regexes = [
  /Hotel Shubharambh Restaurant/gi,
  /Shubharambh Resto & Rooms/gi,
  /Shubharambh Hotel/gi,
  /Hotel Shubharambh/gi,
  /हॉटेल शुभारंभ/g,
  /HOTEL SHUBHARAMBH/g
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!['node_modules', '.git', 'dist', 'public', 'assets'].includes(file)) {
        processDir(fullPath);
      }
    } else if (fullPath.match(/\.(js|jsx|html)$/)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;

      const PLACEHOLDER = '___HOTEL_NAME_PLACEHOLDER___';
      
      // Do not replace inside Google maps url!
      // The google maps url has "Hotel%20Shubharambh". It will NOT be matched by the spaced version "Hotel Shubharambh".
      // But let's temporarily protect it just in case.
      const protectedMap = 'Hotel%20Shubharambh';
      const MAP_PLACEHOLDER = '___MAP_PLACEHOLDER___';
      content = content.split(protectedMap).join(MAP_PLACEHOLDER);
      
      // Also protect the domain name
      const protectedDomain = 'hotelshubharambh.com';
      const DOMAIN_PLACEHOLDER = '___DOMAIN_PLACEHOLDER___';
      content = content.split(protectedDomain).join(DOMAIN_PLACEHOLDER);

      // First, temporarily replace any existing correct new names with a placeholder to avoid double replacement
      content = content.split(NEW_NAME).join(PLACEHOLDER);

      // Replace all variants with placeholder
      for (const rx of regexes) {
         content = content.replace(rx, PLACEHOLDER);
      }

      // Restore placeholder to NEW_NAME
      content = content.split(PLACEHOLDER).join(NEW_NAME);
      
      // Restore protected strings
      content = content.split(MAP_PLACEHOLDER).join(protectedMap);
      content = content.split(DOMAIN_PLACEHOLDER).join(protectedDomain);

      // specific fixes:
      // In Lodging page "का निवडाल शुभारंभ?" -> "का निवडाल 🏨 हॉटेल शुभारंभ Lodging & Family Restaurant?"
      // But wait! It was just "शुभारंभ", the regex above doesn't catch standalone "शुभारंभ".
      // Let's add specific ones:
      content = content.replace(/का निवडाल शुभारंभ\?/g, 'का निवडाल ' + NEW_NAME + '?');
      // "आमचे मेनू | शुभारंभ (Fine Dining Menu)"
      content = content.replace(/आमचे मेनू \| शुभारंभ/g, 'आमचे मेनू | ' + NEW_NAME);

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated:', fullPath);
      }
    }
  }
}

// Process index.html first
let indexHtml = fs.readFileSync('index.html', 'utf8');
const PLACEHOLDER = '___HOTEL_NAME_PLACEHOLDER___';
indexHtml = indexHtml.split(NEW_NAME).join(PLACEHOLDER);
indexHtml = indexHtml.replace(/Hotel Shubharambh/gi, PLACEHOLDER);
indexHtml = indexHtml.replace(/हॉटेल शुभारंभ/g, PLACEHOLDER);
indexHtml = indexHtml.split(PLACEHOLDER).join(NEW_NAME);
fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Updated: index.html');

processDir('./src');
