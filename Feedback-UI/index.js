const badEl = document.getElementById("bad");
const neutralEl = document.getElementById("neutral");
const happyEl = document.getElementById("happy");
const boton = document.getElementById("boton");
const contenedor = document.querySelector(".contenedor");

let selectedOption = null;

function marcado(seleccionado) {
    if (selectedOption) {
        selectedOption.classList.remove("seleccionado");
    }

    selectedOption = seleccionado;
    selectedOption.classList.add("seleccionado");
}

badEl.addEventListener("click", () => marcado(badEl));
neutralEl.addEventListener("click", () => marcado(neutralEl));
happyEl.addEventListener("click", () => marcado(happyEl));

boton.addEventListener("click", () => {
    if (selectedOption) {
        const feedbackText = selectedOption.textContent;
        contenedor.innerHTML = `
            <strong>¡Gracias!</strong>
            <br><br>
            <strong>Feedback: ${feedbackText}</strong>
            <p>Mejoraremos con tu ayuda y tus reseñas.</p>
        `;
    } else {
        alert("Selecciona una opción");
    }
});
