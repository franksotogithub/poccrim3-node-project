var mongoose = require('mongoose');  
var Schema = mongoose.Schema;

let ubicacionSchema= new Schema({

});

module.exports=mongoose.model('ubicacion',ubicacionSchema,'ubicaciones');
