const siguiente = document.getElementById("next");
const atras = document.getElementById("prev");
const barra = document.querySelector(".progress-bar-front");
const pasos = document.querySelectorAll(".step");

let actual = 0;

function actualizarBarra() {
  const progreso = (actual / (pasos.length - 1)) * 100;
  barra.style.width = progreso + "%";
  activarboton();
}

function activarboton() {
  if (actual === 0) {
    atras.setAttribute("disabled", "disabled");
  } else {
    atras.removeAttribute("disabled");
  }

  if (actual === pasos.length - 1) {
    siguiente.setAttribute("disabled", "disabled");
  } else {
    siguiente.removeAttribute("disabled");
  }
}

function actualizarPasos() {
  pasos.forEach((paso, index) => {
    const icono = paso.querySelector("i");

    if (index <= actual) {
      paso.classList.add("checked");
      icono.classList.remove("fa-times");
      icono.classList.add("fa-check");
    } else {
      paso.classList.remove("checked");
      icono.classList.remove("fa-check");
      icono.classList.add("fa-times");
    }
  });
}

function incrementarBara() {
  if (actual < pasos.length - 1) {
    actual++;
    actualizarPasos();
    actualizarBarra();
  }
}

function restarBarra() {
  if (actual > 0) {
    actual--;
    actualizarPasos();
    actualizarBarra();
  }
}

barra.style.width = "0%";
actualizarPasos();
activarboton();

siguiente.addEventListener("click", incrementarBara);
atras.addEventListener("click", restarBarra);
