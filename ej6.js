//no funciona aún

window.onload = function () {





    document.getElementById("nsertar").addEventListener('submit', function (event) {
        event.preventDefault();//para que el formulario no se reenvie
        const campodetexto = document.getElementById('tInsertar').value;
        if (campodetexto) {

            const nuevoElemento = document.createElement('li');
            nuevoElemento.textContent = campodetexto;


            document.getElementById('lista').appendChild(nuevoElemento);

            document.getElementById('tInsertar').value = '';



        }
    }
    );

    document.getElementById("tEliminar").addEventListener('submit', function (event) {
        event.preventDefault();//para que el formulario no se reenvie
        const campodetexto = document.getElementById('eliminar').value;
        if (Number.isInteger(campodetexto) && document.getElementById('lista').children.length > 0) {
            let tabla = document.getElementById('lista');
            tabla.removeChild(tabla.children[campodetexto - 1])





        }



    });


}