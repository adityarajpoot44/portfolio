const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer')
const axios = require('axios');

require('dotenv').config();
app.use(express.json());
app.use(cors());

const port = 3003;

app.get('/contact', (req, res) => {
    const { email, subject, message ,name } = req.body;
    console.log(email);
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });
        const mail = ({
            from: email , 
            to: process.env.EMAIL,
            subject: subject,
            html: `<h1>${name},</h1><br>${email}<br><p>${message}</p>`,
        });

        transporter.sendMail(mail, (error, info) => {
            if (error) {
                console.log("'Error", error)
            }else{
                console.log("Email sent" + info.response); 
                 return res.status(201).json({ status: 201, info });
                
            }
        })

    } catch (error) {
        res.status(201).json({status:401, error})
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});  
