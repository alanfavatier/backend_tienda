const nodemailer = require('nodemailer');
const { config } = require('./config/config');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: config.smtpEmail,
    pass: config.smtpPassword,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: config.smtpEmail, // sender address
    to: 'lolpepito879@gmail.com', // list of receivers
    subject: 'Este es un nuevo correo ', // Subject line
    text: 'Hola pepito', // plain text body
    html: '<b>hola pepito</b>', // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

sendMail();
