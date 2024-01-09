const mongoose = require('mongoose')

// definindo a collection
const LouvorCollection = new mongoose.Schema({
    louvorNumero: Number,
    louvorNome: String,
    louvorIntro: String,
    louvorLetra: String,
    louvorSincronizado: Boolean,
    louvorLinkYT: String
});
module.exports = mongoose.model('louvores', LouvorCollection)