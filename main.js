//event
document.getElementById("calc-btn").addEventListener("click", calcAverage)

//function
function calcAverage(){
let number1 = +document.getElementById("num1").value;

document.getElementById("num1").value = null;



let average = ((number1 - 32)/(9/5));
average = average.toFixed(2);

//output
document.getElementById("ave-out").innerHTML = average;
}