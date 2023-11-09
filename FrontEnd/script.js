// Simula cargar contenido dinámico en la página
document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById("content");

    // Lógica para cargar contenido en la página
    // Puedes utilizar JavaScript para interactuar con la API del backend.

    // Ejemplo de carga de contenido en la página:
    content.innerHTML = "<h2>Últimos productos destacados</h2>";
    content.innerHTML += "<div class='product'>Nombre del Producto 1</div>";
    content.innerHTML += "<div class='product'>Nombre del Producto 2</div>";
    content.innerHTML += "<div class='product'>Nombre del Producto 3</div>";
});
