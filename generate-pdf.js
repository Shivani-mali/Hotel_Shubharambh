import fs from 'fs';
import { jsPDF } from 'jspdf';
import path from 'path';

async function generatePDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'px',
    format: 'a4'
  });
  
  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();

  const pages = [
    'page1.png', 'page2.png', 'page3.png', 'page4.png',
    'page5.png', 'page6.png', 'page7.png', 'page8.png'
  ];

  for (let i = 0; i < pages.length; i++) {
    const filePath = path.join('src', 'assets', 'Menu', 'menu_book', pages[i]);
    const imgData = fs.readFileSync(filePath).toString('base64');
    
    if (i > 0) {
      doc.addPage();
    }
    
    // Fit image to A4
    doc.addImage(imgData, 'PNG', 0, 0, width, height);
  }

  doc.save('public/hotel-shubharambh-menu.pdf');
  console.log('PDF successfully generated at public/hotel-shubharambh-menu.pdf');
}

generatePDF().catch(console.error);
