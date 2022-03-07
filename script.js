var equation=''

function inputNumber(s){
    if(equation.length==0 &&!Number.isInteger(Number(s))){
        alert('Invalid Input');
        return;
    }
    if(!Number.isInteger(Number(equation[equation.length-1])) && !Number.isInteger(Number(s))){
        equation=equation.substring(0,equation.length-1);
    }
    equation+=s;
    updateTextBox();
}

function evaluate(){
    equation=eval(equation);
    updateTextBox();

}

function updateTextBox(){
    document.getElementById('textBox').value=equation;
}
//---------------------------------------------------
var buttons =document.getElementsByClassName('b2')

for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];
    element.addEventListener('click',()=>inputNumber(element.innerHTML));
    
}

document.getElementsByClassName('b1')[0].addEventListener('click',evaluate)
document.getElementsByClassName('b3')[0].addEventListener('click',()=>{equation='';
updateTextBox();
})
