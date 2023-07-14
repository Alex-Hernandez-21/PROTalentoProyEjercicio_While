// pido un número por medio de un prompt
const primerNumero = parseFloat(prompt("Digite un número: "));

//tomo el número del usuario y lo entre cinco
const resultMultiplo = primerNumero/5;
//Convierto el resultado en número entero
let resultEntero = Math.floor(resultMultiplo);

console.log(resultEntero);

document.getElementById('numero').innerHTML = primerNumero; 

//creo una array vacia para guardar los multiplos de cinco
multiplos=[];
n = 1; // mi conatdor


while ( n <= resultEntero){
    console.log(n)
    let newResult = n*5;
    console.log(newResult);
    multiplos.push(newResult);
    n ++;
    
}
console.log(multiplos);  

// funcion para imprimir los datos de la array

var foo = multiplos.map(function(i){
    return  i + "";
  })
document.getElementById("foo").innerHTML = foo;
