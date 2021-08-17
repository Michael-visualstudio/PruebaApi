const db = require("../models");
const Apellidos = db.apellidos;


//Listado de apellidos
exports.listadoApellidos = (req, res) => {

  const codigo = req.query.codigo;
    
  let condicion = codigo ? {codigo: codigo}:{};
  
  Apellidos.find(condicion).then( data => {
    res.send(data);
  }).catch( err => {
    res.status(500).send(
      {status:false, mensaje: err.message}
    )
  });
}


//Guardar una asignatura 
exports.guardar = (req, res) => {
    const cedula = req.body.cedula;
    const apellido = req.body.apellido;
    const nombres = req.body.nombres;
    const edad = req.body.edad;
    const sexo = req.body.sexo;

    const ape = new Apellido({
        "cedula": cedula,
        "apellido": apellido,
        "nombre": nombres,
        "edad": edad,
        "sexo": sexo
    });

    asg.save(asg).then( data => {
        res.send(data);
    }).catch( err => {
        res.status(500).send({
            mensaje:
                err.message || "Error al guardar datos en la coleccion de lista..."
        });
    });
}
