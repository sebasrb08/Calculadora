resut=''

function mostrar(){
    
    document.getElementById('display').innerText=resultado

}
function operador(operando){
    switch(operando){
        case '+':
            resultado=parseInt(num1.value)+parseInt(num2.value)
            
            simbolo.innerText='+'
    }
}
function operador2(operando2){
    switch(operando2){
        case '-':
            resultado=parseInt(num1.value)-parseInt(num2.value)
            simbolo.innerText='-'

    }
}
function operador3(operando3){
    switch(operando3){
        case '*':
            resultado=parseInt(num1.value)*parseInt(num2.value)
            simbolo.innerText='*'

    }

}
function operador4(operando4){
    switch(operando4){
        case '/':
            resultado=parseInt(num1.value)/parseInt(num2.value)
            simbolo.innerText='/'

        }
}
function borrar(){
    num1.value=''
    num2.value=''
    simbolo.innerText=''
    display.innerText=''
}