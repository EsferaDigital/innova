//One Page scroll

let alturaHeader = header.offsetHeight;

function onePageScroll(e) {
	e.preventDefault()
	var idLink = $(this).attr('href'),
		coordSection = $(idLink).offset().top

	$('html, body').animate({
		//para separarlo un poco del top le puse (coordSection - 60)
		scrollTop: (coordSection - alturaHeader)
	}, 1000)
}

//ejecutamos la funcion onePageScroll en el eventos click de cada enlace

$('.link').on('click', onePageScroll)

//Fin onepage scroll