import nodemailer from 'nodemailer';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD,
  },
});

async function main() {
  const planContent = fs.readFileSync(
    path.resolve(__dirname, '../../futureplans.md'),
    'utf-8'
  );

  // Convert markdown to simple HTML
  const htmlContent = planContent
    .replace(/^# (.+)$/gm, '<h1 style="color:#1a2332;border-bottom:2px solid #e63946;padding-bottom:8px">$1</h1>')
    .replace(/^## (.+)$/gm, '<h2 style="color:#1a2332;margin-top:24px">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 style="color:#495057;margin-top:16px">$1</h3>')
    .replace(/^- (.+)$/gm, '<li style="margin:4px 0;color:#495057">$1</li>')
    .replace(/^---$/gm, '<hr style="border:none;border-top:1px solid #e9ecef;margin:24px 0">')
    .replace(/\*([^*]+)\*/g, '<em style="color:#868e96">$1</em>')
    .replace(/\n\n/g, '<br><br>');

  await transporter.sendMail({
    from: `"Dynamic Automotive Solutions" <${process.env.ZOHO_EMAIL}>`,
    to: 'alexisstar8@gmail.com',
    subject: 'DAS Website — Future Feature Plan',
    html: `
      <div style="font-family:Arial,sans-serif;max-width:700px;margin:0 auto;padding:20px">
        ${htmlContent}
      </div>
    `,
    attachments: [
      {
        filename: 'DAS-Future-Plans.md',
        content: planContent,
        contentType: 'text/markdown',
      },
    ],
  });

  console.log('Future plans email sent successfully to alexisstar8@gmail.com');
}

main().catch(console.error);
