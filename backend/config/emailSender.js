import nodemailer from 'nodemailer';

const sendEmail = async (to, subject, html) => {
    //creating a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
        host: process.env.HOST,
        service: process.env.SERVICE,
        secure: process.env.SECURE,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    //Difine email options
    const mailOptions = {
        from: process.env.USER,
        to,
        subject,
        html,
    }

    //send the email
    await transporter.sendMail(mailOptions)
};

export default sendEmail