
//     var frase = "Holadavid";

//     function contarLetras(mifrase) {
//         var fraseArray = mifrase.split('');
//         var letrasContadas = {};

//         for(var i = 0; i < fraseArray.length; i++) {
//             var letra = fraseArray[i];

//             if(letrasContadas[letra]){
//                 letrasContadas[letra]++;
//             } else {
//                 letrasContadas[letra] = 1;
//             }
//         }

//         console.log(letrasContadas);
//     }

// contarLetras(frase);

    var frase = "1231231a123aasdasd";

    function contarLetras(mifrase) {
        var fraseArray = mifrase.split('');
        var letrasContadas = {};

        for(var i = 0; i < fraseArray.length; i++){
            var letra = fraseArray[i];

            if(letrasContadas[letra]){
                letrasContadas[letra]++;
            } else {
                letrasContadas[letra] = 1;
            }
        }
        console.log(letrasContadas);
    }
    contarLetras(frase);

    