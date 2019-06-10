function comprobarSTRING() {

    var arrayStrings = [];
    var texto;

    do {
        texto = prompt("Introduce una frase: ");
        if(texto.length != 0 || seguir.toLowerCase() == "si"){
            arrayStrings.push(texto);
            var seguir = prompt("¿Quieres introducir más frases? --- Responde Si o dejalo vacio ---");
        } else {
            alert("Introduce algo maaann");
        }
    } while (seguir.toLowerCase() == "si");

    document.write("Array=> " + arrayStrings);

    // MÁS LARGO
    // var lengs = [];
    // for (let i = 0; i < arrayStrings.length; i++) {
    //     lengs.push(arrayStrings[i].length);
    // }

    // var y = 1;
    // var mayor;
    // for (let i = 0; i < lengs.length; i++) {
    //     if (lengs[i] < lengs[y]) {
    //         mayor = arrayStrings[y];
    //     } else if (lengs[i] > lengs[y]) {
    //         mayor = arrayStrings[i];
    //     } 
    //     y++;
    // }

    // MÁS CORTO
    var mayorLongitud = 0;
    var stringDeMayorLongitud = "";

    for (let i = 0; i < arrayStrings.length; i++) {
        if(arrayStrings[i].length > mayorLongitud){
            mayorLongitud = arrayStrings[i].length;
            stringDeMayorLongitud = arrayStrings[i];

        }
    }

    alert(stringDeMayorLongitud);

    var mensaje = "Esta frase " + arrayStrings[i] + " es más larga que " + arrayStrings[y];


    document.write("MENSAJE: " + mensaje);

}

comprobarSTRING();