const log4js = require('log4js');

const logger = log4js.getLogger();

logger.level = "error";

logger.debug("Iniciando aplicacion en modo de pruebas.");
logger.info("La app ha iniciado correctamente");
logger.warn("Falta el archivo config de la app");
logger.error("No se pudo acceder al sistema de archivos del equipo");
logger.fatal("Aplicacion no se pudo ejecutar en el so");

// importante que el archivo eslintrc empiece con .
function sumar(x,y){
    return 5+5;
}

let x_1 = 0;

// que pasa si una funcion depende de otra
// como seria la prueba unitaria?

module.exports = sumar;