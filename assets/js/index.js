import ListadoTareas from "./tareas.js";

document.addEventListener("DOMContentLoaded", () => {
  const $ = document.querySelector.bind(document);
  const input = document.querySelector("#tareaInput");
  const butonAgregar = document.querySelector("#agregarBtn");

  const tareas = new ListadoTareas();

  butonAgregar.addEventListener("click", () => {
    console.log("valor input ", input.value);
    if (input.value) {
      tareas.agregarTarea(input.value);
      tareas.renderizarHTML();
      input.value = "";
    }
  });

  window.completarTarea = (id) => {
    const elemento = document.getElementById(`tarea-${id}`);
    tareas.completarTarea(id);    
    if (!elemento.classList.contains("text-decoration-line-through")) {
      elemento.classList.add("text-decoration-line-through","text-secondary");
    } else {
      elemento.classList.remove("text-decoration-line-through","text-secondary");
    }
  };

  window.eliminarTarea = (id) => {
    const elemento = document.getElementById(`tarea-${id}`);
    console.log("id eliminar ", id);
    tareas.eliminarTarea(id);
    
    setInterval(() => {
      elemento.classList.add('animate__animated', 'animate__bounceOutLeft');
    }, 1000);
    tareas.renderizarHTML();
  };

  window.editarTarea = (id) => {
    const elemento = document.getElementById(`tarea-${id}`);
    const elementoEditar = document.getElementById(`editar-${id}`);
    elemento.contentEditable = true;
    elemento.focus();
    elementoEditar.classList.remove("fa-pencil", "fa-flip", "fa-solid", "text-success", "text-warning");
    elementoEditar.addEventListener('mouseover', () => {
      elementoEditar.classList.add('text-decoration-underline');
    });
    elementoEditar.addEventListener('mouseout', () => {
      elementoEditar.classList.remove('text-decoration-underline');
    });
    // elemento.classList.add("text-decoration-underline","text-secondary");
    
    elementoEditar.textContent = "Guardar";
    elementoEditar.addEventListener("click", () => {
      if (elemento.textContent.trim() !== "") {
        tareas.editarTarea(id, elemento.textContent);
        tareas.renderizarHTML();
        elemento.contentEditable = false;
        elementoEditar.classList.add("fa-pencil");
      }
    });
  };

  console.log(tareas);
});
