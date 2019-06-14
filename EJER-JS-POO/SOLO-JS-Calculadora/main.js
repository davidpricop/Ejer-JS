
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

var cal = new Calculadora();

cal.suma(1,2);
cal.restar(2,5);
cal.multiplicar(2,5);
cal.dividir(2,5);
cal.potencia(2,5);

cal.getResultado;
cal.limpiar();
cal.getResultado;
