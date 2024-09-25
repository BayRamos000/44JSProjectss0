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
    
    if (det === 0) {
        alert("El sistema no tiene solución única (las ecuaciones son paralelas o coincidentes).");
    } else {
        let detX = c1 * b2 - c2 * b1;
        let detY = a1 * c2 - a2 * c1;
        
        let x = detX / det;
        let y = detY / det;
        
        alert(`El resultado es: x = ${x.toFixed(2)}, y = ${y.toFixed(2)}`);
    }
}


dosvariables()
