const Chord = require("../models/chord");

module.exports = {
  async store(req, res) {
    try {
      const {
        chordNumber,
        chordName,
        chordIntro,
        chordContent,
        sync,
        chordLink,
      } = req.body;
      const chord = await Chord.create({
        chordNumber,
        chordName,
        chordIntro,
        chordContent,
        sync,
        chordLink,
      });
      return res.status(201).json(chord);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async index(req, res) {
    try {
      const chords = await Chord.find();
      res.json(chords);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async detail(req, res) {
    try {
      const { _id } = req.params;
      const chord = await Chord.findOne({ _id });
      if (chord) {
        res.json(chord);
      } else {
        res.status(404).end();
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const {
        _id,
        chordNumber,
        chordName,
        chordIntro,
        chordContent,
        sync,
        chordLink,
      } = req.body;
      let dataCreate = {};
      dataCreate = {
        chordNumber,
        chordName,
        chordIntro,
        chordContent,
        sync,
        chordLink,
      };
      const update = await Chord.findByIdAndUpdate(
        { _id },
        dataCreate,
        { new: true }
      );
      if (update) {
        res.json(update);
      } else {
        res.status(404).end();
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const { _id } = req.params;
      const deleteChord = await Chord.findByIdAndDelete({ _id });
      if (deleteChord) {
        res.status(204).end();
      } else {
        res.status(404).end();
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
