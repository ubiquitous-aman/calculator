let evaluate;
let setMode;

let errorState=false;
let DEG=true;

Module.onRuntimeInitialized = () => {

evaluate = Module.cwrap(
"evaluate",
"number",
["string"]
);

setMode = Module.cwrap(
"setDegreeMode",
null,
["number"]
);

};

function press(val){

const d=document.getElementById("display");

if(errorState){
d.value="";
errorState=false;
}

d.value+=val;

}

function clearDisplay(){

document.getElementById("display").value="";

}

function calculate(){

const d=document.getElementById("display");

try{

const r=evaluate(d.value);

d.value=r;

}
catch{

d.value="Error";
errorState=true;

}

}

function toggleMode(){

DEG=!DEG;

setMode(DEG?1:0);

document.getElementById("mode").innerText=DEG?"DEG":"RAD";

}

document.addEventListener("keydown",(e)=>{

if(errorState){
document.getElementById("display").value="";
errorState=false;
}

if(e.key==="Enter"){
calculate();
}

});