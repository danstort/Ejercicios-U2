window.onload = function () {
    // Abrir una nueva ventana no redimensionable
    let nuevaVentana = window.open("", "", "width=400,height=300,resizable=no");

    // Usar un pequeño retraso para asegurarse de que la nueva ventana esté cargada
    setTimeout(function() {
        // Escribir el contenido HTML una vez que la ventana esté lista
        if (nuevaVentana && nuevaVentana.document) {
            nuevaVentana.document.write('<h3>Hola, esta es una nueva ventana</h3>');
        } else {
            console.log("No se pudo acceder a la nueva ventana.");
        }
    }, 500);  // Ajusta el tiempo si es necesario
}