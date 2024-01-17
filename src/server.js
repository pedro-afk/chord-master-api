const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes');
const cors = require('cors');
const port = 3333;

const dotenv = require('dotenv');
dotenv.config();

mongoose.set('strictQuery', true);
// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8erystv.mongodb.net/?retryWrites=true&w=majority`)
mongoose.connect('mongodb://127.0.0.1:27017/chord_master')
.then(() => {
    console.log('Conectado ao MongoDB com sucesso.');
}).catch((err) => {
    console.error('Erro ao tentar conectar com o MongoDB: ', err);
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () =>{
    console.log(`Servidor rodando na porta: ${port}`);
})