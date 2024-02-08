const { Router } = require("express")
const routes = Router()
const { mostrarConsulta, guardarConsulta, eliminarConsulta , 
    editarConsulta, obtenerConsulta, obtenerConsultaPorReferencia, validarReferenciaExistente,
    enviarConsultaAsociada, obtenerConsultasPorSubclase }= require('../controller/consulta.controller')


routes.get('/listaConsultas', mostrarConsulta)

routes.post('/guardandoConsulta', guardarConsulta)

routes.delete ('/eliminarConsulta/:id', eliminarConsulta)

routes.put ('/editarConsulta/:id' , editarConsulta)

routes.get ('/consulta/:id', obtenerConsulta)

routes.get('/consultaPorReferencia/:referencia', obtenerConsultaPorReferencia)

routes.get('/validar-referencia/:referencia', validarReferenciaExistente)

routes.post('/enviarConsultaAsociada', enviarConsultaAsociada);

routes.get('/obtenerConsultasPorSubclase/:idSubclase', obtenerConsultasPorSubclase);





module.exports = routes