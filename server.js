const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post('/send', (req, res) => {
  const { name, phone, email, company, location, message } = req.body;

  console.log('Received form data:', req.body);  // Log received data

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: 'ashishbhardwaj.rei38@gmail.com',
    to: 'ashishbhardwaj.rei38@gmail.com',
    subject: `Message from ${name}`,
    text: `
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Company: ${company}
      Location: ${location}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);  // Log error
      return res.status(500).json({ error: 'Failed to send message, please try again.' });
    }
    res.status(200).json({ success: 'Message sent successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
