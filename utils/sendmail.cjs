const nodemailer = require('nodemailer');

const sendEmail = async ({ to, subject, text, html }) => {
  try {
    // Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true", // true for 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});


console.log('📨 Sending email using:');
console.log({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  user: process.env.SMTP_SECURE,
});


    // Optional: verify connection (run once for testing)
    transporter.verify((err) => {
      if (err) console.log('❌ SMTP connection error:', err);
      else console.log('✅ Mail server ready!');
    });

    // Mail options
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to,             // receiver
      subject,
      text,
      html,
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.response);

  } catch (err) {
    console.error('❌ Error sending email:', err);
    throw err;
  }
};



module.exports = sendEmail;
