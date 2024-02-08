const { Router } = require("express")
const routes = Router()
const { editarCategoria, eliminarCategoria, guardarCategoria,  mostrarCategoria, 
    obtenerCategoria, obtenerCategoriaPorReferencia, obtenerTodasCategorias, 
    verificarCategoriaPorReferencia  } = require('../controller/categoria.controller')


routes.get('/listaCategoria', mostrarCategoria)

routes.get ('/categoria/:id', obtenerCategoria)

routes.get('/categoriaPorReferencia/:referencia', obtenerCategoriaPorReferencia)

routes.get('/obtenerTodasCategorias', obtenerTodasCategorias);

routes.post('/guardandoCategoria', guardarCategoria)

routes.delete ('/eliminarCategoria/:id', eliminarCategoria)

routes.put ('/editarCategoria/:id' , editarCategoria)

routes.get('/verificarCategoriaPorReferencia/:referencia', verificarCategoriaPorReferencia);




module.exports = routes