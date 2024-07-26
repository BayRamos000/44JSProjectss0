const firstContainerEl = document.getElementById("")
const secondContainerEl = document.getElementById("")
const flecha = document.getElementById("")

function hiddeApps (){
    secondContainerEl.classList.add("hidden")
    flecha.classList.add ("fas fa-angle-down")
    flecha.classList.remove ("fas fa-angle-up")
}

function showApps (){
    secondContainerEl.classList.remove("hidden")
    flecha.classList.remove ("fas fa-angle-down")
    flecha.classList.add ("fas fa-angle-up")
}

firstContainerEl.addEventListener("click", ()=>{
    if (secondContainerEl.contains("hidden")){
        showApps()
    } else{
        hiddeApps()
    }
})

