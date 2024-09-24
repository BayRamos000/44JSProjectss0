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

inecuaciones();
