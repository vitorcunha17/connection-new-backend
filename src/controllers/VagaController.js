const Vaga = require("../models/Vaga");

module.exports = {
  async index(req, res) {
    try {
      const vagas = await Vaga.find({});

      return res.json(vagas);
    } catch (err) {
      return res.status(400).send({ error: 'Falha ao consultar vagas' });
    }
  },
  
  async store(req, res) {
    try {
      const vaga = await Vaga.create(req.body);

      return res.json(vaga);
    } catch (err) {
      return res.status(400).send({ error: 'Falha ao cadastrar vaga' });
    }
  }
};
