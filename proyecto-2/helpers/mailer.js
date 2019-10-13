const nodemailer = require("nodemailer");
const pug = require("pug");
const fs = require("fs");

const transporter = nodemailer.createTransport({
  service: "Sendgrid",
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS
  }
});

const generateHTML = (filename, options) => {
  const html = pug.compileFile(`${__dirname}/../views/mails/${filename}.pug`);
  return html(options);
};

exports.send = options => {
  const html = generateHTML(options.filename, options);
  const mailOptions = {
    from: "🎃Deivid's mailer spamer🎃 <noreply@deivid.com>",
    to: options.email,
    subject: options.subject,
    message: options.message,
    html
  };
  return transporter.sendMail(mailOptions);
};
