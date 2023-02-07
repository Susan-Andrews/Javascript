var n1=prompt("enter first number","0")
var n2=prompt("enter second number","0")
var num1=parseInt(n1);
var num2=parseInt(n2);
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2


let sumel=document.getElementById("sum-el")
function add(){
    let result=num1+num2
    sumel.textContent= "Sum: " +result
}

function subtract(){
    let result=num1-num2
    sumel.textContent= "Difference: " +result
}

function divide(){
    let result=num1/num2
    sumel.textContent= "quotient: " +result
}

function multiply(){
    let result=num1*num2
    sumel.textContent= "value: " +result
}