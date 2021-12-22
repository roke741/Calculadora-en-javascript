
function borrar(){
    var caja = document.getElementById("operaciones");
    //caja.style.display = "none";
    caja.innerHTML = "";
}

//mostrar los numeros clickeados
function mostrar(numero){  
    var caja = document.getElementById("operaciones");
    caja.style.display = "block";
    caja.innerHTML += numero;
}
function decimal(){
    var caja = document.getElementById("operaciones");
    caja.style.display = "block";
    caja.innerHTML += ".";
}

function sumar(){
    var caja = document.getElementById("operaciones");
    caja.style.display = "block";
    caja.innerHTML += "+";
}
function restar(){
    var caja = document.getElementById("operaciones");
    caja.style.display = "block";
    caja.innerHTML += "-";
}
function multiplicar(){
    var caja = document.getElementById("operaciones");
    caja.style.display = "block";
    caja.innerHTML += "x";
}
function dividir(){
    var caja = document.getElementById("operaciones");
    caja.style.display = "block";
    caja.innerHTML += "/";
}

function calcular(){
    var caja = document.getElementById("operaciones");
    var resultados = eval(caja.innerHTML);
    console.log(resultados);

    if(resultados = "undefined"){
        alert("Error ingrese una operacion valida");
    }else{
    //var pequeño = caja.innerHTML;
    //document.getElementById("resultados").innerHTML = pequeño;
    caja.innerHTML = "= " + resultados;
    }
}
