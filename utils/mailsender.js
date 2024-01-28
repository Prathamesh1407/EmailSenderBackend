const brevo = require("sib-api-v3-sdk");
require("dotenv").config();

exports.mailsender = async (
  email,
  name,
  subject = "Sellerkin Mail",
  body = "Thanks for Subscribing"
) => {
  try {
    var defaultClient = brevo.ApiClient.instance;
    let apiKey = defaultClient.authentications["api-key"];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    let apiInstance = new brevo.TransactionalEmailsApi();
    let sendSmtpEmail = new brevo.SendSmtpEmail();

    sendSmtpEmail.sender = {
      name: "Sellerkin",
      email: "prathameshthorat1111@gmail.com",
    };
    sendSmtpEmail.to = [{ email: email, name: name }];
    sendSmtpEmail.subject = subject;
    sendSmtpEmail.htmlContent = `<html><body><h1>Hello ${name} ${body}</h1></body></html>`;

    // const info = apiInstance
    //   .sendTransacEmail(sendSmtpEmail)
    //   .then((data) => {
    //     console.log(
    //       "API called successfully. Returned data: " + JSON.stringify(data)
    //     );
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    // return info;
    const info = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(info)
    );
    return info;
  } catch (err) {
    console.log(err.message);
  }
};
