//  ECUACIONES LINEALES

function inecuaciones () {
let simbolos = [">", "<", ">=", "<="];

let valordeA = prompt("Ingrese el valor que contenga X: ")
let valordeB = prompt("Ingrese el segundo valor: ");
let valordeC = prompt("Ingrese el tercer valor: ");

let simbolo = prompt("Introduce el número de símbolo de tu operación (  1. > 2. < 3. >= 4. <=  ): ");
let simboloAMostrar = simbolos[Number(simbolo) - 1];
if (isNaN(valordeA) || isNaN(valordeB) || isNaN(valordeC) || isNaN(simbolo)){
    alert("Error, el valor ingresado no es un número, recuerda solo ingresar numeros");
}
else{
    let calculo = (valordeC - valordeB) / valordeA;
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
alert(`El resultado es: X ${simboloAMostrar} ${calculo}`);             
}

}