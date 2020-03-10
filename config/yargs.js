const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca la tarea completada'
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea', { description })
    .command('actualizar', 'Actualiza o modifica una tarea', { description, completado })
    .command('borrar', 'Borra una tarea', { description })
    .command('listar', 'lista las tareas por su estado', { completado })
    .help()
    .argv;

module.exports = {
    argv
}

