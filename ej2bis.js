window.onload = function () {

	let lista = [];
	let canvas = document.getElementById('miCanvas');
	let ctx = canvas.getContext('2d');
	let arrayLength = 10; // Define el tamaño de la lista de rectángulos

	class Rectangulo {
		constructor() {
			this.x = Math.random() * 575; // Coordenada x aleatoria
			this.y = 0; // Coordenada y inicial en la parte superior del canvas
			this.primero = false;
			this.color=this.generarColorAleatorio();
		}

		 generarColorAleatorio() {
			const r = Math.floor(Math.random() * 256);
			const g = Math.floor(Math.random() * 256);
			const b = Math.floor(Math.random() * 256);
			return `rgb(${r}, ${g}, ${b})`;
		}
	}

	function generarLista() {
		for (let i = 0; i < arrayLength; i++) {
			lista.push(new Rectangulo());
		}
	}

	function generaAnimacion() {
		ctx.clearRect(0, 0, 600, 400); // Limpia el canvas

		let todosLlegan = true; // Variable para verificar si todos han llegado al final


		for (let i = 0; i < lista.length; i++) {

			
			let rect = lista[i]; //Necesito meter el array en una variable para acceder a x e y.

			ctx.fillStyle = rect.color;
			ctx.fillRect(rect.x, rect.y, 25, 25); // Dibuja el rectángulo

			// Actualiza la posición del rectángulo
			if (rect.y >= 375) {
				rect.primero = true;
				
			} else {
				rect.y += 1 + Math.random()*3.5; // Incremento de y
				todosLlegan = false;
			}

			if (todosLlegan) {
				clearInterval(id);
			}
		}

		
	}

	generarLista(); // Genera la lista de rectángulos
	let id = setInterval(generaAnimacion, 1000 / 30); // Inicia la animación
	
};

//La función colorAleatorio la tengo que meter en el constructor, si la llamo directamente desde generarAnimación, todos los cuadros cambian de color constantemente.

//La variable todosLlegan se inicializa como true en cada llamada a generaAnimacion. 
//Si algún rectángulo no ha alcanzado la posición y >= 375, todosLlegan se cambia a false.
//Al final de cada llamada de generaAnimacion, si todosLlegaron sigue siendo true, significa que todos los rectángulos han llegado, y clearInterval(id) detiene la animación.
