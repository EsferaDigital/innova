(function ($){
	$.fn.extend({
		onePageScrolling : function (opcionesUsuario){
			var opcionesIniciales = {
				 velocidad : 1000
			},
				 opc = $.extend( opcionesIniciales, opcionesUsuario)

			function inicializar(){
				function aDondeScroll(evento){
					evento.preventDefault()
					var idEnlace = $(this).attr('href'),
						 coordsSeccion = $(idEnlace).offset().top

					$('html, body').animate({
						scrollTop : coordsSeccion
					}, opc.velocidad)
				}

				$(this).on('click', aDondeScroll)
			}			

			return $(this).each( inicializar )
		}
	})
})(jQuery)