const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors');

const comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log(porHacer.crear(argv.description));
        break;
    case 'listar':
        let listado = porHacer.getListado(argv.completado);
        for (const tarea of listado) {
            console.log('======Por Hacer======'.green);
            console.log(tarea.description);
            console.log('Estado: ', tarea.completado);
            console.log('====================='.green);
        }
        break;
    case 'actualizar':
        console.log(porHacer.actualizar(argv.description, argv.completado));
        break;
    case 'borrar':
        console.log(porHacer.borrar(argv.description));
        break;
    default:
        console.log('no existe ese comando');
        break;
}