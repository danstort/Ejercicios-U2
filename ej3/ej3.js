// UT2 cookies

window.onload = function () {

	var x = 0;     // posición inicial x del rectángulo
	var y = 0;     // posición inicial y del rectángulo
	var canvas;  // variable que referencia al elemento canvas del html
	var ctx;     // contexto de trabajo
	var id;      // id de la animación
	var img = newImage();
	img.src = 'img/assets/comecocos.png'

	var xIzquierda, xDerecha, yArriba, yAbajo;


	function generaPosicionDerecha() {

		x = x + 2;

		if (x > 485) {

			// If at edge, reset ship position and set flag.
			x = 485;
		}

		console.log("derecha " + x);

	}

	function generaPosicionIzquierda() {

		x = x - 2;

		if (x < 0) {

			// If at edge, reset ship position and set flag.
			x = 0;
		}


	}

	function generaPosicionSuperior() {

		y = y - 2;

		if (y < 0) {

			// If at edge, reset ship position and set flag.
			y = 0;
		}


	}

	function generaPosicionInferior() {

		y = y + 2;

		if (y > 485) {

			// If at edge, reset ship position and set flag.
			y = 485;
		}


	}

	function pintaRectangulo() {

		// borramos el canvas
		ctx.clearRect(0, 0, 500, 500);

		if (xDerecha == true) {

			generaPosicionDerecha();

		}
		if (xIzquierda == true) {

			generaPosicionIzquierda();

		}

		if (yArriba == true) {

			generaPosicionSuperior();

		}

		if (yAbajo == true) {

			generaPosicionInferior();

		}

		// pintamos la imagen
		
		ctx.drawImage(img, x, y, 15, 15);
		

	}

	function activaMovimiento(evt) {


		switch (evt.keyCode) {

			// Left arrow.
			case 37:
				xIzquierda = true;
				break;

			// Right arrow.
			case 39:
				xDerecha = true;
				break;

			case 38:
				yArriba = true;
				break;

			case 40:
				yAbajo = true;
				break;

		}
	}

	function desactivaMovimiento(evt) {

		switch (evt.keyCode) {

			// Left arrow
			case 37:
				xIzquierda = false;
				break;

			// Right arrow 
			case 39:
				xDerecha = false;
				break;

			case 38:
				yArriba = false;
				break;

			case 40:
				yAbajo = false;
				break;

		}

	}

	document.addEventListener("keydown", activaMovimiento, false);
	document.addEventListener("keyup", desactivaMovimiento, false);

	// localizamos el canvas
	canvas = document.getElementById("miCanvas");

	// Generamos el contexto de trabajo
	ctx = canvas.getContext("2d");

	// Lanzamos la animación
	id = setInterval(pintaRectangulo, 1000 / 24);


}


