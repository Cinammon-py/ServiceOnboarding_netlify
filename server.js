const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.redirect('/index.html');
});

app.post('/submit-form', (req, res) => {
  const formData = req.body;

  //nodemailer to send email
  const transporter = nodemailer.createTransport({
    service: 'your_email_service_provider',
    auth: {
      user: 'gelmont17@gmail.com',
      pass: 'Changed@18',
    },
  });

  const mailOptions = {
    from: 'gelmont17@gmail.com',
    to: formData.EmailAddress,
    subject: 'Form Submission',
    text: `Form Data: ${JSON.stringify(formData)}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    }
    console.log('Email sent: ' + info.response);
  });

  res.send('Form submitted successfully!');
});

app.get('/', (req, res) => {
  res.send('Welcome to the Service Onboarding Assessment!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
