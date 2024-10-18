window.onload = function(){



function muestraMensaje(){

    let tinsertar = document.getElementById("tInsertar").value;
    alert(tinsertar);
}
    
    
    document.getElementById("insertar").onclick = muestraMensaje;
    document.getElementById("eliminar").onclick = muestraMensaje;


}