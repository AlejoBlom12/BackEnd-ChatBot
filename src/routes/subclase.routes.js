const { Router } = require("express")
const routes = Router()
const { editarSubclase, eliminarSubclase, guardarSubclase , mostrarSubclase, 
    obtenerSubclase, obtenerSubclasePorReferencia, obtenerTodasSubclases, 
    obtenerSubclases, obtenerSubclasesPorCategoria } = require('../controller/subclase.controller')


routes.get('/listaSubclases', mostrarSubclase)

routes.post('/guardandoSubclases', guardarSubclase)

routes.delete('/eliminarSubclase/:id', eliminarSubclase)

routes.put ('/editarSubclase/:id' , editarSubclase)

routes.get ('/subclase/:id', obtenerSubclase)

routes.get('/subclasePorReferencia/:referencia', obtenerSubclasePorReferencia)

routes.get('/obtenerTodasSubclases', obtenerTodasSubclases);

routes.get('/obtenerSubclases/:idCategoria', obtenerSubclases);

routes.get('/obtenerSubclasesPorCategoria/:referencia', obtenerSubclasesPorCategoria);




module.exports = routes