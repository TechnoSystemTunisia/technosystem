import nodemailer from "nodemailer"

export const sendEmail = async (
  email: string,
  subject: string,
  text: string,
  html?: string
) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      port: 587,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    })

    await new Promise((resolve, reject) => {
      transporter.sendMail({
        from: 
          {
            name: text,
            address: email
          },
        to: process.env.NODEMAILER_USER,
        subject: subject,
        text: text,
        html: html,
      },(error, info) => {
        if (error) {
          reject(error);
          return("Error sending email: " + error);
        } else {
          resolve(info);
          return("Email sent...: " + info.response);
        }
      })
    })

  } catch (error) {
    console.log(`Quelque chose s'est mal passé ${error}, réessayer`);
  }
}
