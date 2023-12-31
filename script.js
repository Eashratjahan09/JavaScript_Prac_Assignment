// alert("hello world")

// javasript er function
function karim(){
    alert('hello from function');
}


function rahim(){
    let a =document.getElementById('txn').value;
    a=a*2;
    alert(a);
    
}


function rahimr(){
    let a =document.getElementById('txn1').value;
    a=a*2;
    document.getElementById('lbl').innerText = a;

    
}

function task(){
    let a =parseInt(document.getElementById('k1').value);
    let b =parseInt(document.getElementById('k2').value);

    // parseInt er bodole Number use kora jabe
    let c=a+b;
    document.getElementById('lbe').innerText=c;
// disable er kaj:
    // document.getElementById("btnx").disabled = true;
    
//    disable er bodole color red kore dibo:
// document.getElementById("btnx").style.backgroundColor='green'

    
}


function cal(){

    let a =parseInt(document.getElementById('kp1').value);
    let b =parseInt(document.getElementById('kp2').value);

    // parseInt er bodole Number use kora jabe
    let c=a+b;
    document.getElementById('result').innerText=c;

}
document.getElementById("kp1").addEventListener("input", cal);
document.getElementById("kp2").addEventListener("input", cal);

// option2

function calculate(){

    let a =parseInt(document.getElementById('kpt1').value);
    let b =parseInt(document.getElementById('kpt2').value);

    // parseInt er bodole Number use kora jabe
    let c=a+b;
    document.getElementById('result2').innerText=c;

}
function Do(operation){

    let a =parseInt(document.getElementById('um1').value);
    let b =parseInt(document.getElementById('um2').value);
    let c;
    switch (operation) {
        case 'sum':
            c = a + b;
            break;
        case 'sub':
           c = a - b;
            break;
        case 'mul':
            c = a * b;
            break;
        case 'div':
           c = a / b;
            break;
        default:
                alert("Invalid operation");
                return;
    }

//    sir if else diye korse
    

    document.getElementById('l').innerText=c;

}


// function cost(no_a, h_d, t, l){
//     let no_a=parseInt(document.getElementById('a1').value);
//     let h_d=document.getElementByValue('um1').value;
//     let t=parseInt(document.getElementById('um1').value);
//     let l=parseInt(document.getElementById('um1').value);
// }