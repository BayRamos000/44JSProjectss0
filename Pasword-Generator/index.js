/*const DocBoton = document.getElementById("boton");
const DocContra = document.getElementById("contraseña");

const caracteres = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "1","2","3","4","5","6","7","8","9","0","{","}","[","]","+","*","-","/","&","#","!"]


function Random() {
    let Caracter = [];
    for (let i = 0; i < 12; i++) {
        let ramdom = caracteres[Math.floor(Math.ramdom() * caracteres.length)];
        Caracter.push(ramdom);
    }
    DocContra.innerHTML = Caracter.join('');
}

DocBoton.addEventListener("click", () => {
    Random()
})
    */

const DocBoton = document.getElementById("boton");
const DocContra = document.getElementById("contraseña");

const caracteres = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "1","2","3","4","5","6","7","8","9","0","{","}","[","]","+","*","-","/","&","#","!"];

function Random() {
    let Caracter = [];
    for (let i = 0; i < 12; i++) {
        let random = caracteres[Math.floor(Math.random() * caracteres.length)];
        Caracter.push(random);
    }
    DocContra.value = Caracter.join(''); // Convertir el arreglo a cadena
}

DocBoton.addEventListener("click", () => {
    Random();
    
});

