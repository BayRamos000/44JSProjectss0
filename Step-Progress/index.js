const siguiente = document.getElementById("next");
const atras = document.getElementById("prev");
const barra = document.querySelector(".progress-bar-front")
 
const paso = document.querySelectorAll(".step");




function incrementarBara() {
  let actual = parseInt(barra.style.width) || 0; 
  if (actual < 100) {
    barra.style.width = (actual + 25) + "%";
  }
}

function restarBarra(){
  if (actual < 100) {
    barra.style.width = (actual - 25) + "%";
  }
}

siguiente.addEventListener("click", ()=> {


      incrementarBara();
          
}
)

atras.addEventListener("click", ()=> {
  
  


})