const mouseX = document.getElementById("mouseX")
const mouseY = document.getElementById("mouseY")

document.addEventListener("mousemove",  (event) => {
    mouseX.textContent = event.clientX
    mouseY.textContent = event.clientY

})