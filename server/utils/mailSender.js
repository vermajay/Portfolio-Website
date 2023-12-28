const nodemailer = require("nodemailer");
require("dotenv").config();

//creater transporter using nodemailer
const mailSender = async (email, title, body) => {
    try{
        const transporter = nodemailer.createTransport(
            {   
                service: 'Gmail',
                host: process.env.MAIL_HOST,
                auth:{
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS
                }
            }
        )

        let info = await transporter.sendMail({
            from:'Personal Portfolio | JayVerma',
            to:`${email}`,
            subject:`${title}`,
            html:`${body}`
        })
        
        console.log("INFO-> ", info);
        return info;
    }

    catch(error){
        console.log(error.message);
    }
}

module.exports = mailSender;