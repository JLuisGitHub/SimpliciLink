// Objeto que asocia URLs con nombres de páginas
var paginas = {
    "index.html": "Inicio",
    "contacto.html": "Contacto",
    "descargas.html": "Descargas",
    "acerca.html": "Acerca de nosotros",
    "educacion.html": "Educacion Tecnologica",
    "login.html": "Inicio de sesion",
    "terminos.html": "Terminos Y Condiciones",
    // Agrega más URLs y nombres según sea necesario
};

// Función para realizar la búsqueda
function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.trim().toUpperCase();
    ul = document.getElementById("searchResults");
    ul.innerHTML = ''; // Limpiar los resultados anteriores

    // Si el campo de búsqueda está vacío, ocultar el menú flotante y salir
    if (filter === '') {
        ul.style.display = 'none';
        return;
    }

    // Filtrar las páginas que coincidan con el texto de búsqueda
    var matchingPages = Object.keys(paginas).filter(function(url) {
        return url.toUpperCase().indexOf(filter) > -1 || paginas[url].toUpperCase().indexOf(filter) > -1;
    });

    // Mostrar el menú flotante y los resultados de la búsqueda si hay coincidencias
    if (matchingPages.length > 0) {
        ul.style.display = 'block';
        matchingPages.forEach(function(url) {
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.href = url;
            a.textContent = paginas[url]; // Mostrar el nombre de la página en lugar de la URL
            li.appendChild(a);
            ul.appendChild(li);
        });
    } else {
        ul.style.display = 'none'; // Ocultar el menú flotante si no hay coincidencias
    }
}

// Escuchar el evento keyup en el input de búsqueda
document.getElementById("searchInput").addEventListener("keyup", function(event) {
    // Si se presiona Enter, realizar la búsqueda
    if (event.key === "Enter") {
        search();
    }
});
