const contenedorUno = document.querySelector(".contenedor1")
const contenedorDos =  document.querySelector(".contenedor2")
const contenedortres = document.querySelector(".contenedor3")
const boton1 = document.getElementById("primero")
const boton2 = document.getElementById("segundo")
const boton3 = document.getElementById("tercero")






boton1.addEventListener("click", () =>{
    if (!contenedorUno.classList.contains("activo")){
    contenedorUno.classList.add("activo")
}
})

boton2.addEventListener ("click", ()=>{
    contenedorDos.classList.remove ("activo")
})


boton3.addEventListener ("click", ()=>{
    contenedortres.classList.remove ("activo")
})