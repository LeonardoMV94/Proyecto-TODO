import Tarea from "./todo.class.js";

class ListadoTareas {
  constructor() {
    this.tareas = JSON.parse(localStorage.getItem('tareas')) || [];
  }

  // Método para guardar las tareas en localStorage
  guardarEnLocalStorage() {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  // metodos agregar eliminar
  agregarTarea(input) {
    const nuevaTarea = new Tarea(input, false);
    this.tareas.push(nuevaTarea);
    this.guardarEnLocalStorage();
  }

  eliminarTarea(id) {
    this.tareas.splice(id, 1);
    this.guardarEnLocalStorage();
  }

  editarTarea(indice, nuevoTitulo) {
    this.tareas[indice].titulo = nuevoTitulo;
    console.log("estado ", this.tareas[indice].getEstado());
    this.guardarEnLocalStorage();
  }

  completarTarea(indice) {
    console.log("indice ", this.tareas[indice].getEstado());
    this.tareas[indice].setEstado();
    this.guardarEnLocalStorage();
  }

  renderizarHTML() {
    const $ = document.querySelector.bind(document);
    const tareasElement = $("#cuerpo-tabla");

    // Limpiamos el contenido existente
    tareasElement.innerHTML = '';

    for (const [indice, tarea] of this.tareas.entries()) {
      const fila = document.createElement('tr');
      fila.className = 'animate__animated animate__slideInDown';

      const celdaTitulo = document.createElement('td');
      celdaTitulo.id = `tarea-${indice}`;
      celdaTitulo.className = tarea.getEstado() ? 'text-decoration-line-through' : '';
      celdaTitulo.textContent = tarea.getTitulo();
      fila.appendChild(celdaTitulo);

      const celdaCompletar = document.createElement('td');
      celdaCompletar.width = '10%';
      const botonCompletar = document.createElement('button');
      botonCompletar.id = `completar-${indice}`;
      botonCompletar.onclick = () => completarTarea(indice);
      botonCompletar.className = 'fa-solid fa-check text-success trans';
      celdaCompletar.appendChild(botonCompletar);
      fila.appendChild(celdaCompletar);

      const celdaEditar = document.createElement('td');
      celdaEditar.width = '10%';
      const botonEditar = document.createElement('button');
      botonEditar.id = `editar-${indice}`;
      botonEditar.onclick = () => editarTarea(indice);
      botonEditar.className = 'fa-solid fa-pencil text-warning trans';
      celdaEditar.appendChild(botonEditar);
      fila.appendChild(celdaEditar);

      const celdaEliminar = document.createElement('td');
      celdaEliminar.width = '10%';
      const botonEliminar = document.createElement('button');
      botonEliminar.id = `eliminar-${indice}`;
      botonEliminar.onclick = () => eliminarTarea(indice);
      botonEliminar.className = 'fa-solid fa-x text-danger trans';
      celdaEliminar.appendChild(botonEliminar);
      fila.appendChild(celdaEliminar);

      tareasElement.appendChild(fila);
    }
  }
  
}

export default ListadoTareas;
