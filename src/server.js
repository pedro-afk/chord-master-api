const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes');
const cors = require('cors');
const port = 3333;

// Configura o dotenv
const dotenv = require('dotenv');
dotenv.config();

// Connection
mongoose.set('strictQuery', true);
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8erystv.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log('Conectado ao MongoDB com sucesso.');
}).catch((err) => {
    console.error('Erro ao tentar conectar com o MongoDB: ', err);
});

// Prepara express e as routes
app.use(cors());
app.use(express.json());
app.use(routes);

// Starting the server
app.listen(port, () =>{
    console.log(`Servidor rodando na porta: ${port}`);
})