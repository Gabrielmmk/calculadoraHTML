var valor = ''

function mostra_tela(){
    document.getElementById('valores').innerHTML = valor
}

function numeros(num){
    valor += num
    mostra_tela()
}

function soma(){
    valor += '+'
    document.getElementById('valores').innerHTML += '+'
}

function subtracao(){
    valor += '-'
    document.getElementById('valores').innerHTML += '-'
}

function multi(){
    valor += '*'
    document.getElementById('valores').innerHTML += '*'
}

function divi(){
    valor += '/'
    document.getElementById('valores').innerHTML += '/'
}

function elevado(){
    valor += '**2'
    resultado1()
}

function ponto(){
    valor += '.'
    document.getElementById('valores').innerHTML += '.'
}

function limpar(){
    valor = ''
    document.getElementById('valores').innerHTML = ''
}

function apagar1(){
    valor = valor.substring(0, valor.length - 1)
    document.getElementById('valores').innerHTML = valor
}


function resultado1(){
    var resul = eval(valor)
    document.getElementById('valores').innerHTML = resul
    valor = resul
    
}
