const mongoose = require("mongoose");

const VagaSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  quantidade: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Vaga", VagaSchema);