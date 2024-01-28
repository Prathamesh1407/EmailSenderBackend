const { mailsender } = require("../utils/mailsender");

exports.mail = async (req, res) => {
  try {
    const { email, name, subject, body } = req.body;
    const sendMail=await mailsender(email, name, subject, body);

    if(!sendMail)
    {
        return res.status(500).json({
            success: false,
            message: "Mail couldn't reach",
          });
    }
    console.log("Mail Sent Successfully")
    return res.status(200).json({
      success: true,
      message: "Mail sent Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Mail couldn't reach",
      error: err.message,
    });
  }
};
