"use strict";
const nodemailer = require("nodemailer");
require("dotenv").config();


const sendEmail = async (to, subject, html) => {
	let transporter = nodemailer.createTransport({
		host: "smtp-mail.outlook.com", //"smtp.gmail.com" for using gmail, "smtp-mail.outlook.com" for outlook
		port: 587,
		secure: false,
		auth: {
			user: `${process.env.SENDER_EMAIL}`,
			pass: `${process.env.SENDER_PASSWORD}`,
		},
	});
    console.log(process.env.SENDER_PASSWORD)
	let info = await transporter.sendMail({
		from: `"${process.env.SENDER_NAME}"${process.env.SENDER_EMAIL}`, // sender address
		to: to, // list of receivers
		subject: subject, // Subject line
		text: html, // plain text body
		html: html, // html body
	});

	console.log("Message sent: %s", info.messageId);
};
exports.sendEmail = sendEmail;
