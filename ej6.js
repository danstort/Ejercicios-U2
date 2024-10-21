window.onload = function(){



    window.onload=function(){

        document.getElementById("formulario1").addEventListener('submit',function(event){ 
            event.preventDefault();//para que el formulario no se reenvie
            const campodetexto = document.getElementById('campo1').value;
            if (campodetexto) {
    
                const nuevoElemento = document.createElement('li');
                nuevoElemento.textContent = campodetexto;
    
    
                document.getElementById('lista').appendChild(nuevoElemento);
    
                document.getElementById('campo1').value='';
    
    
                
            }
        }
        );
        
        document.getElementById("formulario2").addEventListener('submit',function(event){ 
            event.preventDefault();//para que el formulario no se reenvie
            const campodetexto = document.getElementById('campo2').value;
            if ( Number.isInteger(campodetexto) && document.getElementById('lista').children.length >0 ) {
                let tabla =  document.getElementById('lista');
                    tabla.removeChild(tabla.children[campodetexto -1])
    
                
    
    
                
            }
    
    
    
        });
    
    
    }}