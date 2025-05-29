console.log("Hola mundo"); 

let nombre = "Lorem Ipsum"
console.log(nombre);

nombre = 5; 
console.log(nombre); 

nombre = false; 
console.log(nombre); 

nombre = 1.500000; 
console.log(nombre);

nombre = 1.5895630;
console.log(nombre); 

// Scope global
let tiempo = 3;

if(tiempo >= 3){
    console.log(tiempo);
    //Dentro del scope 
    let hola = "que tal va todo?"; 
    console.log(hola);
}

console.log(tiempo); 
console.log(hola); 

//-----------------------------------------

let nota = 20; 

if(nota < 6) {
    console.log("Reprobamos")
} else {
    console.log("Nos vamos de parranda")
}

// Operador ternario : ( condicion ? verdadero : falso ) 
let calificacion = nota < 6 ? "reprobamos" : "nos vamos de parranda"; 
console.log("Operadore ternario", calificacion)

// condicional multiple

if (nota <= 5) {
    calificacion = "Insuficiente";
} else if( nota == 6){
    calificacion = "Suficiente";
} else if( nota <= 8){
     calificacion = "Bien"; 
} else if( nota <= 9) {
    calificacion = "Notable";
} else {
  calificacion = "Sobresaliente"; 
}

console.log("He obtenido un: ", calificacion); 

// Realizar el mismo ejercicio pero con switch

// for(donde iniciamos; condicion; incremento)
//[1,2,3,4,5]
//[0,1,2,3,4]  ->  "<= el alcanzable"; 
 
for(i = 0; i < 5; i++){
    console.log("valor de i:", i + 1); 
}
