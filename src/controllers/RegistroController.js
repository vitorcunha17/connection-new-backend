const Registro = require("../models/Registro");

module.exports = {
  async index(req, res) {
    try {
      const registros = await Registro.find({});

      return res.json(registros);
    } catch (err) {
      return res.status(400).send({ error: 'Falha ao consultar registros' });
    }
  },

  async store(req, res) {
    try {
      const { email } = req.body;
      
      let registro = await Registro.findOne({ email });

      if (!registro) {
        registro = await Registro.create(req.body);
      }

      return res.json(registro);
    } catch (err) {
      return res.status(400).send({ error: 'Falha ao registrar' });
    }
  }
};
