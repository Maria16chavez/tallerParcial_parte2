// Selecciona elementos por ID 
const titulo = document.getElementById('titulo'); 
const input = document.getElementById('nuevoItem');

const boton = document.getElementById('agregar'); 
const lista = document.getElementById('lista');

// Agrega evento al botón 
boton.addEventListener('click', () => { 
    const texto = input.value;
    if (texto) { 
        // Crea nuevo elemento li 
        const li = document.createElement('li'); 
        li.textContent = texto; 
        // Agrega clase 
        li.classList.add('item'); 
        // Añade a la lista /
        lista.appendChild(li);
        //Limpia input 
        input.value = '';

        // Agrega evento para eliminar (interactividad) 
        li.addEventListener('click', () => { 
            li.remove(); // elimina el <li> de la lista
        });

        // Modifica estilo dinámico 
        li.classList.add('rojo'); // agrega la clase 'rojo' al li
    } 
});

//Modificación inicial: cambia título 
titulo.textContent = "Lista interactiva de flores";
