let sumar = document.getElementById('sumar');
let restar = document.getElementById('restar');
let numero = document.getElementById ('numero');
let inicializador = 0

sumar.addEventListener('click', function(){
    inicializador+= 1
    numero.textContent = inicializador
})

restar.addEventListener('click', function(){
    inicializador-= 1
    numero.textContent = inicializador
})

