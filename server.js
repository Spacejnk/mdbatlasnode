const express = require('express');
const app = express();
const connectDB = require('./DB/Connection');
require('dotenv/config');
const bodyParser = require('body-parser');

connectDB();
app.use(express.json({ extended: false }));
app.use('/api/userModel', require('./API/User'), bodyParser.json());
const Port = process.env.Port || 3005;

app.listen(Port, () => console.log('Server Started'));
 