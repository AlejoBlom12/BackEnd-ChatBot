const modeloConsulta = require("../models/model.consulta")
const { respuesta } = require("../helper/respuesta");
const { respuesta1 } = require("../helper/respuestaEdit");
const { respuestaE } = require("../helper/eliminar");



const controlador = {}

controlador.obtenerConsulta = async (req, res) => {
  
  try {
     
    const id = req.params.id
    const consulta = await modeloConsulta.findById(id)
    
    if (!consulta) {

      res.status(404).json({msg: "No existe la consulta"});
    }
    
    res.status(200).send(consulta);


  }catch(err){
    console.error('Error al encontrar:',err);
    respuesta.status = "500";
    respuesta.message = "No se ha podido encontrar correctamente.";
    respuesta.data = error;
    res.status(500).send(respuesta);
  }
}

controlador.editarConsulta = async ( req, res ) => {

  try {

    const id = req.params.id;
    const consultaEdit = req.body
    const consulta = await modeloConsulta.findByIdAndUpdate({ _id: id }, { $set: consultaEdit });
    
    respuesta1.status = "200"
    respuesta1.message = "Se ha editado con exito."
    respuesta1.principal = consulta
    respuesta1.editado = consultaEdit

    res.status(200).send(respuesta1);
    
  } catch (error) {
    console.error('Error al actualizar:', error);

    respuesta.status = "500"
    respuesta.message = "No se ha podido actualizar correctamente."
    respuesta.data = error

    res.status(500).send(respuesta);
  }
}



controlador.mostrarConsulta = async (req, res) => {
  try {
    const consultas = await modeloConsulta.find().populate('subclase', 'nombre');
    res.json(consultas);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
}


controlador.eliminarConsulta = async (req , res) => {
   try {
    const idParam = req.params.id;
    const eliminado = await modeloConsulta.findByIdAndDelete(idParam);

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


controlador.guardarConsulta = async (req, res) =>{
  try{
    const body = req.body;
    const newConsulta = new modeloConsulta(body);
    await newConsulta.save();
    
    respuesta.status = 200;
    respuesta.message = "La consulta se ha guardado con exito.";
    respuesta.data = body;

    res.status(200).send(respuesta);
  } catch (error) {
    const errorsCatch = error.errors;
    const errors = {};

    for (let i in errorsCatch) {
        errors[i] = errorsCatch[i].message;
      }
  
      respuesta.status = 500;
      respuesta.message = "Ocurrio un error, la consulta no se ha podido guardar.";
      respuesta.data = errors;
      
      res.status(500).json(respuesta);
    }
  }

  controlador.obtenerConsultaPorReferencia = async (req, res) => {
    try {
      const referencia = req.params.referencia;
      const consulta = await modeloConsulta.findOne({ referencia: referencia });
  
      if (!consulta) {
        res.status(404).json({ msg: "No existe la consulta" });
        return;
      }
  
      res.status(200).send(consulta);
    } catch (err) {
      console.error('Error al encontrar:', err);
      respuesta.status = "500";
      respuesta.message = "No se ha podido encontrar correctamente.";
      respuesta.data = err;
      res.status(500).send(respuesta);
    }
  }


  controlador.validarReferenciaExistente = async (req, res) => {
    try {
      const referencia = req.params.referencia;
      const referenciaExistente = await modeloConsulta.findOne({ referencia: referencia });
  
      if (referenciaExistente) {
        res.status(400).json({ message: "La referencia ya está en uso." });
      } else {
        res.status(200).json({ message: "La referencia está disponible." });
      }
    } catch (error) {
      console.error('Error al validar referencia:', error);
      res.status(500).json({ message: "Ocurrió un error al validar la referencia." });
    }
  }


  controlador.enviarConsultaAsociada = async (req, res) => {
    try {
      const { idConsultaAsociada, otrosDatos } = req.body;
  
      const consultaAsociada = await modeloConsulta.findById(idConsultaAsociada);
  
      if (!consultaAsociada) {
        return res.status(404).json({ message: 'Consulta asociada no encontrada.' });
      }
  
      res.status(200).json({ message: 'Consulta asociada enviada con éxito.' });
    } catch (error) {
      console.error('Error al enviar consulta asociada:', error);
      res.status(500).json({ message: 'Error al enviar consulta asociada.' });
    }
  };

  controlador.obtenerConsultasPorSubclase = async (req, res) => {
    const { idSubclase } = req.params;
  
    try {
      const consultas = await Consulta.find({ subclase: idSubclase });
      res.json(consultas);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las consultas por subclase.' });
    }
  };
  
module.exports = controlador