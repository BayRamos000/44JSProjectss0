const firstContainerEl = document.getElementById("contenedor");
const secondContainerEl = document.getElementById("contenedor2");
const barraP = document.getElementById("barraP");
const flecha = document.getElementById("flecha")

function hideApps() {
    secondContainerEl.classList.add("hidden");
    flecha.classList.remove("fa-angle-up");
    flecha.classList.add("fa-angle-down");
}

function showApps() {
    secondContainerEl.classList.remove("hidden");
    flecha.classList.remove("fa-angle-down");
    flecha.classList.add("fa-angle-up");
}

barraP.addEventListener("click", () => {
    if (secondContainerEl.classList.contains("hidden")) {
        showApps();
    } else {
        hideApps();
    }
});
