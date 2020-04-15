const Curriculo = require("../models/Curriculo");
const Registro = require("../models/Registro");

module.exports = {
  async index(req, res) {
    try {
      const { curso } = req.query;
      const curriculos = await Curriculo.find({ cursos: curso });

      return res.json(curriculos);
    } catch (err) {
      return res.status(400).send({ error: 'Falha ao consultar currículos' });
    }
  },
  
  async store(req, res) {
    const { filename } = req.file;
    const { cursos, sobre, link, expertise, skills, expProficional, interesses } = req.body;
    const { registro_id } = req.headers;

    const registro = await Registro.findById(registro_id);

    if(!registro){
      return res.status(400).json({ error: "Usuário não existe" });
    }

    const curriculo = await Curriculo.create({
      registro: registro_id,
      video: filename,
      cursos, 
      sobre, 
      link, 
      expertise, 
      skills, 
      expProficional, 
      interesses
    })

    return res.json(curriculo)
  }
};
