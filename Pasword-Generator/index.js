const DocBoton = document.getElementById("boton");
const DocContra = document.getElementById("contraseña");

const caracteres = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "1","2","3","4","5","6","7","8","9","0","{","}","[","]","+","*","-","/","&","#","!"]
console.log(caracteres.length)

function Random() {
    let Caracter = [];
    let uno = Math.floor(Math.random(27));
    Caracter.push(uno)
    return Caracter
    
}

Random()