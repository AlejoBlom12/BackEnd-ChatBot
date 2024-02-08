
const { respuesta } = require ('../helper/respuesta')
const { respuesta1 } = require("../helper/respuestaEdit");
const { respuestaE } = require("../helper/eliminar");
const subclaseModel = require('../models/model.subclase');


const controlador = {}

controlador.obtenerSubclase = async (req, res) => {
  
  try {
     
    const id = req.params.id
    const subclase = await subclaseModel.findById(id)
    
    if (!subclase) {

      res.status(404).json({msg: "No existe la subclase"});
    }
    
    res.status(200).send(subclase);


  }catch(err){
    console.error('Error al encontrar:',err);
    respuesta.status = "500";
    respuesta.message = "No se ha podido encontrar correctamente.";
    respuesta.data = error;
    res.status(500).send(respuesta);
  }
}

controlador.editarSubclase = async ( req, res ) => {

  try {

    const id = req.params.id;
    const EditSubclase = req.body
    const subclase = await subclaseModel.findByIdAndUpdate({ _id: id }, { $set: EditSubclase });
    
    respuesta1.status = "200"
    respuesta1.message = "Se ha editado con exito."
    respuesta1.principal = subclase
    respuesta1.editado = EditSubclase

    res.status(200).send(respuesta1);
    
  } catch (error) {
    console.error('Error al actualizar:', error);

    respuesta.status = "500"
    respuesta.message = "No se ha podido actualizar correctamente."
    respuesta.data = error

    res.status(500).send(respuesta);
  }
}



controlador.mostrarSubclase = async (req, res) => {
  
  try{
    const subclases = await subclaseModel.find().populate('categoria', 'nombre')
    res.json(subclases)
  }catch(err){
    res.status(500).json({ Error: error.message})
  }
}


controlador.eliminarSubclase = async (req , res) => {
   try {
    const idParam = req.params.id;
    const eliminado = await subclaseModel.findByIdAndDelete(idParam);

    respuestaE.status = "200";
    respuestaE.message = "Se ha eliminado con éxito.";
    respuestaE.Eliminado = eliminado;
    res.status(200).send(respuestaE);
  

  } catch (error) {
    console.error('Error al eliminar:', error);
    respuesta.status = "500";
    respuesta.message = "No se ha podido eliminar correctamente.";
    respuesta.data = error;
    res.status(500).send(respuesta);
  }
}


controlador.guardarSubclase = async (req, res) =>{
  try{
    const body = req.body;
    const newSubclase = new subclaseModel(body);
    await newSubclase.save();
    
    respuesta.status = 200;
    respuesta.message = "La subclase se ha guardado con exito.";
    respuesta.data = body;

    res.status(200).send(respuesta);
  } catch (error) {
    const errorsCatch = error.errors;
    const errors = {};

    for (let i in errorsCatch) {
        errors[i] = errorsCatch[i].message;
      }
  
      respuesta.status = 500;
      respuesta.message = "Ocurrio un error, la subclase no se ha podido guardar.";
      respuesta.data = errors;
      
      res.status(500).json(respuesta);
    }
  }

  controlador.obtenerSubclasePorReferencia = async (req, res) => {
    try {
      const referencia = req.params.referencia;
      const subclase = await subclaseModel.findOne({ referencia: referencia });
  
      if (!categoria) {
        res.status(404).json({ msg: "No existe la subclase" });
        return;
      }
  
      res.status(200).send(subclase);
    } catch (err) {
      console.error('Error al encontrar:', err);
      respuesta.status = "500";
      respuesta.message = "No se ha podido encontrar correctamente.";
      respuesta.data = err;
      res.status(500).send(respuesta);
    }
  }

  controlador.obtenerTodasSubclases = async (req, res) => {
    try {
      const subclases = await subclaseModel.find();
      res.status(200).json(subclases);
    } catch (error) {
      console.error('Error al obtener todas las subclases:', error);
      respuesta.status = "500";
      respuesta.message = "No se ha podido obtener todas las subclases correctamente.";
      respuesta.data = error;
      res.status(500).send(respuesta);
    }
  }
  
  controlador.obtenerSubclases = async (req, res) => {
    const { idCategoria } = req.params;
  
    try {
      const subclases = await Subclase.find({ categoria: idCategoria });
      res.json(subclases);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las subclases.' });
    }
  };

  controlador.obtenerSubclasesPorCategoria = async (req, res) => {
    try {
      const categoriaId = req.params.referencia;
      const subclases = await subclaseModel.find({ categoria: categoriaId });
  
      res.status(200).json(subclases);
    } catch (error) {
      console.error('Error al obtener subclases por categoría:', error);
      respuesta.status = "500";
      respuesta.message = "No se ha podido obtener las subclases por categoría correctamente.";
      respuesta.data = error;
      res.status(500).send(respuesta);
    }
  }
  
  
  
  module.exports = controlador