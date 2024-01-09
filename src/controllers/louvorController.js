const Louvor = require("../models/louvor");

module.exports = {
  async store(req, res) {
    try {
      const {
        louvorNumero,
        louvorNome,
        louvorIntro,
        louvorLetra,
        louvorSincronizado,
        louvorLinkYT,
      } = req.body;
      const louvor = await Louvor.create({
        louvorNumero,
        louvorNome,
        louvorIntro,
        louvorLetra,
        louvorSincronizado,
        louvorLinkYT,
      });
      return res.status(201).json(louvor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async index(req, res) {
    try {
      const louvores = await Louvor.find();
      res.json(louvores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async detail(req, res) {
    try {
      const { _id } = req.params;
      const procuraLouvor = await Louvor.findOne({ _id });
      if (procuraLouvor) {
        res.json(procuraLouvor);
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
        louvorNumero,
        louvorNome,
        louvorIntro,
        louvorLetra,
        louvorSincronizado,
        louvorLinkYT,
      } = req.body;
      let dataCreate = {};
      dataCreate = {
        louvorNumero,
        louvorNome,
        louvorIntro,
        louvorLetra,
        louvorSincronizado,
        louvorLinkYT,
      };
      const atualizaLouvor = await Louvor.findByIdAndUpdate(
        { _id },
        dataCreate,
        { new: true }
      );
      if (atualizaLouvor) {
        res.json(atualizaLouvor);
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
      const deletaLouvor = await Louvor.findByIdAndDelete({ _id });
      if (deletaLouvor) {
        res.status(204).end();
      } else {
        res.status(404).end();
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
