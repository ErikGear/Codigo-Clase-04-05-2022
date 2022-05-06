var express = require('express');
var router = express.Router();
//simular base de datos
//var tablaLibros = "{'id':1, 'titulo':'el perfume', 'autor':'Patrick Suskind'}";
var tablaLibros = {'id':1, 'titulo':'el perfume', 'autor':'Patrick Suskind'};
var tablaLibros2 = [
                    {'id':1, 'titulo':'el perfume', 'autor':'Patrick Suskind'},
                    {'id':2, 'titulo':'EL hobit', 'autor':'Tolkien'},
                    {'id':3, 'titulo':'La divina comedia', 'autor':'Dante'}
                  ];
router.get('/', function(req, res, next) {
  //aqui se realizaria la consulta a BD
  res.status(200).json(tablaLibros2);

});

router.get('/:idLibro', (req,res,next)=>{
  var id = req.params.idLibro;
  res.status(200).json(tablaLibros2[id-1] );
} );

router.post('/:idLibro', (req,res, next)=>{
  res.status(404).json({'error':'operacion no permitida'});
});

router.post('/', (req, res, next)=> {
  console.log(req.body);
  var libro  = {
    titulo:req.body.titulo,
    autor:req.body.autor
  };
  //insert en base de datos del objeto libro
  // la respuesta de BD regresarla a el cliente 
  
} );

router.patch('/:idLibro',()=>{
  
});

module.exports = router;



//mongosh "mongodb+srv://cluster0.gnio2.mongodb.net/myFirstDatabase" --apiVersion 1 --username <username>