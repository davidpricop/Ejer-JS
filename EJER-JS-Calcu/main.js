var valor = [];

function valorDato() {
    valor = [""];
    value = prompt("Introduce tu valor: ");
    valor.push(value);
}

function sumar(valor) {
    var result = 0;
    var i = 0;
    while ( i < valor.length) {
        result = result + parseInt(valor[i]);
        i++;
    }
    alert("Resultado de la suma: " + result);
}

function restar(valor) {
    var result = 0;
    var i = 0;
    while ( i < valor.length) {
        result = parseInt(valor[i]) - result;
        i++;
    }
    alert("Resultado de la resta: " + result);
}

function multiplicar(valor) {
    var result = 0;
    var i = 0;
    var y = 1;
    while ( i < valor.length) {
        result = parseInt(valor[i]) * parseInt(valor[y]);
        i++;
        y++;    
    }
    alert("Resultado de la multiplicación: " + result);
}

function dividir(valor) {
    var result = 0;
    var i = 0;
    while ( i < valor.length) {
        result = result / parseInt(valor[i]);
        i++;
    }
    alert("Resultado de la divición: " + result);
}


