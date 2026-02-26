import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD,
  },
});

interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData): Promise<void> {
  const { name, email, phone, serviceInterest, message } = data;

  // Email to DAS (notification of new inquiry)
  await transporter.sendMail({
    from: `"DAS Website" <${process.env.ZOHO_EMAIL}>`,
    to: process.env.ZOHO_EMAIL,
    replyTo: email,
    subject: `New Inquiry: ${serviceInterest} — from ${name}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#1a2332;border-bottom:2px solid #e63946;padding-bottom:8px">
          New Contact Form Submission
        </h2>
        <table style="width:100%;border-collapse:collapse;margin-top:16px">
          <tr><td style="padding:8px 0;font-weight:bold;color:#495057;width:140px">Name</td><td style="padding:8px 0">${name}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;color:#495057">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;color:#495057">Phone</td><td style="padding:8px 0"><a href="tel:${phone}">${phone}</a></td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;color:#495057">Service</td><td style="padding:8px 0">${serviceInterest}</td></tr>
        </table>
        <div style="margin-top:16px;padding:16px;background:#f8f9fa;border-radius:8px">
          <p style="margin:0 0 4px;font-weight:bold;color:#495057">Message</p>
          <p style="margin:0;white-space:pre-wrap">${message}</p>
        </div>
      </div>
    `,
  });

  // Auto-reply to the customer
  await transporter.sendMail({
    from: `"Dynamic Automotive Solutions" <${process.env.ZOHO_EMAIL}>`,
    to: email,
    subject: 'Thank you for contacting DAS',
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#1a2332">Thank You, ${name}!</h2>
        <p>We've received your inquiry about <strong>${serviceInterest}</strong> and will get back to you within 24 hours.</p>
        <p>If you need immediate assistance, please call us at <a href="tel:+260977123456">+260 977 123 456</a>.</p>
        <hr style="border:none;border-top:1px solid #e9ecef;margin:24px 0" />
        <p style="color:#868e96;font-size:13px">
          Dynamic Automotive Solutions<br/>
          Plot 1234, Great East Road, Lusaka, Zambia<br/>
          <a href="https://dynamicsolutionszambia.com">dynamicsolutionszambia.com</a>
        </p>
      </div>
    `,
  });
}
