const ubicacionModel= require('../models/ubicacion');


let Ubigeos ={
    listarUbicaciones(req,res){
        ubicacionModel.find({},function(err,listaUbicaciones){
            if(err){
                res.json({ok:false,err:'Error al obtener los departamentos'})
            }
            else{
                console.log(listaUbicaciones);
                res.json({ok:true,data:listaUbicaciones});
            }

        });
    },


    buscarUbicaciones(req,res){
        let search=req.query.search;

        ubicacionModel.find(
            {"$text": {"$search":search}},
            { "score": { "$meta": "textScore" }},
            function(err,listaUbicaciones){
            if(err){
                res.json({ok:false,err:'Error al obtener las ubicaciones'})
            }
            else{
                res.json({ok:true,data:listaUbicaciones});
            }

        }).sort({"score": { "$meta": "textScore" } ,"index":1}).limit(10);
    },
}

module.exports=Ubigeos;
