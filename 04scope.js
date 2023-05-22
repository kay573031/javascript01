var nombre ="jairo"
function saludo(){
    console.log(`dentro de la funcion${nombre}`);
    var apellido="gomez"
    return 0;
}
console.log(saludo());
console.log(`fuera de la funcion${nombre}`);



var nombre1="miguel"




//local scope
function saludo(){
    console.log(`dentro de la funcion${apellido1}`);
    var apellido1 ="gomez"
    return 0;
}
console.log(saludo());
console.log(`fuera de la funcion${nombre1}`);