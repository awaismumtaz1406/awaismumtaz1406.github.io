const fs = require('fs');
const zlib = require('zlib');

// CRC32
const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(4 + 4 + len + 4);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4, 4, 'ascii');
  data.copy(buf, 8);
  const typeAndData = buf.subarray(4, 8 + len);
  const crc = crc32(typeAndData);
  buf.writeUInt32BE(crc, 8 + len);
  return buf;
}

// 5x7 Basic Font for Uppercase, Lowercase, Digits and Punctuation
const FONT = {
  ' ': [0,0,0,0,0],
  'A': [0x7c,0x12,0x11,0x12,0x7c],
  'B': [0x7f,0x49,0x49,0x49,0x36],
  'C': [0x3e,0x41,0x41,0x41,0x22],
  'D': [0x7f,0x41,0x41,0x41,0x3e],
  'E': [0x7f,0x49,0x49,0x49,0x41],
  'F': [0x7f,0x09,0x09,0x09,0x01],
  'G': [0x3e,0x41,0x49,0x49,0x7a],
  'H': [0x7f,0x08,0x08,0x08,0x7f],
  'I': [0x00,0x41,0x7f,0x41,0x00],
  'J': [0x20,0x40,0x41,0x3f,0x01],
  'K': [0x7f,0x08,0x14,0x22,0x41],
  'L': [0x7f,0x40,0x40,0x40,0x40],
  'M': [0x7f,0x02,0x0c,0x02,0x7f],
  'N': [0x7f,0x04,0x08,0x10,0x7f],
  'O': [0x3e,0x41,0x41,0x41,0x3e],
  'P': [0x7f,0x09,0x09,0x09,0x06],
  'Q': [0x3e,0x41,0x51,0x21,0x5e],
  'R': [0x7f,0x09,0x19,0x29,0x46],
  'S': [0x46,0x49,0x49,0x49,0x31],
  'T': [0x01,0x01,0x7f,0x01,0x01],
  'U': [0x3f,0x40,0x40,0x40,0x3f],
  'V': [0x1f,0x20,0x40,0x20,0x1f],
  'W': [0x7f,0x20,0x18,0x20,0x7f],
  'X': [0x63,0x14,0x08,0x14,0x63],
  'Y': [0x07,0x08,0x70,0x08,0x07],
  'Z': [0x61,0x51,0x49,0x45,0x43],
  'a': [0x20,0x54,0x54,0x54,0x78],
  'b': [0x7f,0x48,0x44,0x44,0x38],
  'c': [0x38,0x44,0x44,0x44,0x20],
  'd': [0x38,0x44,0x44,0x48,0x7f],
  'e': [0x38,0x54,0x54,0x54,0x18],
  'f': [0x08,0x7e,0x09,0x01,0x02],
  'g': [0x18,0xa4,0xa4,0xa4,0x7c],
  'h': [0x7f,0x08,0x04,0x04,0x78],
  'i': [0x00,0x44,0x7d,0x40,0x00],
  'j': [0x40,0x80,0x84,0x7d,0x00],
  'k': [0x7f,0x10,0x28,0x44,0x00],
  'l': [0x00,0x41,0x7f,0x40,0x00],
  'm': [0x7c,0x04,0x18,0x04,0x78],
  'n': [0x7c,0x08,0x04,0x04,0x78],
  'o': [0x38,0x44,0x44,0x44,0x38],
  'p': [0xfc,0x24,0x24,0x24,0x18],
  'q': [0x18,0x24,0x24,0x28,0xfc],
  'r': [0x7c,0x08,0x04,0x04,0x08],
  's': [0x48,0x54,0x54,0x54,0x20],
  't': [0x04,0x3f,0x44,0x40,0x20],
  'u': [0x3c,0x40,0x40,0x20,0x7c],
  'v': [0x1c,0x20,0x40,0x20,0x1c],
  'w': [0x3c,0x40,0x30,0x40,0x3c],
  'x': [0x44,0x28,0x10,0x28,0x44],
  'y': [0x1c,0xa0,0xa0,0xa0,0x7c],
  'z': [0x44,0x64,0x54,0x4c,0x44],
  '0': [0x3e,0x51,0x49,0x45,0x3e],
  '1': [0x00,0x42,0x7f,0x40,0x00],
  '2': [0x42,0x61,0x51,0x49,0x46],
  '3': [0x21,0x41,0x45,0x4b,0x31],
  '4': [0x18,0x14,0x12,0x7f,0x10],
  '5': [0x27,0x45,0x45,0x45,0x39],
  '6': [0x3c,0x4a,0x49,0x49,0x30],
  '7': [0x01,0x71,0x09,0x05,0x03],
  '8': [0x36,0x49,0x49,0x49,0x36],
  '9': [0x06,0x49,0x49,0x29,0x1e],
  ':': [0x00,0x36,0x36,0x00,0x00],
  '-': [0x08,0x08,0x08,0x08,0x08],
  '.': [0x00,0x60,0x60,0x00,0x00],
  ',': [0x00,0x80,0x60,0x00,0x00],
  '/': [0x20,0x10,0x08,0x04,0x02],
  '|': [0x00,0x00,0x7f,0x00,0x00],
  '(': [0x00,0x1c,0x22,0x41,0x00],
  ')': [0x00,0x41,0x22,0x1c,0x00],
  '*': [0x14,0x08,0x3e,0x08,0x14],
  '+': [0x08,0x08,0x3e,0x08,0x08],
  '#': [0x14,0x7f,0x14,0x7f,0x14],
};

