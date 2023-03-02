const nodemailer = require("nodemailer")

const sendEmail = async(message,subject,send_to,sent_from,reply_to) =>{
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port:587,
        auth:{
            user:process.env.EMAIL_USER,
            password:process.env.EMAIL_PASSOWRD
        },
        tls:{
            rejectUnauthorized: false
        }
    })

    const options ={
        from:sent_from,
        to:send_to,
        replyTo:reply_to,
        subject:subject,
        html:message,
    }

    transporter.sendMail(options,function(err,info){
        if(err){
            console.log(err)
        }
        console.log(info)
    })
}

module.exports = sendEmail