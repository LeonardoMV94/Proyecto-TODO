import Tarea from "./todo.class.js";

class ListadoTareas {
  constructor() {
    this.tareas = [];
  }

  // metodos agregar eliminar
  agregarTarea(input) {
    const nuevaTarea = new Tarea(input, false);
    this.tareas.push(nuevaTarea);
  }

  eliminarTarea(id) {
    this.tareas.splice(id, 1);
  }

  editarTarea(indice, nuevoTitulo) {

    this.tareas[indice].titulo = nuevoTitulo;
    console.log("estado ", this.tareas[indice].getEstado());
  }

  completarTarea(indice) {
    console.log("indice ", this.tareas[indice].getEstado());
    this.tareas[indice].setEstado()
  }

  renderizarHTML() {
    const $ = document.querySelector.bind(document);
    const tareasElement = $("#cuerpo-tabla");

    let listadoTareas = "";
    for (const [indice, tarea] of this.tareas.entries()) {
      listadoTareas += `
                    <tr>
                        <td id="tarea-${indice}" class="${tarea.getEstado() ? 'text-decoration-line-through' : ''}">${tarea.getTitulo()}</td>
                        <td width = "10%">
                            <button id="completar-${indice}" onclick="completarTarea(${indice})" class="fa-solid fa-check text-success trans"></button>                            
                        </td>
                        <td width = "10%">
                            <button id="editar-${indice}" onclick="editarTarea(${indice})" class="fa-solid fa-pencil text-warning trans"></button>
                        </td>
                        <td width = "10%">
                            <button id="eliminar-${indice}" onclick="eliminarTarea(${indice})" class="fa-solid fa-x text-danger trans"></button>
                        </td>
                    </tr>
                    `;
    }

    tareasElement.innerHTML = listadoTareas;
  }
}

export default ListadoTareas;
