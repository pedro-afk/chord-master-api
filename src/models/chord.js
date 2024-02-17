const mongoose = require('mongoose')

const ChordCollection = new mongoose.Schema({
    chordNumber: Number,
    chordName: String,
    chordIntro: String,
    chordContent: String,
    chordLink: String
});
module.exports = mongoose.model('chords', ChordCollection)