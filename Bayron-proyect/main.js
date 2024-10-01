function inecuaciones() {
    let simbolos = [">", "<", ">=", "<="];
    let valordeA = prompt("Ingrese el valor que contenga X: ");
    let valordeB = prompt("Ingrese el segundo valor: ");
    let valordeC = prompt("Ingrese el tercer valor: ");
    let simbolo = prompt("Introduce el número de símbolo de tu operación (  1. > 2. < 3. >= 4. <=  ): ");
    let simboloAMostrar = simbolos[Number(simbolo) - 1];

    // Validar si los valores son números
    if (isNaN(valordeA) || isNaN(valordeB) || isNaN(valordeC) || isNaN(simbolo)) {
        alert("Error, el valor ingresado no es un número, recuerda solo ingresar numeros");
    } 
    
    else {
        let resultado2 = valordeC - valordeB;
        let calculo = (resultado2 / valordeA).toFixed(2);

        let problema = `${valordeA}x ${valordeB < 0 ? "-" : "+"} ${Math.abs(valordeB)} ${simboloAMostrar} ${valordeC}`;
        let problema1 = `${valordeA}x ${simboloAMostrar} ${valordeC} ${valordeB < 0 ? "+" : "-"} ${Math.abs(valordeB)}`;
        let problema2 = `x ${simboloAMostrar} ${resultado2} / ${valordeA}`;

        if (calculo < 0) {
            if (simboloAMostrar === ">") {
                simboloAMostrar = "<";
            } else if (simboloAMostrar === "<") {
                simboloAMostrar = ">";
            } else if (simboloAMostrar === ">=") {
                simboloAMostrar = "<=";
            } else if (simboloAMostrar === "<=") {
                simboloAMostrar = ">=";
            }
        }

        console.log(problema);
        console.log(problema1);
        console.log(problema2);
        console.log(`El resultado es: X ${simboloAMostrar} ${calculo}`);
    }
    reiniciar()
}

function dosvariables() {
    let a1 = parseFloat(prompt("Ingrese el valor de a1 (coeficiente de x en la primera ecuacion): "));
    let b1 = parseFloat(prompt("Ingrese el valor de b1 (coeficiente de y en la primera ecuacion): "));
    let c1 = parseFloat(prompt("Ingrese el valor de c1 (termino independiente de la primera ecuacion): "));
    
    let a2 = parseFloat(prompt("Ingrese el valor de a2 (coeficiente de x en la segunda ecuacion): "));
    let b2 = parseFloat(prompt("Ingrese el valor de b2 (coeficiente de y en la segunda ecuacion): "));
    let c2 = parseFloat(prompt("Ingrese el valor de c2 (termino independiente de la segunda ecuacion): "));
    
    // Determinantes
    let det = a1 * b2 - a2 * b1;
    //muestro las ecuaciones
    let problema = `${a1}x ${b1 < 0 ? "-" : "+"} ${Math.abs(b1)}y = ${c1}`;
    let problema1 = `${a2}x ${b2 < 0 ? "-" : "+"} ${Math.abs(b2)}y = ${c2}`;
    console.log(problema);
    console.log(problema1);
    //muestro las filas y columnas
    let filaUno = `${a1 < 0? "-": ""} ${Math.abs(a1)} ${b1 < 0? "-": "+"} ${Math.abs(b1)}`;
    let filaDos = `${a2 < 0? "-": ""} ${Math.abs(a2)} ${b2 < 0? "-": "+"} ${Math.abs(b2)}`;
    console.log(filaUno);
    console.log(filaDos);
    //muestro el calculo de la determinante
    let de = `(${a1 < 0? "-": ""} ${Math.abs(a1)} * ${b2 < 0? "-": ""} ${Math.abs(b2)}) (${a2 < 0? "-": ""} ${Math.abs(a2)} * ${b1 < 0? "-": ""} ${Math.abs(b1)})`;
    console.log(de);
    //muestro el calculo de la determinante de x
    let fiUno =  `${c1 < 0? "-": ""} ${Math.abs(c1)} ${b1 < 0? "-": "+"} ${Math.abs(b1)}`;
    console.log(fiUno);
    let fiDos = `${c2 < 0? "-": ""} ${Math.abs(c2)} ${b2 < 0? "-": "+"} ${Math.abs(b2)}`;
    console.log(fiDos);
    let dex = `(${c1 < 0? "-": ""} ${Math.abs(c1)} * ${b2 < 0? "-": ""} ${Math.abs(b2)}) (${c2 < 0? "-": ""} ${Math.abs(c2)} * ${b1 < 0? "-": ""} ${Math.abs(b1)})`;
    console.log(dex);
    //muestro el calculo de la deterninante de y
    let Funo = `${a1 < 0? "-": ""} ${Math.abs(a1)} ${c1 < 0? "-": "+"} ${Math.abs(c1)}`;
    console.log(Funo);
    let Fdos = `${a2 < 0? "-": ""} ${Math.abs(a2)} ${c2 < 0? "-": "+"} ${Math.abs(c2)}`;
    console.log(Fdos);
    let dey = `(${a1 < 0? "-": ""} ${Math.abs(a1)} * ${c2 < 0? "-": ""} ${Math.abs(c2)})  (${a2 < 0? "-": ""} ${Math.abs(a2)} * ${c1 < 0? "-": ""} ${Math.abs(c1)})`;
    console.log(dey); 

    
    if (det === 0) {
        alert("El sistema no tiene solución única (las ecuaciones son paralelas o coincidentes).");
    } else {
        let detX = c1 * b2 - c2 * b1;
        let detY = a1 * c2 - a2 * c1;
        
        let x = detX / det;
        let y = detY / det;
        
        console.log(`El resultado es: x = ${x.toFixed(2)}, y = ${y.toFixed(2)}`)
        alert(`El resultado es: x = ${x.toFixed(2)}, y = ${y.toFixed(2)}`);
    }
    reiniciar()
    
}

