
 function round(num) {
     var m=Number((Math.abs(num)*100).toPrecision(15));
     return Math.round(m) / 100 * Math.sign(num);
 }  

function calculateCTR () {
    var operand1=document.getElementById("operand1").value;
    var operand2=document.getElementById("operand2").value;
    var operand3=document.getElementById("operand3").value;
    var operand4=document.getElementById("operand4").value;

    var result=round(operand3/operand2*100); 

    if(!isNaN(result)){
        document.getElementById("ctr").textContent= result + "%";
    }
}

function calculateCPC () {
    var operand1=document.getElementById("operand1").value;
    var operand2=document.getElementById("operand2").value;
    var operand3=document.getElementById("operand3").value;
    var operand4=document.getElementById("operand4").value;

    var result=round(operand1/operand3); 

    if(!isNaN(result)){
        document.getElementById("cpc").textContent= "£" +result;
    }
}

function calculateCPL () {
    var operand1=document.getElementById("operand1").value;
    var operand2=document.getElementById("operand2").value;
    var operand3=document.getElementById("operand3").value;
    var operand4=document.getElementById("operand4").value;

    var result=round(operand1/operand4); 

    if(!isNaN(result)){
        document.getElementById("cpl").textContent= "£" +result;
    }
}

function calculateCVR () {
    var operand1=document.getElementById("operand1").value;
    var operand2=document.getElementById("operand2").value;
    var operand3=document.getElementById("operand3").value;
    var operand4=document.getElementById("operand4").value;

    var result= round(operand4/operand3*100); 

    if(!isNaN(result)){
        document.getElementById("cvr").textContent= result + "%";
    }
}




