
function compruebaDNI() {
    var dni = document.getElementById('dni').value;

    letrasDNI = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

    if(dni.length == 8){
        document.write("Tu DNI es: " + dni + letrasDNI[dni % 23]);
    } else if (isNaN(dni) == true) {
        alert("Debes introducir un número de 8 cifras");
    } else if (dni.length == 0) {
        alert("Introduce un DNI valido");
    } else if (dni.length < 0) {
        alert("Debes introducir un valor positivo");
    } else if (dni.length < 8) {
        alert("añadirle ceros a la izquierda");
    } else {
        alert("Introduce un DNI valido");
    }

    
}

