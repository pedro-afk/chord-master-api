const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_SERVER)
    .then(() => {
        console.log('Connected on MongoDB!');
    }).catch((err) => {
        console.error('Failure to connecto with MongoDB: ', err);
    });

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Server running!`);
})