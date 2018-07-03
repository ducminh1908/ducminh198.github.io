$(function() {
	$('.card-body').slideUp(2);
	$('.mini-box.price-filter').click(function(event) {
		/* Act on the event */
		$('.card-body').slideToggle(1);
	});
});