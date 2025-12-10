const nombre = "Maria";
let apellido = "Calderon";
apellido = "Vargas";
//Declarando un obj

const objPersona = {
    //propiedades que lo hacen unico
    nombre,
    apellido: apellido,
    sexo: "Poco",
    edad: 35,
    direccion: {
        calle: "Calle Siempre viva",
        numero: 25
    }
};

objPersona.salud = "Sanitas";

console.log("ObjPersona sin modificar")
console.log(objPersona);

console.log("Edad: ", objPersona.edad);

objPersona.edad = 40;

delete objPersona.sexo;

console.log("ObjPersona modificado")
console.log(objPersona);