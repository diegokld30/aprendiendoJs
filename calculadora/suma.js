//Tomar los elementos de HTML
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const btnSumar = document.getElementById("btnSumar");
const res = document.getElementById("res");

//Escuchar el evento
btnSumar.addEventListener("click", function(){
    const val1 = Number(num1.value);
    const val2 = Number(num2.value);

    const suma = val1 + val2;
    res.value = suma;
})