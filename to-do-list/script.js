// Función para agregar una nueva tarea
function agregarTarea() {
  // Obtener el elemento de entrada del DOM donde se escribe la nueva tarea
  const input = document.getElementById("nuevaTarea");

  // Almacenar el texto ingresado en la variable textoTarea
  const textoTarea = input.value;

  // Validar que el campo no esté vacío
  if (textoTarea === "") {
    alert("Por favor, escribe una tarea."); // Mostrar alerta si está vacío
    return; // Salir de la función si no hay texto
  }

  // Crear un nuevo elemento <li> para la tarea
  const li = document.createElement("li");

  // Crear un <span> para contener el texto de la tarea
  const spanTexto = document.createElement("span");
  spanTexto.textContent = textoTarea; // Asignar el texto de la tarea al <span>
  li.appendChild(spanTexto); // Añadir el <span> al <li>

  // Botón de editar
  const botonEditar = document.createElement("button"); // Crear un botón para editar
  botonEditar.textContent = "Editar"; // Asignar texto al botón
  botonEditar.classList.add("edit-button"); // Añadir clase para estilo
  // Definir la función que se ejecutará al hacer clic en el botón de editar
  botonEditar.onclick = function () {
    modificarTarea(spanTexto); // Llamar a la función modificarTarea pasando el <span> de texto
  };

  // Botón de eliminar
  const botonEliminar = document.createElement("button"); // Crear un botón para eliminar
  botonEliminar.textContent = "Eliminar"; // Asignar texto al botón
  botonEliminar.classList.add("delete-button"); // Añadir clase para estilo
  // Definir la función que se ejecutará al hacer clic en el botón de eliminar
  botonEliminar.onclick = function () {
    eliminarTarea(li); // Llamar a la función eliminarTarea pasando el <li> completo
  };

  // Botón de confirmar
  const botonConfirmar = document.createElement("button"); // Crear un botón para confirmar
  botonConfirmar.textContent = "Confirmar"; // Asignar texto al botón
  botonConfirmar.classList.add("confirm-button"); // Añadir clase para estilo
  // Definir la función que se ejecutará al hacer clic en el botón de confirmar
  botonConfirmar.onclick = function () {
    confirmarTarea(spanTexto.textContent); // Llamar a la función confirmarTarea pasando el texto de la tarea
  };

  // Añadir los botones al <li>
  li.appendChild(botonEditar); // Añadir el botón de editar al <li>
  li.appendChild(botonEliminar); // Añadir el botón de eliminar al <li>
  li.appendChild(botonConfirmar); // Añadir el botón de confirmar al <li>

  // Añadir el <li> (tarea) a la lista de tareas en el DOM (documento)
  document.getElementById("listaTareas").appendChild(li); // Insertar el <li> en el elemento de la lista en el DOM
  input.value = ""; // Limpiar el campo de entrada después de agregar la tarea
}

// Función para modificar una tarea existente
function modificarTarea(spanTexto) {
  // Solicitar al usuario que ingrese un nuevo texto para la tarea
  const nuevaTarea = prompt("Modifica tu tarea:", spanTexto.textContent);
  // Verificar que el nuevo texto no esté vacío o cancelado
  if (nuevaTarea !== null && nuevaTarea !== "") {
    spanTexto.textContent = nuevaTarea; // Actualizar el texto del <span> con la nueva tarea
  }
}

// Función para eliminar una tarea
function eliminarTarea(elementoTarea) {
  elementoTarea.remove(); // Eliminar el elemento <li> de la lista
}

// Función para confirmar una tarea
function confirmarTarea(textoTarea) {
  alert("Tarea confirmada: " + textoTarea); // Muestra un alert con el texto de la tarea confirmada
}
