// Función para activar el efecto de cambio de menú
function onClickMenu() {
  // Seleccionar elementos del DOM y aplicar clases de cambio de estilo
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

// Seleccionar todos los enlaces de la barra de navegación y agregar evento click
var navLinks = document.querySelectorAll(".nav li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    // Activar función onClickMenu para cerrar el menú al hacer click
    onClickMenu();
    // Obtener el valor del atributo href del enlace clickeado
    var target = this.getAttribute("href");
    // Esperar 500ms antes de scrollear hacia la sección correspondiente
    setTimeout(function () {
      document.querySelector(target).scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  });
}

// Agregar evento resize a la ventana del navegador para cambiar la opacidad del encabezado
window.addEventListener("resize", function () {
  var header = document.getElementById("header");
  if (window.innerWidth < 768) {
    header.style.opacity = "0.8";
  } else {
    header.style.opacity = "1";
  }
});

// Función para iniciar sesión
function iniciarSesion() {
  // Obtener los valores de correo y contraseña
  var correo = document.getElementById("correo").value;
  var contraseña = document.getElementById("contraseña").value;

  // Validar el correo y la contraseña
  // ...

  // Redirigir a la página de tienda
  window.location.href = "Productos.html";
}
