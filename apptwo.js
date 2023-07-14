// pido un número por medio de un prompt
const firstNumber = parseFloat(prompt("Digite el primer número entre el 1 -50: "));
const secondNumber = parseFloat(prompt("Digite el segundo número número entre el 1 -50: "));

document.getElementById('numberOne').innerHTML = firstNumber; 
document.getElementById('numberTwo').innerHTML = secondNumber; 

n = 0; // mi conatdor
x = 50;

while ( n < x){
    // console.log(n)
    let newResult = n+1;
    console.log(newResult);
    n ++;    
}