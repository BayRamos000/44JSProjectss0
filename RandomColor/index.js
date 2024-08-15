const contenedor = document.getElementById("contenedor");

const letrasyNumeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
const totalDivs = 30;

function colorRandom() {
    for (let i = 0; i < totalDivs; i++) {
        let color = "#";
        for (let j = 0; j < 6; j++) {
            let randomIndex = Math.floor(Math.random() * letrasyNumeros.length);
            color += letrasyNumeros[randomIndex];
        }
        let newDiv = document.createElement("div");
        newDiv.classList.add("contenedores")
        newDiv.innerHTML= color
        newDiv.style.backgroundColor = color;
        contenedor.appendChild(newDiv);

    }
}

colorRandom();

