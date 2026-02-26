import 'dotenv/config';
import { createTransport } from 'nodemailer';

async function main() {
  const transporter = createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_PASSWORD,
    },
  });

  console.log('Sending test email...');
  console.log('From:', process.env.ZOHO_EMAIL);
  console.log('To:', process.env.CONTACT_RECIPIENT || process.env.ZOHO_EMAIL);

  try {
    const info = await transporter.sendMail({
      from: `"DAS Website" <${process.env.ZOHO_EMAIL}>`,
      to: process.env.CONTACT_RECIPIENT || process.env.ZOHO_EMAIL,
      subject: 'Test Email from DAS Website',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#1a2332">DAS Contact Form - Test Email</h2>
          <p>This is a test email to confirm the contact form email integration is working correctly.</p>
          <p>If you received this, the Zoho SMTP setup is working.</p>
          <hr style="border:none;border-top:1px solid #e9ecef;margin:24px 0" />
          <p style="color:#868e96;font-size:13px">
            Dynamic Automotive Solutions<br/>
            <a href="https://dynamicsolutionszambia.com">dynamicsolutionszambia.com</a>
          </p>
        </div>
      `,
    });

    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
  } catch (error) {
    console.error('Failed to send email:', error);
  }
}

main();
