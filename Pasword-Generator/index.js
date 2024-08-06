const DocBoton = document.getElementById("boton");
const DocContra = document.getElementById("contraseña");
const DocContenedor = document.getElementById("contenedor2");
const DocMensaje = document.getElementById("mensaje");
const DocCopiar = document.getElementById("copiar")


const caracteres = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "1","2","3","4","5","6","7","8","9","0","{","}","[","]","+","*","-","/","&","#","!"];

function Random() {
    let Caracter = [];
    for (let i = 0; i < 12; i++) {
        let random = caracteres[Math.floor(Math.random() * caracteres.length)];
        Caracter.push(random);
    }
    let contraseña = Caracter.join('');
    DocContra.value = contraseña; 
    DocMensaje.innerText = contraseña;
}

DocBoton.addEventListener("click", () => {
    Random();
});

DocCopiar.addEventListener("click", ()=> {
    DocContenedor.classList.add("hidden");

    setTimeout(() => {
        DocContenedor.classList.remove("hidden");
    }, 800);
})

