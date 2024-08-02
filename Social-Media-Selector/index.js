const secondContainerEl = document.getElementById("contenedor2");
const barraP = document.getElementById("barraP");
const flecha = document.getElementById("flecha");
const allinformation = document.querySelectorAll(".social-icons li");

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

function informationLi() {
    allinformation.forEach(item => {
        item.addEventListener("click", () => {
            const liContent = item.innerHTML; 
            barraP.innerHTML = liContent, hideApps(),flecha.classList.add("fa-angle-down");
        });
    });
}

barraP.addEventListener("click", () => {
    if (secondContainerEl.classList.contains("hidden")) {
        showApps();
    } else {
        hideApps();
    }
});

informationLi();
