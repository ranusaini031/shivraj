// Shivraj Enterprises - Backend Server (Email Notifications)
// Replace 'your_email@gmail.com' and 'your_app_password' before running

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { name, email, phone, product, total } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sainiranusaini031@gmail.com',
            pass: 'ranu@6685'
        }
    });

    let mailOptions = {
        from: 'sainiranusaini031@gmail.com',
        to: 'ranu@6685',
        subject: 'New Order from Shivraj Enterprises',
        text: `Customer: ${name}\nEmail: ${email}\nPhone: ${phone}\nProduct: ${product}\nTotal: ₹${total}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Email failed to send.');
    }
});

app.listen(5000, () => {
    console.log('Backend server running on port 5000');
});
