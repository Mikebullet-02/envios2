const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

exports.sendEmailOnFormSubmit = functions.firestore
    .document("contacts/{formId}")
    .onCreate(async (snapshot, context) => {
      const form = snapshot.data();
      const {url, phoneNumber, enterprise, city, email, envios} = form;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false,
        auth: {
          user: "desarrollowebodm@gmail.com",
          pass: "dwjxplmpaluexeun",
        },
      });

      const mailOptions = {
        from: "desarrollowebodm@gmail.com",
        to: "mauriciodelgado1300@gmail.com",
        subject: "Nuevo cliente potencial",
        html: `
        <h2>New form submission from your website:</h2>
        <p><strong>Nombre:</strong> ${url}</p>
        <p><strong>Telefono:</strong> ${phoneNumber}</p>
        <p><strong>Empresa:</strong> ${enterprise}</p>
        <p><strong>Ciudad:</strong> ${city}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Opción seleccionada:</strong> ${envios}</p>
      `,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
      } catch (error) {
        console.error(error);
      }
    });
