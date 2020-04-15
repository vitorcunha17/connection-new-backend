const { Router } = require("express");
const multer = require("multer");
const RegistroController = require("./controllers/RegistroController");
const CurriculoController = require("./controllers/CurriculoController");
const VagaController = require("./controllers/VagaController");
const uploadConfig = require("./config/upload");

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/registros", RegistroController.index);
routes.post("/registro", RegistroController.store);
routes.get("/curriculos", CurriculoController.index);
routes.post("/curriculo", upload.single('video'), CurriculoController.store);
routes.get("/vagas", VagaController.index);
routes.post("/vaga", VagaController.store);

module.exports = routes;
