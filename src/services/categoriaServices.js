
const modeloCategoria = require('../models/model.categoria')

const listaCategoria = async () => {
    return await modeloCategoria.find()
}


module.exports = { listaCategoria }