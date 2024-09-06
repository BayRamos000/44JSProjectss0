const siguiente = document.getElementById("next");
const atras = document.getElementById("prev");
const barra = document.querySelector(".progress-bar-front");
const paso = document.querySelectorAll(".step");

let actual = 0;

function actualizarBarra(){
  actual = parseInt(barra.style.width) || 0; 
  activarboton();
}

function activarboton() {
  if (actual <= 0) {
    atras.setAttribute("disabled", "disabled");
    siguiente.removeAttribute("disabled");
  } else if (actual >= 100) {
    siguiente.setAttribute("disabled", "disabled");
    atras.removeAttribute("disabled");
  } else {
    atras.removeAttribute("disabled");
    siguiente.removeAttribute("disabled");
  }
}


function incrementarBara() {
  actualizarBarra() 
  if (actual < 100) {
    barra.style.width = (actual + 25) + "%";
  }
  activarboton()
}

function restarBarra(){
  actualizarBarra() 
  if (actual > 0) {
    barra.style.width = (actual - 25) + "%";
  }
  activarboton()
}

barra.style.width = "0%";
actualizarBarra();

siguiente.addEventListener("click", ()=> {
  

      incrementarBara();
          
}
)

atras.addEventListener("click", ()=> {
  
  restarBarra();


})