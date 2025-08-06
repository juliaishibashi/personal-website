import nodemailer from 'nodemailer';

// only accept POST req, o.w return method not allowed(405)
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  //get name, email, message from req.body
  try {
    const { name, email, message } = req.body;
    
    // nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const ReceiveMailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: 'Messaging from your home page',
      text: `From: ${name}(${email})\n Message: ${message}`,
    };

    await transporter.sendMail(ReceiveMailOptions);
    
    // success response
    res.status(200).json({ message: 'message sent' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
} 