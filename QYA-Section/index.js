const primerEl = document.getElementById("primero");
const segundoEl = document.getElementById("segundo");
const terceroEl = document.getElementById("tercero");

const pTexto1 = document.querySelector(".primero p");
const pTexto2 = document.querySelector(".segundo p");
const pTexto3 = document.querySelector(".tercero p");

function toggleInformation(iconEl, pTextoEl) {
    if (pTextoEl.classList.contains("hidden")) {
        pTextoEl.classList.remove("hidden");
        iconEl.classList.remove("fa-plus-square");
        iconEl.classList.add("fa-minus-square");
    } else {
        pTextoEl.classList.add("hidden");
        iconEl.classList.add("fa-plus-square");
        iconEl.classList.remove("fa-minus-square");
    }
}

primerEl.addEventListener("click", () => {
    toggleInformation(primerEl, pTexto1);
});

segundoEl.addEventListener("click", () => {
    toggleInformation(segundoEl, pTexto2);
});

terceroEl.addEventListener("click", () => {
    toggleInformation(terceroEl, pTexto3);
});
