
const servidor = require('./src/config/servidor');
require ('./src/config/baseDatos')

servidor.listen(servidor.get('port'), () => {
    console.log('El puerto esta corriendo perfectamente');
})