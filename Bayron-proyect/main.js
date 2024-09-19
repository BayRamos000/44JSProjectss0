
let a = 5;
let b = 4;
let c = 8;
let sumar = b + c;
console.log(sumar)
let resta = sumar / a;

console.log(resta)

let repetir = 1;
let opcion = 2;
while(repetir > 1){
    console.log("elige una apcion de comparacion")
    console.log("1. < manor que");
    console.log("2. </ menor o igual");
    console.log("3. > mayor que");
    console.log("4. >/ mayor o igual");

    switch (opcion) {
        case 1:
            console.log("es menor que")
            break;
        case 2:
            console.log("es menor o igual");
            break;
        case 3:
            console.log("es mayor que");
            break;
        case 4:
            console.log("es mayor o igual")
            break;
        default:
            console.log("no se resivio la opcion del comparador")
            break;
    }
}