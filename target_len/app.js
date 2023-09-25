require('dotenv').config()
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Middleware to parse JSON requests
app.use(express.json())
    .use(cors());

const PORT = process.env.PORT || 3000;
const SMTP_USERNAME = process.env.SMTP_USERNAME || null;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD || null;
const SMTP_TO = process.env.SMTP_TO || null;

// Define an API route to send emails
app.post('/send-email', async (req, res) => {
    try {
        const { phoneNumber } = req.body;
    
        // Create a nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: SMTP_USERNAME,
                pass: SMTP_PASSWORD
            },
        });
    
        // Email data
        const mailOptions = {
            from: SMTP_USERNAME,
            to: SMTP_TO,
            subject: "Estetika.agency | Обратная связь",
            text: phoneNumber
        };
    
        // Send the email
        await transporter.sendMail(mailOptions);
    
        res.status(200).json({ message: 'Телефонный номер успешно сохранен!' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Произошла ошибка( \nМы решим её в скором времени" });
      }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
