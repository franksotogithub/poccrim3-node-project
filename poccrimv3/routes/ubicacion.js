var express = require('express');
var router = express.Router();
const ubicacionController = require('../controllers/ubicacion');

/* GET users listing. */
router.get('/listar', function(req, res) {
    ubicacionController.listarUbicaciones(req,res);
});
router.get('/buscar', function(req, res) {
    ubicacionController.buscarUbicaciones(req,res);
});


module.exports = router;
