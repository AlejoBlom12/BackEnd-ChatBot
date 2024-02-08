const { Schema, model } = require('mongoose');

const consultaSchema = new Schema({
    referencia: { 
        type: Number, 
        required: [true, 'La referencia es obligatoria'] 
    },
    pregunta: { 
        type: String, 
        required: [true, 'Pregunta inválida'] 
    },
    respuesta: { 
        type: String, 
        required: [true, 'Respuesta inválida'] 
    },
    subclase: {
        type: Schema.Types.ObjectId,
        ref: 'subclase',  
        required: true
    },
    fecha: { type: Date, 
        default: Date.now() }
});

module.exports = model('consulta', consultaSchema, 'consultas');