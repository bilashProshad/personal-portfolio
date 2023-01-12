const nodemailer = require("nodemailer");

const contactEmail = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

const contact = (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  if (
    !req.body.firstName ||
    !req.body.lastName ||
    !email ||
    !message ||
    !phone
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all informations." });
  }

  const mail = {
    from: name,
    to: process.env.MAIL_TO,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res
        .status(500)
        .json({ success: false, error, message: "Failed, try again later!" });
    } else {
      res
        .status(200)
        .json({ code: 200, success: true, status: "Message Sent" });
    }
  });
};

module.exports = { contact };
