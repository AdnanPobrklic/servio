const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use('/user', require('./routes/user'));
app.use('/company', require('./routes/company'));
app.use('/offer', require('./routes/offer'));
app.use('/request', require('./routes/request'));
app.use('/review', require('./routes/review'));
app.use('/', require('./routes/authentication'));
app.use('/service', require('./routes/service'));

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});