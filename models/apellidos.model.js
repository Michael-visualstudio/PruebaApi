module.exports = mongoose => {
    const Apellidos = mongoose.model(
      "lista",
      mongoose.Schema(
        {
            "cedula" : String,
            "apellido" : String,
            "nombre" : String,
            "edad" : Number,
            "sexo" : String,
        },
        { timestamps: true }
      )
    );
  
    return Apellidos;
  };