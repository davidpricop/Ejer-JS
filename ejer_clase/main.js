var frase = "me llamo david";

function contarVocales(mifrase) {
    var vocales = ["a","e","i","o","u"];
    var numVocales = 0;
    for (var i = 0; i < mifrase.length; i++) {
        if(mifrase[i] == vocales.lastIndexOf(i) != 1) {
            numVocales++;
        } 
    }
    return numVocales;
}

alert(contarVocales(frase));