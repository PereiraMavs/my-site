import puppeteer from 'puppeteer';
import { marked } from 'marked';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function convertMarkdownToPDF() {
  try {
    // Read the markdown file
    const markdownPath = path.join(__dirname, 'Shovon_Niverd_Pereira_CV.md');
    const markdownContent = fs.readFileSync(markdownPath, 'utf8');
    
    // Convert markdown to HTML
    const htmlContent = marked.parse(markdownContent);
    
    // Create a complete HTML document with professional styling
    const fullHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shovon Niverd Pereira - CV</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.6;
            color: #2d3748;
            background: white;
            font-size: 11pt;
            max-width: 8.5in;
            margin: 0 auto;
            padding: 0.75in;
        }
        
        h1 {
            color: #1a202c;
            font-size: 24pt;
            font-weight: 700;
            margin-bottom: 4pt;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 8pt;
        }
        
        h2 {
            color: #2d3748;
            font-size: 14pt;
            font-weight: 600;
            margin-top: 20pt;
            margin-bottom: 8pt;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 4pt;
        }
        
        h3 {
            color: #4a5568;
            font-size: 12pt;
            font-weight: 600;
            margin-top: 12pt;
            margin-bottom: 6pt;
        }
        
        p {
            margin-bottom: 8pt;
            text-align: justify;
        }
        
        strong {
            font-weight: 600;
            color: #2d3748;
        }
        
        ul {
            margin-left: 16pt;
            margin-bottom: 8pt;
        }
        
        li {
            margin-bottom: 3pt;
        }
        
        a {
            color: #3182ce;
            text-decoration: none;
        }
        
        a:hover {
            text-decoration: underline;
        }
        
        .contact-info {
            text-align: center;
            margin-bottom: 16pt;
            font-size: 10pt;
        }
        
        .contact-info p {
            margin-bottom: 4pt;
        }
        
        .section-content {
            margin-left: 0;
        }
        
        .job-title {
            font-weight: 600;
            color: #2d3748;
        }
        
        .company {
            font-weight: 500;
            color: #4a5568;
        }
        
        .date {
            font-style: italic;
            color: #718096;
            float: right;
        }
        
        .clear {
            clear: both;
        }
        
        .skills-list {
            display: flex;
            flex-wrap: wrap;
            gap: 4pt;
            margin-bottom: 8pt;
        }
        
        .skill-item {
            background: #f7fafc;
            padding: 2pt 6pt;
            border-radius: 3pt;
            font-size: 9pt;
            border: 1px solid #e2e8f0;
        }
        
        hr {
            border: none;
            border-top: 1px solid #e2e8f0;
            margin: 16pt 0;
        }
        
        .emoji {
            font-size: 10pt;
        }
        
        @media print {
            body {
                padding: 0.5in;
                font-size: 10pt;
            }
            
            h1 {
                font-size: 20pt;
            }
            
            h2 {
                font-size: 12pt;
                page-break-after: avoid;
            }
            
            h3 {
                font-size: 11pt;
                page-break-after: avoid;
            }
            
            .page-break {
                page-break-before: always;
            }
            
            a {
                color: #2d3748;
            }
        }
    </style>
</head>
<body>
    ${htmlContent}
</body>
</html>`;
    
    // Launch Puppeteer
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Set the HTML content
    await page.setContent(fullHTML, { waitUntil: 'networkidle0' });
    
    // Generate PDF
    const pdfPath = path.join(__dirname, 'Shovon_Niverd_Pereira_CV.pdf');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      margin: {
        top: '0.75in',
        right: '0.75in',
        bottom: '0.75in',
        left: '0.75in'
      },
      printBackground: true,
      preferCSSPageSize: true
    });
    
    await browser.close();
    
    console.log(`✅ PDF generated successfully: ${pdfPath}`);
    console.log('📄 Your CV has been converted to PDF format!');
    
  } catch (error) {
    console.error('❌ Error generating PDF:', error);
  }
}

// Run the conversion
convertMarkdownToPDF();
