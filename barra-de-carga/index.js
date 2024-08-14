const Docporcentaje = document.getElementById("porcentaje");
const Docbarra = document.getElementById("barraGris");

function barraDeCarga(porcentaje) {
    let carga = Docbarra;
    let Porcentaje = Docporcentaje;

    porcentaje = Math.max(0, Math.min(porcentaje,100));
    carga.style.width = porcentaje + `%`;
    Porcentaje.textContent = porcentaje + `%`;

}

barraDeCarga();

let progreso = 0;
let intervalo = setInterval(() => {
    if (progreso >= 100) {
    clearInterval(intervalo)
} else{
    progreso++;
    barraDeCarga(progreso);
    }
}, 400);

