const DocContenedor = document.querySelector(".container");
const DocBoton = document.getElementById("boton");

function crearNota() {
    let nota = document.createElement(`textarea`);
    nota.setAttribute(`id`, `nota`);
    nota.setAttribute(`placeholder`, `Empty note`)
    DocContenedor.appendChild(nota);

    nota.addEventListener("dblclick", ()=>{
        const aleta = confirm("¿Quieres eliminar esta nota?");
        if (aleta) {
            DocContenedor.removeChild(nota)
        }
        
    })
}

DocBoton.addEventListener("click", ()=>{
    crearNota()
})