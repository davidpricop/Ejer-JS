
class Calculadora {
    constructor() {
        this._resultado = [];
    }

    get getResultado() {
        return console.log(this._resultado);
    }

    suma (val1,  val2) {
        var result = val1 + val2;
        this._resultado.push(result);
        return result;
    }

    restar (val1,  val2) {
        var result = val1 - val2;
        this._resultado.push(result);
        return result;
    }

    multiplicar (val1,  val2) {
        var result = val1 * val2;
        this._resultado.push(result);
        return result;
    }

    dividir (val1,  val2) {
        var result = val1 / val2;
        this._resultado.push(result);
        return result;
    }

    potencia (val1,  val2) {
        var result = val1 ** val2;
        this._resultado.push(result);
        return result;
    }

    limpiar () {
        this._resultado = [];
    }

}

class Cutronga extends Calculadora {
    constructor() {
        super();
    }

    get getResultado() {
        return alert(this._resultado);
    }

    suma() {
        var valor1 = parseInt(prompt("Introduce un valor"));
        var valor2 = parseInt(prompt("Introduce un valor"));
        let result = super.suma(valor1,valor2);
        return result;
    }

    resta() {
        var valor1 = parseInt(prompt("Introduce un valor"));
        var valor2 = parseInt(prompt("Introduce un valor"));
        let result = super.resta(valor1,valor2);
        return result;
    }

    multiplicar() {
        var valor1 = parseInt(prompt("Introduce un valor"));
        var valor2 = parseInt(prompt("Introduce un valor"));
        let result = super.multiplicar(valor1,valor2);
        return result;
    }

    dividir() {
        var valor1 = parseInt(prompt("Introduce un valor"));
        var valor2 = parseInt(prompt("Introduce un valor"));
        let result = super.dividir(valor1,valor2);
        return result;
    }

    potencia() {
        var valor1 = parseInt(prompt("Introduce un valor"));
        var valor2 = parseInt(prompt("Introduce un valor"));
        let result = super.potencia(valor1,valor2);
        return result;
    }
}

class Visual extends Calculadora {
    constructor() {
        super();
    }

    pintarCal() {
        var form = document.createElement("form");
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        var div4 = document.createElement("div");

        var input1 = document.createElement("input");
        input1.type = "text";
        input1.placeholder = "Introduce tus numeros...";
        input1.name = "valores";
        var input2 = document.createElement("input");
        input2.type = "button";
        input2.value = "Sumar";
        input2.name = "sumar";
        input2.addEventListener("click", cal.sumar());
        var input3 = document.createElement("input");
        input3.type = "button";
        input3.value = "Restar";
        input3.name = "restar";
        var input4 = document.createElement("input");
        input4.type = "text";
        input4.placeholder = "Tu resultado aparecerá aqui";
        input4.name = "resultado";

        document.body.appendChild(form);
        form.appendChild(div1);
        form.appendChild(div2);
        form.appendChild(div3);
        form.appendChild(div4);
        div1.appendChild(input1);
        div2.appendChild(input2);
        div3.appendChild(input3);
        div4.appendChild(input4);
    }

    sumar () {
        alert("lo tienes");
        // var valor1 = parseInt(prompt("Introduce un valor"));
        // var valor2 = parseInt(prompt("Introduce un valor"));

        
        // let result = super.sumar(valor1,valor2);
        // return result;
    }
}


var cal = new Visual();

cal.pintarCal();

// cal.suma(1,2);
// cal.restar(2,5);
// cal.multiplicar(2,5);
// cal.dividir(2,5);
// cal.potencia(2,5);

// cal.getResultado;
// cal.limpiar();
// cal.getResultado;
