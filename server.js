const express = require("express");
const app = express();
const path = require("path");
const mailer = require("nodemailer");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static("static"));



app.post("/mail", async (req, res) => {

  const { firstname, type, subject } = req.body;
  if (!firstname[0] || !firstname[1] || !type || !subject || !req.body["due date"]) {
    return res.send("Please fill out the entire form.");
  }
  let mailOptions = {
    from: "no.reply.pitchdev@gmail.com",
    to: "kaiferrall@gmail.com",
    subject: "Dasd",
    html: `<p>Email from: ${req.body.firstname[0]} ${req.body.firstname[1]}</p><p>Requesting ${req.body.type} by ${req.body["due date"]}</p><p>${req.body.subject}</p>` 
  };
  const transporter = mailer.createTransport({
    service: "gmail",
    auth: {
      user: "no.reply.pitchdev@gmail.com",
      pass: "PitchdevEmail"
    }
  });
  await transporter.sendMail(mailOptions);
  res.send("Thank you for the email.");
});

app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});
