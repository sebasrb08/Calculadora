
num=[]


for(let i=0;i<=9;i++){
    document.getElementById('btn_'+ i).addEventListener('click',(boton)=>mostrar2(boton.target));

}
function mostrar2(tecla){
num1=document.getElementById('display').innerText=
  num1= document.getElementById('display').innerText+tecla.value

}
addEventListener('keypress',teclas=>{
    if(!isNaN(teclas.key)){
        mostrar3(teclas.key)
    }
    if(teclas.key=='+'){
        operador(teclas.key)
    }if(teclas.key=='-'){
        operador2(teclas.key)
    }if(teclas.key=='*'){
        operador3(teclas.key)
    }if(teclas.key=='/'){
        operador4(teclas.key)
    }if(teclas.key=='Enter'){
        mostrar(teclas.key)
    }
    
})
function mostrar3(teclas){
    num1=document.getElementById('display').innerText=
    num1=document.getElementById('display').innerText+teclas
}

function mostrar(){

    if(simbolo.value=='+'){
        resultado =parseInt(num[0])+parseInt(num1)
    }
    else if(simbolo.value=='-'){
        resultado =parseInt(num[1])- parseInt(num1)
    }
    else if(simbolo.value=='*'){
    
        resultado =parseInt(num[2])*parseInt(num1)
 
    }else if(simbolo.value=='/'){
        resultado =parseInt(num[3])/parseInt(num1)
 
    }
    console.log(resultado)
    document.getElementById('display').innerText=resultado

}
function operador(operando){
    switch(operando){
        case '+':
            num[0]=num1
            display.innerText=''
            simbolo.value='+'
            
    }
}
function operador2(operando2){
    switch(operando2){
        case '-':
            num[1]=num1
            display.innerText=''
            simbolo.value='-'
            

    }
}
function operador3(operando3){
    switch(operando3){
        case '*':
            num[2]=num1
            display.innerText=''
            simbolo.value='*'
    }

}
function operador4(operando4){
    switch(operando4){
        case '/':
            num[3]=num1
            display.innerText=''
            simbolo.value='/'
        }
}
function borrar(){
   
    display.innerText=''
}