const textBox=document.getElementById("textBox");
const toFehrenheit=document.getElementById("toFehrenheit");
const toCelsious =document.getElementById("toCelsious");
const result=document.getElementById("result");
let temp;
  

function Convert(){
    if(toFehrenheit.checked){
        temp=Number(textBox.value)
        temp=temp* 9/5 + 32;
        result.textContent=temp.toFixed(1) + "F";


    }
    else if(toCelsious.checked){
        temp=Number(textBox.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(1) + "F";

    }
    else{
       result.textContent="Select Unit"; 
    }
}





