let slideIndex = 1;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("quadrate");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function selectImage() {
  var imagen1 = document.getElementById("imagen-1");
  var imagen2 = document.getElementById("imagen-2");
  var imagen3 = document.getElementById("imagen-3");

  imagen1.onclick = function () {
    window.location.href = "computadores.html";
  };

  imagen2.onclick = function () {
    window.location.href = "portatiles.html";
  };

  imagen3.onclick = function () {
    window.location.href = "celulares.html";
  };
}
function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
function irAPaginaTienda(categoria) {
  switch (categoria) {
    case "computadoras":
      window.location.href = "tienda-computadoras.html";
      break;
    case "portatiles":
      window.location.href = "tienda-portatiles.html";
      break;
    case "celulares":
      window.location.href = "tienda-celulares.html";
      break;
  }
}

// Selecciona todos los botones de suma y resta
const buttons = document.querySelectorAll(".quantity button");

// Recorre todos los botones
buttons.forEach((button) => {
  // Agrega un evento click al botón
  button.addEventListener("click", function () {
    // Selecciona el campo de entrada y el valor actual
    const input = this.parentElement.querySelector("input");
    let value = parseInt(input.value);

    // Si se hace clic en el botón de suma
    if (this.classList.contains("plus")) {
      value++;
    }
    // Si se hace clic en el botón de resta
    else {
      value = value > 1 ? value - 1 : 1;
    }

    // Actualiza el valor del campo de entrada
    input.value = value;
  });
});

function irAPaginaTienda(categoria) {
  if (categoria === "computadoras") {
    window.location.href = "COMPC.html";
  } else if (categoria === "portatiles") {
    window.location.href = "COMLAP.html";
  } else if (categoria === "celulares") {
    window.location.href = "COCEL.html";
  }
}
const btnComprar = document.getElementById("btn-comprar");

btnComprar.addEventListener("click", function () {
  window.location.href = "pago.html"; // Reemplaza 'pago.html' por la ruta de tu página de pago
});

fetch("productos.json")
  .then((response) => response.json())
  .then((data) => {
    // Aquí puedes acceder a los datos de los productos y mostrarlos en la página
    console.log(data);
  })
  .catch((error) => {
    console.error("Error al obtener los datos:", error);
  });
