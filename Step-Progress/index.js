const siguiente = document.getElementById("next");
const atras = document.getElementById("prev");

const paso = document.querySelectorAll(".step");

siguiente.addEventListener("click", ()=> {
    paso.classList.add("checked")
    paso.innerHTML = `
    <i class="fas fa-check"></i>
      <small>${
        idx === 0
          ? "Start"
          : idx === stepsEl.length - 1
          ? "Final"
          : "Step " + idx
      }</small> `
          
}
)