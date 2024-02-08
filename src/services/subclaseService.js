
const { model } = require('mongoose')
const modelSubclase = require('../models/model.subclase')

const listaSubclase = async () => {
    return await modelSubclase.find()
}



module.exports = { listaSubclase }