
    var datos = "80:70:90:100";
    var datos1 = "20:7:9:10";

    function calcularMediaArray(datosArray) {

        var numeros = datosArray.split(':');

        var sum = 0;
        for(var i = 0; i < numeros.length; i++) {
            sum = sum + parseInt(numeros[i]);
        }

        result = sum / numeros.length;
        
        console.log(result);
    }

   
    calcularMediaArray(datos);
    calcularMediaArray(datos1);