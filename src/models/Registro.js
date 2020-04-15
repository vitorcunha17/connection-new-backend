const mongoose = require("mongoose");

const RegistroSchema = new mongoose.Schema({
  tipo: String,
  nome: String,
  email: String,
  senha: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Registro", RegistroSchema);
