const mongoose = require("mongoose");

const CurriculoSchema = new mongoose.Schema({
    video: String,
    cursos: String,
    sobre: String,
    links: String,
    expertise: String,
    skills: String,
    expProficional: String,
    interesses: String,
    registro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Registro'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Curriculo", CurriculoSchema);
