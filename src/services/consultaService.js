
const modeloConsulta = require('../models/model.consulta')

const listadoConsulta = async () => {
    return await modeloConsulta.find()
}


module.exports = { listadoConsulta }