const firstContainerEl = document.getElementById("contenedor")
const secondContainerEl = document.getElementById("contenedor2")
const flecha = document.getElementById("flecha")

function hiddeApps (){
    secondContainerEl.classList.add("hidden")+
    flecha.classList.remove ("fas fa-angle-up")
    flecha.classList.add ("fas fa-angle-down")
    
}

function showApps (){
    secondContainerEl.classList.remove("hidden")
    flecha.classList.remove ("fas fa-angle-down")
    flecha.classList.add ("fas fa-angle-up")
}

flecha.addEventListener("click", ()=>{
    if (secondContainerEl.contains("hidden")){
        showApps()
    } else{
        hiddeApps()
    }
})

