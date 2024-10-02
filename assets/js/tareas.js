import Tarea from "./todo.class.js";

class ListadoTareas {
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

    renderizarHTML() {
        const $ = document.querySelector.bind(document)
        const tareasElement =  $('listaTareas')
        
        let listadoTareas  = ''
        for (const tarea of this.tareas) {
            listadoTareas += `
                        <tr>
                        <td>${tarea.getTitulo()}</td>
                        <td>Listo</td>
                        <td>Editar</td>
                        <td>Eliminar</td>
                        </tr>
                    `
        }

        tareasElement.innerHTML = listadoTareas

    }
    
}

export default ListadoTareas

