// server.js
const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/apply', upload.single('resume'), (req, res) => {
  const { name, email, phone, position } = req.body;
  const resume = req.file;
  // Save to database or send email
  res.send('Application received!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
