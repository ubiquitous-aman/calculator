let a = null
let operator = null

function press(num){
document.getElementById("display").value += num
}

function operation(op){

a = parseFloat(document.getElementById("display").value)
operator = op
document.getElementById("display").value = ""

}

function calculate(){

let b = parseFloat(document.getElementById("display").value)

let result

if(operator == "+")
result = Module._add(a,b)

if(operator == "-")
result = Module._subtract(a,b)

if(operator == "*")
result = Module._multiply(a,b)

if(operator == "/")
result = Module._divide(a,b)

document.getElementById("display").value = result

}

function sqrt(){
let x = parseFloat(document.getElementById("display").value)
document.getElementById("display").value = Module._mysqrt(x)
}

function sin(){
let x = parseFloat(document.getElementById("display").value)
document.getElementById("display").value = Module._mysin(x)
}

function cos(){
let x = parseFloat(document.getElementById("display").value)
document.getElementById("display").value = Module._mycos(x)
}

function tan(){
let x = parseFloat(document.getElementById("display").value)
document.getElementById("display").value = Module._mytan(x)
}

function log(){
let x = parseFloat(document.getElementById("display").value)
document.getElementById("display").value = Module._mylog(x)
}

function clearDisplay(){
document.getElementById("display").value=""
}