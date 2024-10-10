window.onload = function(){

    let nodoHTML = document.childNodes[0];
    console.log(nodoHTML);

    let nodoHTML1a = document.childNodes[0].childNodes[0];
    console.log(nodoHTML1a);

    let nodoHTML1b = document.childNodes[0].childNodes[2];
    console.log(nodoHTML1b);

    let nodoHTML1aa = document.childNodes[0].childNodes[0].childNodes[1];
    console.log(nodoHTML1aa);

    let nodoHTML1ab = document.childNodes[0].childNodes[0].childNodes[3];
    console.log(nodoHTML1ab);

    let nodoHTML1ba = document.childNodes[0].childNodes[2].childNodes[1];
    console.log(nodoHTML1ba);

    let nodoHTML1bb = document.childNodes[0].childNodes[2].childNodes[3];
    console.log(nodoHTML1bb);
}