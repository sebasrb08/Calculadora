
num2=0
function mostrar(){
    document.getElementById('display').innerText=resultado
   num2=parseInt(num1.value)
}
function operador(operando){
    num=num1.value
    switch(operando){
        case '+':
            if(num==num1.value){
                num1.value=''
            }
      
            resultado =parseInt(num)+parseInt(num2)
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