// UT4 - Animaciones

window.onload = function () {

	const TOPEDERECHA = 473
	const TOPEIZQUIERDA = 0;
	const TOPEARRIBA = 0;
	const TOPEABAJO = 473

	let x = 0;        // posición inicial x del rectángulo
	let y = 250;      // posición inicial y del rectángulo
	let canvas;     // variable que referencia al elemento canvas del html
	let ctx;        // contexto de trabajo
	let id1, id2;   // id de la animación

	let xDerecha
	let xIzquierda;
	let xArriba;
	let xAbajo;

	let posicion = 0;   // Posición del array 0, 1

	let miComecocos;
	let imagen;

	function Comecocos(x_, y_) {

		this.x = x_;
		this.y = y_;
		this.animacionComecocos = [[0, 2], [32, 2]]; // Posiciones del sprite donde recortar cada imagen
		this.velocidad = 1.4;
		this.tamañoX = 30;
		this.tamañoY = 30;

	}

	Comecocos.prototype.generaPosicionDerecha = function () {

		this.x = this.x + this.velocidad;

		if (this.x > TOPEDERECHA) {

			// If at edge, reset ship position and set flag.
			this.x = TOPEDERECHA;
		}

		this.animacionComecocos = [[0, 2], [32, 2]];
	}


	Comecocos.prototype.generaPosicionIzquierda = function () {

		this.x = this.x - this.velocidad;

		if (this.x < TOPEIZQUIERDA) {

			// If at edge, reset ship position and set flag.
			this.x = TOPEIZQUIERDA;
		}
		this.animacionComecocos = [[0, 63], [32, 63]];
	}

	Comecocos.prototype.generaPosicionSuperior = function () {

		this.y = this.y - this.velocidad;

		if (this.y < TOPEARRIBA) {

			// If at edge, reset ship position and set flag.
			this.y = TOPEARRIBA;
		}
		this.animacionComecocos = [[0, 95], [32, 95]];
		
	}

	Comecocos.prototype.generaPosicionInferior = function () {

		this.y = this.y + this.velocidad;

		if (this.y > TOPEABAJO) {

			// If at edge, reset ship position and set flag.
			this.y = TOPEABAJO;
		}
		this.animacionComecocos = [[0, 33], [32, 33]];
		
	}

	function pintaRectangulo() {

		// borramos el canvas
		ctx.clearRect(0, 0, 500, 500);

		if (xDerecha) {

			miComecocos.generaPosicionDerecha();

		}

		if (xIzquierda) {

			miComecocos.generaPosicionIzquierda();

		}

		if (xArriba) {

			miComecocos.generaPosicionSuperior();

		}

		if (xAbajo) {

			miComecocos.generaPosicionInferior();

		}


		// Pintamos el comecocos
		ctx.drawImage(miComecocos.imagen, // Imagen completa con todos los comecocos (Sprite)
			miComecocos.animacionComecocos[posicion][0],    // Posicion X del sprite donde se encuentra el comecocos que voy a recortar del sprite para dibujar
			miComecocos.animacionComecocos[posicion][1],	  // Posicion Y del sprite donde se encuentra el comecocos que voy a recortar del sprite para dibujar
			miComecocos.tamañoX, 		    // Tamaño X del comecocos que voy a recortar para dibujar
			miComecocos.tamañoY,	        // Tamaño Y del comecocos que voy a recortar para dibujar
			miComecocos.x,                // Posicion x de pantalla donde voy a dibujar el comecocos recortado
			miComecocos.y,				            // Posicion y de pantalla donde voy a dibujar el comecocos recortado
			miComecocos.tamañoX,		    // Tamaño X del comecocos que voy a dibujar
			miComecocos.tamañoY);         // Tamaño Y del comecocos que voy a dibujar					  

	}

	function abreCierraBoca() {

		posicion = (posicion + 1) % 2;  // Cargará posiciones 0 y 1 del array

	}

	function activaMovimiento(evt) {

		switch (evt.keyCode) {


			// Right arrow.
			case 39:
				xDerecha = true;
				break;

			case 37:
				xIzquierda = true;
				break;

			case 38:
				xArriba = true;
				break;

			case 40:
				xAbajo = true;
				break;

		}
	}

	function desactivaMovimiento(evt) {

		switch (evt.keyCode) {


			// Right arrow 
			case 39:
				xDerecha = false;
				break;

			case 37:
				xIzquierda = false;
				break;

			case 38:
				xArriba = false;
				break;

			case 40:
				xAbajo = false;
				break;

		}



	}

	document.addEventListener("keydown", activaMovimiento, false);
	document.addEventListener("keyup", desactivaMovimiento, false);

	// localizamos el canvas
	canvas = document.getElementById("miCanvas");

	// Generamos el contexto de trabajo
	ctx = canvas.getContext("2d");

	imagen = new Image();
	imagen.src = "spriteComecocos.png";
	Comecocos.prototype.imagen = imagen;

	miComecocos = new Comecocos(x, y);

	// Lanzamos la animación
	id1 = setInterval(pintaRectangulo, 1000 / 50);

	// Animación encargada de abrir y cerra la boca
	id2 = setInterval(abreCierraBoca, 1000 / 8);

	

}


