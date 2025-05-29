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
