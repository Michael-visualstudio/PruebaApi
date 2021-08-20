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


//1. Borrar un registro por un campo que no sea el Id
exports.borrarv2 = (req,res) => {

  const cedula = req.params.cedula;

  Apellidos.deleteOne(
    //pasar el criterio de busqueda
    {cedula: cedula}
  ).then(data => {
    console.log(data);

    if(data.n==0){
      res.status(404).send({status:false, 
        mensaje: `No se pudo borrar la cedula de la persona: ${cedula}`});
    }
    else{
      res.send({status:true, mensaje: "Registro borrado..."});
    }
  }).catch( err => {
    res.status(500).send({ status:false,
        mensaje:
            err.message || "Error al eliminar una cedula..." + cedula
    });
});
}

//2.
exports.actualizar = (req,res) => {

  const cedula = req.body.cedula;
  if(!cedula){
    return res.status(404).send({status:false, mensaje:"Falta el parámtero cédula..."})
  }

  const ape = req.body.apellidos;
  const nom = req.body.nombres;
  const edad = req.body.edad;
  const sexo = req.body.sexo;

  Apellidos.updateOne(
    //pasar el criterio de busqueda
    {cedula: cedula},

    {$set:
      {
        apellidos: ape,
        nombres: nom,
        edad: edad,
        sexo: sexo
      }
    }

  ).then(data => {
    //console.log("Datos devueltos: ",data);

    if(data.n==0){
      res.status(404).send({status:false, 
        mensaje: `No se pudo actualizar el estudiante de matricula: ${cedula}`});
    }
    else{
      res.send({status:true, mensaje: "Registro actualizado..."});
    }
  }).catch( err => {
    res.status(500).send({ status:false,
        mensaje:
            err.message || "Error al actualizar el estudiante de matricula..." + cedula
    });
});
}