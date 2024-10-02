import { Tarea } from "./todo.class";

export class Tareas {
    constructor() {
        this.tareas = [];
    }

    // metodos agregar eliminar
    agregarTarea({titulo, estado}) {
        const nuevaTarea = new Tarea(titulo, estado)
        this.tareas.push(nuevaTarea)
    }

    eliminarTarea(titulo) {
        this.tareas = this.tareas.filter(tarea => tarea.titulo != titulo)
    }

    editarTarea(indice, nuevoTitulo){
        this.tareas[indice].titulo = nuevoTitulo
    }
    
}

