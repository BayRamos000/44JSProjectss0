const barras = document.getElementById("tresBarras")
const contenedor = document.getElementById("Contenedor")
const exis = document.getElementById("exis")


barras.addEventListener("click", ()=>{
    if (contenedor.classList.contains("hidden")){
        contenedor.classList.remove("hidden")
    }
    else{
        contenedor.classList.add("hidden")
    }
})

exis.addEventListener("click", ()=>{
        contenedor.classList.add("hidden")
})