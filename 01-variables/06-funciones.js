//objetos
//{}

//Array
//[]

//Functions
//()

let num1 = 4;
let num2 = 5;
let res;

//Declarar una funcion -> encapsular y reutilizar codigo
function sumar(val1, val2) {
  res = val1 + val2;
  return res;
}
console.log("Llamando la funcion sum: ")
console.log(sumar(num1, num2))