const contenedorUno = document.getElementById("contenedor1")
const contenedorDos =  document.getElementById("contenedor2")
const contenedortres = document.getElementById("contenedor3")
const boton1 = document.getElementById("primero")
const boton2 = document.getElementById("segundo")
const boton3 = document.getElementById("tercero")



boton1.addEventListener("click", () =>{
    contenedorUno.classList.remove ("activo")
    contenedortres.classList.add ("activo")
    contenedorDos.classList.add("activo")
    boton1.classList.add ("color")
    boton2.classList.remove ("color")
    boton3.classList.remove ("color")

})

boton2.addEventListener ("click", ()=>{
    contenedorUno.classList.add ("activo")
    contenedortres.classList.add ("activo")
    contenedorDos.classList.remove("activo")
    boton1.classList.remove ("color")
    boton2.classList.add ("color")
    boton3.classList.remove ("color")
})


boton3.addEventListener ("click", ()=>{
    contenedorUno.classList.add ("activo")
    contenedorDos.classList.add ("activo")
    contenedortres.classList.remove("activo")
    boton1.classList.remove ("color")
    boton2.classList.remove ("color")
    boton3.classList.add("color")    
})