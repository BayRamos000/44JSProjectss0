const uno = document.getElementById("uno")
const dos = document.getElementById("dos")
const tres = document.getElementById("tres")
const cuatro = document.getElementById("cuatro")
const cinco = document.getElementById("cinco")
const emoji = document.getElementById("emoji")

uno.addEventListener("click",()=>{
    if(!uno.classList.contains("active")){
        uno.classList.add("active")
        emoji.innerHTML =  `<i class="far fa-angry fa-3x" style="color: red;"></i>`
    }
})
dos.addEventListener("click",()=>{
    if(!dos.classList.contains("active") &&  uno.classList.contains("active")){
        dos.classList.add("active")
        emoji.innerHTML =  `<i class="far fa-frown fa-3x" style="color: orange;"></i>`
    }
    else{
        dos.classList.remove("active")
        emoji.innerHTML = `<i class="far fa-angry fa-3x" style="color: red;"></i>`
    }
})
tres.addEventListener("click",()=>{
    if(!tres.classList.contains("active") &&  dos.classList.contains("active")){
        tres.classList.add("active")
        emoji.innerHTML =  `<i class="far fa-meh fa-3x" style="color: lightblue;"></i>`
    }
    else{
        tres.classList.remove("active")
        emoji.innerHTML = `<i class="far fa-frown fa-3x" style="color: orange;"></i>`
    }
})

cuatro.addEventListener("click",()=>{
    if(!cuatro.classList.contains("active") &&  tres.classList.contains("active")){
        cuatro.classList.add("active")
        emoji.innerHTML =  `<i class="far fa-smile fa-3x" style="color: lightgreen;"></i>`
    }
    else{
        cuatro.classList.remove("active")
        emoji.innerHTML =  `<i class="far fa-meh fa-3x" style="color: lightblue;"></i>`
    }
})

cinco.addEventListener("click",()=>{    
    if(!cinco.classList.contains("active") &&  cuatro.classList.contains("active")){
    cinco.classList.add("active")
    emoji.innerHTML =  `<i class="far fa-laugh fa-3x" style="color: green;"></i>`
}
else{
    cinco.classList.remove("active")
    emoji.innerHTML =  `<i class="far fa-smile fa-3x" style="color: lightgreen;"></i>`
}
})

