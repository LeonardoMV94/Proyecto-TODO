import Tarea from "./todo.class.js";

class ListadoTareas {
  tareas = new Set();
  constructor() {
    this.cargarTareas();
    this.renderizarHTML();
  }

  cargarTareas() {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      const tareasParseadas = JSON.parse(tareasGuardadas);
      console.log("tareasParseadas ", tareasParseadas)
      this.tareas = new Set(tareasParseadas.map(tarea => new Tarea(tarea.titulo, tarea.estado)));
      console.log("this.tareas ", this.tareas)
    } else {
      this.tareas = new Set();
    }
  }

  // Método para guardar las tareas en localStorage
  guardarEnLocalStorage() {
    localStorage.setItem('tareas', JSON.stringify(Array.from(this.tareas)));
  }

  // metodos agregar eliminar
  agregarTarea(input) {
    const nuevaTarea = new Tarea(input, false);
    this.tareas.add(nuevaTarea);
    this.guardarEnLocalStorage();
  }

  eliminarTarea(id) {
    const tareasArray = Array.from(this.tareas);
    tareasArray.splice(id, 1);
    this.tareas = new Set(tareasArray);
    this.guardarEnLocalStorage();
  }

  editarTarea(indice, nuevoTitulo) {
    const tareasArray = Array.from(this.tareas);
    tareasArray[indice].titulo = nuevoTitulo;
    this.tareas = new Set(tareasArray);
    console.log("estado ", tareasArray[indice].getEstado());
    this.guardarEnLocalStorage();
  }

  completarTarea(indice) {
    const tareasArray = Array.from(this.tareas);
    console.log("indice ", tareasArray[indice].getEstado());
    tareasArray[indice].setEstado();
    this.tareas = new Set(tareasArray);
    this.guardarEnLocalStorage();
  }

  renderizarHTML() {
    
    const $ = document.querySelector.bind(document);
    const tareasElement = $("#cuerpo-tabla");

    // Limpiamos el contenido existente
    tareasElement.innerHTML = '';

    Array.from(this.tareas).forEach((tarea, indice) => {
      const fila = document.createElement('tr');
      
      fila.className = 'animate__animated animate__slideInDown';

      const celdaTitulo = document.createElement('td');
      celdaTitulo.id = `tarea-${indice}`;
      console.log('tarea renderizado: ', tarea)
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
      botonEditar.className = 'fa-solid fa-pencil fa-flip text-warning trans';
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
    });
  }
  
}

export default ListadoTareas;
