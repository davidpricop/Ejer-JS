console.log("Cargado script 1");

function loadScript(src, callback) { 
    let script = document.createElement('script');
    script.src = src;
    script.onload = function() {
        callback();
    };
    document.head.append(script);
}

loadScript('script2.js', function() {
    console.log('Callback del script 2');
    saludar();
});

//este daría error

//saludar();