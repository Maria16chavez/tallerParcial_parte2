# Parte 2 del taller parcial
En esta parte se busca poner en práctica el uso de clases con ID, interactividad con eventos click y creaciones dinámicas.
Lo que se puede encontrar en este proyecto:
Usé getElementById para seleccionar el título, el input, el botón y la lista.
Con textContent cambié dinámicamente el título inicial a “Lista interactica de flores”, por lo tanto el titulo inicial
"Lista dinámica no apareció".
Luego, asocié un evento click al botón: cuando el usuario escribe en el input y da clic, se crea un nuevo elemento <li> 
usando document.createElement, se le asigna texto con textContent, se le agregan clases con classList.add, y se inserta a la lista mediante appendChild.
Además, cada <li> tiene un evento propio: si se hace clic sobre él, se elimina usando remove().
También agregué estilos dinámicos para resaltar los elementos.
Con CSS centré el contenedor con Flexbox y usé colores pastel para dar una interfaz amigable.
Este módulo demuestra cómo se integran: selección de elementos, modificación de contenido, manipulación de atributos/estilos,
creación dinámica de nodos, eliminación de elementos y manejo de eventos para lograr interactividad.
# Tecnologías utilizadas
- Visual Studio Code
- HTML
- CSS
- JavaScript
# Como usar
Descargar los tres archivos (HTML, CSS, JS) agruparlos en una carpeta, dicha carpeta
se abrirá en el área de trabajo de Visual Studio Code. 
Posterior al cargue, iniciamos ejecutando el index.html con la extensión
open live server.
# Elaborado por 
María Paula Chávez Aguirre para taller parcial Programación III
