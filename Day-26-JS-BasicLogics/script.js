function addTwo(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
     let sum=n1+n2;
     document.getElementById("res").value=sum;
}

function avg(){
     let a=parseInt(document.getElementById("a").value)
    let b=parseInt(document.getElementById("b").value)
     let c=parseInt(document.getElementById("c").value)
     let avg=(a+b+c)/3;
     document.getElementById("result").value=avg;
}

function sum(){
     let x=parseInt(document.getElementById("x").value)
     let sumofn=(x*(x+1)/2)
     document.getElementById("output").value=sumofn;
}

function avgofn(){
     let y=parseInt(document.getElementById("y").value)
     let avgofn=(y*(y+1)/2)/y;
     document.getElementById("output1").value=avgofn;
}

function missing_angle(){
     let a=parseInt(document.getElementById("a1").value)
     let b=parseInt(document.getElementById("b1").value)
     let c=180-(a+b);
     document.getElementById("c1").value=c;
}

function per(){
     let sp=parseInt(document.getElementById("sp").value)
     let cp=parseInt(document.getElementById("cp").value)
     let profit=sp-cp;
     let profitpercentage=(profit/cp)*100
     document.getElementById("p").value=profitpercentage;
}

function simpleinterest(){
     let p=parseInt(document.getElementById("pa").value)
     let t=parseInt(document.getElementById("t").value)
     let r=parseInt(document.getElementById("r").value)
     let si=(p*t*r)/100;
     document.getElementById("si").value=si;
}