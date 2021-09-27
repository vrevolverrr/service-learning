import nodemailer from "nodemailer";

export default async function main(req, res) {
    if (req.method != 'POST') return;

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
        },
        secure: true,
    });

    const mailData = {
        from: req.body.email,
        to: "whiterevolver35@gmail.com",
        subject: `Carbon Zero Contact Form`,
        text: req.body.message + `\n\nBest Regards,\n${req.body.email}\n${req.body.name}`,
    };
    
    await new Promise((resolve, reject) => {
        transporter.sendMail(mailData, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        });
    });

    res.status(200).send("OK");
};