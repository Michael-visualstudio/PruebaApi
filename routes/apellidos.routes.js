module.exports = app => {
    const apellidos = require("../controllers/apellidos.controller");
  
    var router = require("express").Router();
  
  //Obtiene listado de asignaturas
  // http://localhost:8080/api/apellidos/listado
  router.get("/listado", apellidos.listadoApellidos);
  
  // Guardar una asignatura
  // http://localhost:8080/api/apellidos/guardar
  router.post("/guardar", apellidos.guardar);
  
  // localhost:8080/api/apellidos
  app.use('/api/apellidos', router);
   
  //Eliminar
  // http://localhost:8080/api/apellidos/borrarv2/:cedula
  router.delete("/borrarv2/:cedula", apellidos.borrarv2);

  //Actualizar
  // http://localhost:8080/api/apellidos/actualizar
  router.put("/actualizar", apellidos.actualizar);
};
  