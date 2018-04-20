(function ($) {
	'use strict';

	function efectos() {
		$('.flexslider').flexslider({
			animation: 'slide',
			/*direction : 'vertical',*/
			slideShow : true,
			controlNav: true
		});
	}
	$(document).ready(efectos);
})(jQuery);
