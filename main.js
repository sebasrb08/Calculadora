
num=[]
num2=[]
num3=[]
num4=[]
function mostrar(){

    if(simbolo.value=='+'){
        num[1]=num1.value
        resultado =parseInt(num[0])+parseInt(num[1])
    }
    else if(simbolo.value=='-'){
        num2[1]=num1.value
        resultado =parseInt(num2[0])- parseInt(num2[1])
 
    }
    else if(simbolo.value=='*'){
        num3[1]=num1.value
        resultado =parseInt(num3[0])*parseInt(num3[1])
 
    }else if(simbolo.value=='/'){
        num4[1]=num1.value
        resultado =parseInt(num4[0])/parseInt(num4[1])
 
    }
    document.getElementById('display').innerText=resultado

}
function operador(operando){
    switch(operando){
        case '+':
            num[0]=num1.value
            if(num[0]==num1.value){
                num1.value=''
            }
            simbolo.value='+'
            
    }
}
function operador2(operando2){
    switch(operando2){
        case '-':
            num2[0]=num1.value
            if(num2[0]==num1.value){
                num1.value=''
            }
            simbolo.value='-'
            

    }
}
function operador3(operando3){
    switch(operando3){
        case '*':
            num3[0]=num1.value
            if(num3[0]==num1.value){
                num1.value=''
            }
            
            simbolo.value='*'


    }

}
function operador4(operando4){
    switch(operando4){
        case '/':
            num4[0]=num1.value
            if(num4[0]==num1.value){
                num1.value=''
            }           
            simbolo.value='/'


        }
}
function borrar(){
    num1.value=''
    num2.value=''
    display.innerText=''
}