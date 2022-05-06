var mongoose = require('mongoose');
var Libro = require('./modelos/libros.js');


mongoose.connect('mongodb+srv://usrLibros:1234@cluster0.gnio2.mongodb.net/libros?retryWrites=true&w=majority', {
    useNewUrlParser: true
  }).then(() => {
    console.log('Conectado a Mongo DB Atlas')
  })
  .catch(err => console.log(err));

function altalibro(){
  var nuevo = Libro({
    isbn: "1234567",
    titulo: "La vuelta al mundo en 80 dias",
    autor: "Julio Verne",
    anio: 1950,
    editorial: "Planeta"
  });

  nuevo.save((err, data)=>{
    if (err) {
      console.log("Ocurrio un error");
    } else {
      console.log(data);
    }
  });
}

altalibro();


