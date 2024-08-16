const DocTexto = document.getElementById("texto");
const DocBoton = document.getElementById("button");

const citas = "https://zenquotes.io/api/random";

async function generar() {
    try {
        DocBoton.innerText = "loading..";
        DocBoton.disabled =  true; 
        DocTexto.innerText = "Updating...";

        const respuesta = await fetch(citas);
        const dato = await respuesta.json();

        const textoConsegido = dato[0].q;
        DocTexto.innerText = textoConsegido;
        DocBoton.innerText = "Get a quote";
        DocBoton.disabled = false;
    } catch(error) {
        console.log("Error fetching quote: ", error)
        DocTexto.innerText = "hubo un error, vuelve a intentarlo más tarde";
        DocBoton.innerText = "Get a Quote";
        DocBoton.disabled = false;
    }
}

generar();
DocBoton.addEventListener("click", generar);
