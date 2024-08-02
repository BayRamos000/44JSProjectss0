const textoEL = document.getElementById("texto");
const tcaracterEL = document.getElementById("tcaracter");
const restantEL = document.getElementById("restante");

const cTotal = 50;

function actualizarContadores() {
    const textoLength = textoEL.value.length;
    tcaracterEL.textContent = textoLength;
    restantEL.textContent = cTotal - textoLength;
}

textoEL.addEventListener("input", actualizarContadores);

actualizarContadores();
