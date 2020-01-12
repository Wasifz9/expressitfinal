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
  const { firstname, type, lastname, email } = req.body;
  if (!firstname || !lastname || !email || !type || !req.body["due date"]) {
    return res.send("Please fill out the entire form.");
  }
  let mailOptions = {
    from: "expressit@expresalo.ca",
    to: "expressit@expresalo.ca",
    subject: "Expressit contact email",
    html: `<p>Email from: ${req.body.firstname[0]} ${req.body.lastname} (${req.body.email})</p><p>Requesting ${req.body.type} by ${req.body["due date"]}</p><p>${req.body.extra}</p>` 
  };
  const transporter = mailer.createTransport({
    service: "gmail",
    auth: {
      user: "expressit@expresalo.ca",
      pass: "Expressit2020"
    }
  });
  await transporter.sendMail(mailOptions);
  res.send("Thank you for the email.");
});

app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});
