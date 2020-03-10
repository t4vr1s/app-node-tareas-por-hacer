const fs = require('fs');
const { isNull } = require('util');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error(`no se pudo grabar`, err);
        }

    })
}

const listarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (description) => {
    listarDB();
    let porHacer = {
        description,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = (completado = false) => {
    listarDB();
    return listadoPorHacer;
}

const actualizar = (description, completado = true) => {
    listarDB();
    let index = listadoPorHacer.findIndex(tarea => description === tarea.description);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (description) => {
    listarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => description !== tarea.description);
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}