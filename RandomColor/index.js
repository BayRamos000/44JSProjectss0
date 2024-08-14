const contenedor = document.getElementById("contenedor");

const letrasyNumeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9","b", "c", "d", "e", "f"];
const colores = 30;


function colorRandom() {
    if (colores <= 0){
        
    }
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let numeroRandom = Math.floor(Math.random() * letrasyNumeros.length);
        color += letrasyNumeros[numeroRandom];
    }
    contenedor.setAttribute("style", `background-color:${color};`);
    contenedor.innerHTML = color
}

colorRandom();
