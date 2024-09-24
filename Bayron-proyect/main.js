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

    let A = parseFloat(prompt("Ingrese el coeficiente de X en la primera ecuación: "));
    let B = parseFloat(prompt("Ingrese el coeficiente de Y en la primera ecuación: "));
    let C = parseFloat(prompt("Ingrese el término independiente en la primera ecuación: "));

    let a1 = 1;  
    let b2 = -2; 
    let c2 = -1; 

    console.log(`Primera ecuación: ${A}x + ${B}y = ${C}`);
    console.log(`Segunda ecuación: ${a1}x + (${b2})y = ${c2}`);

    let paso1_y = c2 / a1;
    let paso2_sustitucion = A * paso1_y;
    let y = (C - paso2_sustitucion) / B;
    let paso4_x = b2 * y;    
    let x = (c2 - paso4_x) / a1;
        
    console.log(`Paso 1: Despejamos x de la segunda ecuación: x = ${paso1_y}`);
    console.log(`Paso 2: Sustituimos x en la primera ecuación: ${A} * (${paso1_y}) = ${paso2_sustitucion}`);
    console.log(`Paso 3: Despejamos y: (${C} - ${paso2_sustitucion}) / ${B} = y = ${y.toFixed(2)}`);
    console.log(`Paso 4: Sustituimos y en la segunda ecuación: ${b2} * ${y.toFixed(2)} = ${paso4_x}`);
    console.log(`Paso 5: Despejamos x: (${c2} - ${paso4_x}) / ${a1} = x = ${x.toFixed(2)}`);
    alert(`El resultado es: y = ${y.toFixed(2)} y x = ${x.toFixed(2)}`);
    console.log(`Resultado final: y = ${y.toFixed(2)} y x = ${x.toFixed(2)}`);
}



let pregunta = parseFloat(prompt("Escoge inecuaciones = 1 o Dosvaribles = 2"))

if (pregunta === 1){
    inecuaciones();
}
else if (pregunta === 2){
    dosvariables();
}