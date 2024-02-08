const { Schema, model, SchemaType} = require('mongoose')

const subclaseSchema = new Schema ({
    referencia: { type: String,
    required: [true, 'La referencia es obligatorio.']
},
    nombre: {type: String,
    required: [true, 'Nombre es obligatorio']
},
    categoria: { 
        type: Schema.Types.ObjectId,
        ref: 'categoria',
        required: true}
})


module.exports = model('subclase' , subclaseSchema , 'subclases')