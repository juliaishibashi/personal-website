const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
// const port = 3001;
const port = process.env.PORT || 3001;

const app = express();

// app.use(cors());

app.use(cors({
    // origin: 'https://juliaishibashi.vercel.app',
    origin: '*',
    methods: ['POST'],
}));
app.use(express.json());

// app.post('/contact', async (req, res) => {
    app.post('api/contact', async (req, res) => {
    console.log('Request body:', req.body);
    // Extract email and message from the request body
    const { name, email, message } = req.body;

    //set sending mail
    require('dotenv').config();
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // const SendMailOptions = {
    //     from: process.env.EMAIL_USER,
    //     to: email,
    //     subject: 'Message Conformation',
    //     text: `Your Email: ${email}\nYour Message: ${message}`,
    // };

    const ReceiveMailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: 'Messaging from your home page',
        text: `From: ${name}(${email})\n Message: ${message}`,
    }

    try {
        // await transporter.sendMail(SendMailOptions);
        await transporter.sendMail(ReceiveMailOptions);
        res.status(200).json({ message: 'message sent' });
    } catch (error){
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send the message :(' });
    }
});

app.listen(port, () => {
    console.log(`sarver turning on at port ${port}`)
});