//Primero que todo ejecutamos el npm init en la carpeta del proyecto
//Importamos express - se debe tener instalado con npm install express
const express = require('express');

//Creamos instacia de express
const app = express();

//Funciones GET, POST, PUT, DELETE
//GET sencillo retornando JSON
app.get('/', function(req, res) {
    res.json('get raiz');
});
//GET recibiendo parametro por url
app.get('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json('Aqui va el json desde GET con parametro: ' + id);
});
//GET recibiendo parametro por url+valor - se llama con la url+?+identificador+=+valor si hay varios valores se pone &
app.get('/usuario', function(req, res) {

    //recogemos variables por url
    let nombre = req.query.nombre || 'Benito Camelas';
    let edad = req.query.edad || 0
    let direccion = req.query.direccion || 'Avenida siempre viva'

    

    res.json('Aqui va el json desde GET con parametros por url: ' + nombre + edad + direccion);
});

//POST
app.post('/usuario', function(req, res) {
    res.json('Aqui va el json desde POST');
});

//PUT
app.put('/usuario', function(req, res) {
    res.json('Aqui va el json desde PUT');
});

//Delete
app.delete('/usuario', function(req, res) {
    res.json('Aqui va el json desde DELETE');
});

//Definimos puerto de escucha
app.listen(3000, () => {
    console.log('Escuchando puerto bien');
});