function cuadraticas() {
    let a = parseFloat(prompt("Ingrese el valor de a (coeficiente de x^2): "));
    let b = parseFloat(prompt("Ingrese el valor de b (coeficiente de x): "));
    let c = parseFloat(prompt("Ingrese el valor de c (término independiente): "));
    let problema = `${a}x^2 ${b < 0 ? "-" : "+"} ${Math.abs(b)} ${c < 0 ? "-" : "+"} ${Math.abs(c)} = 0 `;
    console.log(problema)

    const m = -b / (2 * a); // Media de las raíces
    console.log(`el punto medio entre x1 y x2 es: ${m}`)
    const discriminante = m * m - (c / a); // Desviación (incluye complejidad)
    console.log(`discriminante es numero negativo es: ${discriminante}`)
    
    let d;
    if (discriminante >= 0) {
        d = Math.sqrt(discriminante); // Soluciones reales
        console.log(`raiz real es: ${d}`)
        const x2 = m + d;
        console.log(`${m} + ${d}`)
        const x1 = m - d;
        console.log(`${m} - ${d}`)
        console.log(`x2 = ${x2}`);
        console.log(`x1 = ${x1}`);
    } else {
        d = Math.sqrt(-discriminante) + 'i'; // Soluciones complejas
        console.log(`raiz compleja: ${d}`)
        const x2 = `${m} + ${d}`;
        console.log(`${m} + ${d}`)
        const x1 = `${m} - ${d}`;
        console.log(`${m} - ${d}`)
        console.log(`x2 = ${x2}`);
        console.log(`x1 = ${x1}`);
    }
}
cuadraticas();

function comienzo (){
let pregunta = parseFloat(prompt("Escoge inecuaciones = 1 o Dosvaribles = 2"))
if (pregunta === 1){
    inecuaciones();
}
else if (pregunta === 2){
    dosvariables();
}

}


function reiniciar (){
    let pregunta = prompt("¿Quieres resolver otro problema  -- Sí -- No --?").toUpperCase()
    if (pregunta === "SÍ" || pregunta === "SI"){
        comienzo()
    }
    else{
        alert("Hasta luego, gracias por usar mi aplicación")
    }
}

comienzo()


