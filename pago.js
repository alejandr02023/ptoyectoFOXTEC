function mostrarCargando() {
  var boton = document.querySelector(".btn");
  var imagen = document.querySelector("#loading-img");

  boton.style.display = "none";
  imagen.style.display = "block";

  setTimeout(function () {
    document.querySelector("form").submit();
  }, 2000); // espera 2 segundos antes de enviar el formulario
}