function drawText(pixels, width, height, str, startX, startY, scale, color) {
  let cx = startX;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    const glyph = FONT[ch] || FONT[' '];
    for (let col = 0; col < 5; col++) {
      const colBits = glyph[col] || 0;
      for (let row = 0; row < 7; row++) {
        if ((colBits >> row) & 1) {
          for (let sx = 0; sx < scale; sx++) {
            for (let sy = 0; sy < scale; sy++) {
              const px = cx + col * scale + sx;
              const py = startY + row * scale + sy;
              if (px >= 0 && px < width && py >= 0 && py < height) {
                const idx = (py * width + px) * 4;
                pixels[idx] = color[0];
                pixels[idx + 1] = color[1];
                pixels[idx + 2] = color[2];
                pixels[idx + 3] = color[3] ?? 255;
              }
            }
          }
        }
      }
    }
    cx += (5 + 1) * scale;
  }
}

function getTextWidth(str, scale) {
  return str.length * 6 * scale;
}

function renderCertificate(certType) {
  const width = 1000;
  const height = 700;
  const pixels = Buffer.alloc(width * height * 4);

  const isBuilding = certType === 'building';
  const certTitle = isBuilding ? 'AI for App Building' : 'AI for App Deployment';
  const certId = isBuilding ? 'XM6Z75V7J34J' : 'BO37C0OKD2CL';
  const primaryAccent = isBuilding ? [56, 189, 248] : [16, 185, 129];
  const accentLight = isBuilding ? [186, 230, 253] : [167, 243, 208];

  // Base canvas background fill
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      let r = 9, g = 13, b = 22; // #090d16

      // Outer certificate container (x: 20..980, y: 20..680)
      if (x >= 20 && x <= width - 20 && y >= 20 && y <= height - 20) {
        r = 13; g = 20; b = 36; // #0d1424
        
        // Ambient soft radial gradient in center
        const dx = x - width / 2;
        const dy = y - height * 0.45;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const glow = Math.max(0, 1 - dist / 420);
        if (glow > 0) {
          r = Math.min(255, Math.floor(r + (isBuilding ? 20 : 10) * glow));
          g = Math.min(255, Math.floor(g + (isBuilding ? 45 : 45) * glow));
          b = Math.min(255, Math.floor(b + (isBuilding ? 75 : 25) * glow));
        }

        // Inner micro-grid pattern
        if (x % 28 === 0 && y % 28 === 0) {
          r = Math.min(255, r + 24);
          g = Math.min(255, g + 24);
          b = Math.min(255, b + 28);
        }

        // Border line around cert
        if (x === 20 || x === width - 20 || y === 20 || y === height - 20 ||
            x === 32 || x === width - 32 || y === 32 || y === height - 32) {
          r = 45; g = 60; b = 88;
        }

        // Google colors top accent bar
        if (y >= 20 && y <= 28) {
          const seg = Math.floor((x - 20) / ((width - 40) / 4));
          if (seg === 0) { r = 66; g = 133; b = 244; }
          else if (seg === 1) { r = 234; g = 67; b = 53; }
          else if (seg === 2) { r = 251; g = 188; b = 5; }
          else { r = 52; g = 168; b = 83; }
        }

        // Bottom verification details panel
        if (x >= 60 && x <= width - 60 && y >= height - 160 && y <= height - 60) {
          r = 10; g = 15; b = 28;
          if (x === 60 || x === width - 60 || y === height - 160 || y === height - 60) {
            r = 38; g = 52; b = 78;
          }
        }
      }

      pixels[idx] = r;
      pixels[idx + 1] = g;
      pixels[idx + 2] = b;
      pixels[idx + 3] = 255;
    }
  }

  // Draw Text elements
  // 1. Google Brand Header
  const gHeader = "GOOGLE CLOUD  |  VERIFIED CREDENTIAL";
  drawText(pixels, width, height, gHeader, Math.floor((width - getTextWidth(gHeader, 3)) / 2), 70, 3, primaryAccent);

  // 2. Certificate Subtitle
  const certOf = "CERTIFICATE OF ACHIEVEMENT";
  drawText(pixels, width, height, certOf, Math.floor((width - getTextWidth(certOf, 2)) / 2), 140, 2, [148, 163, 184]);

  const presentedTo = "This credential is proudly presented to";
  drawText(pixels, width, height, presentedTo, Math.floor((width - getTextWidth(presentedTo, 2)) / 2), 180, 2, [100, 116, 139]);

  // 3. Recipient Name: Awais Mumtaz
  const student = "AWAIS MUMTAZ";
  drawText(pixels, width, height, student, Math.floor((width - getTextWidth(student, 5)) / 2), 230, 5, [248, 250, 252]);

  // Underline
  const nameW = getTextWidth(student, 5);
  const lineStart = Math.floor((width - nameW) / 2) - 20;
  const lineEnd = lineStart + nameW + 40;
  for (let lx = lineStart; lx <= lineEnd; lx++) {
    for (let ly = 280; ly <= 282; ly++) {
      const idx = (ly * width + lx) * 4;
      pixels[idx] = primaryAccent[0];
      pixels[idx + 1] = primaryAccent[1];
      pixels[idx + 2] = primaryAccent[2];
      pixels[idx + 3] = 255;
    }
  }

  // 4. Fulfillment statement
  const fulfill = "for successfully demonstrating technical excellence and completing";
  drawText(pixels, width, height, fulfill, Math.floor((width - getTextWidth(fulfill, 2)) / 2), 310, 2, [203, 213, 225]);

  // 5. Course Title Badge
  drawText(pixels, width, height, certTitle.toUpperCase(), Math.floor((width - getTextWidth(certTitle.toUpperCase(), 4)) / 2), 365, 4, primaryAccent);

  // 6. Topics Covered
  const topics = isBuilding 
    ? "Generative AI Engineering * Gemini API * Agent Systems * Prompt Architecture"
    : "Cloud Infrastructure * Production AI * Container Deployment * Model Ops";
  drawText(pixels, width, height, topics, Math.floor((width - getTextWidth(topics, 2)) / 2), 430, 2, [148, 163, 184]);

  // 7. Footer Credential Box Info
  // Left: Credential ID
  drawText(pixels, width, height, "CREDENTIAL ID:", 90, height - 138, 2, [100, 116, 139]);
  drawText(pixels, width, height, certId, 90, height - 110, 3, accentLight);
  drawText(pixels, width, height, "[OFFICIALLY VERIFIED]", 90, height - 85, 2, [52, 168, 83]);

  // Middle: Issue Date
  drawText(pixels, width, height, "ISSUED:", 460, height - 138, 2, [100, 116, 139]);
  drawText(pixels, width, height, "OCTOBER 2026", 460, height - 110, 3, [248, 250, 252]);
  drawText(pixels, width, height, "ISSUER: GOOGLE CLOUD", 460, height - 85, 2, [148, 163, 184]);

  // Right: Status
  drawText(pixels, width, height, "SECURITY STATUS:", 730, height - 138, 2, [100, 116, 139]);
  drawText(pixels, width, height, "VALIDATED", 730, height - 110, 3, [52, 168, 83]);
  drawText(pixels, width, height, "GOOGLE VERIFICATION", 730, height - 85, 2, primaryAccent);

  // Convert to PNG Buffer
  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(rowSize * height);
  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0;
    pixels.copy(rawData, rowOffset + 1, y * width * 4, (y + 1) * width * 4);
  }

  const deflated = zlib.deflateSync(rawData);
  const header = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', deflated);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([header, ihdrChunk, idatChunk, iendChunk]);
}

fs.writeFileSync('assets/google-cert-building.png', renderCertificate('building'));
fs.writeFileSync('assets/google-cert-deployment.png', renderCertificate('deployment'));
console.log('Successfully generated high-resolution certificates!');
