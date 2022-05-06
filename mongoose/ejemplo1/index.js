var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://usrLibros:1234@cluster0.gnio2.mongodb.net/libros?retryWrites=true&w=majority', {
    useNewUrlParser: true
  }).then(() => {
    console.log('Conectado a Mongo DB Atlas')
  })
  .catch(err => console.log(err));
