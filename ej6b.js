window.onload = function () {

    function insertar() {


        cuadrotext = document.getElementById('tInsertar').value;

        if (cuadrotext) {



            textlist = document.createElement('li');

            textlist.textContent = cuadrotext;

            document.getElementById('lista').appendChild(textlist);

            document.getElementById('tInsertar').value = '';

        }

    }

    document.getElementById('bInsertar').onclick = insertar;


    function eliminar() {


        cuadrotext = document.getElementById('tEliminar').value;
        console.log(cuadrotext);

        if (cuadrotext) {

            let list = document.getElementById('lista').getElementsByTagName('li');
            list.removeClid[cuadrotext-1];

        }

    }

    document.getElementById('bEliminar').onclick = eliminar;






}