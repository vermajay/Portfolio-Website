const mailSender = require("../utils/mailSender");
const {contactMail} = require("../mailTemplates/contactMail");

const email = "vermajay6604.1@gmail.com";

exports.contactUs = async(req, res) => {
    try{
        //fetch data from req body
        const data = req.body;
        console.log("DATA....-> ", data);
        
        const mailResponse = await mailSender(email, "Contact mail from Portfolio", contactMail(data));
        console.log("Email sent successfully", mailResponse);

        //return successfull response
        res.status(200).json(
            {
                success: true,
                message: "Email sent successfully",
                data: mailResponse
            }
        )

    }
    catch(error){
        console.log("Error in sending mail-> ", error);
        res.status(500).json(
            {
                success: false,
                message: "Error in sending mail"
            }
        )
    }
}