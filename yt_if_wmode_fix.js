$(document).ready(function() {
	var ythref;
	$('iframe').each(function(){
		if($(this).attr('src').indexOf('youtube.com/embed') != -1) {
			ythref = $(this).attr('src');
			if(ythref.indexOf('?') == -1) {
				$(this).attr('src', ythref + '?wmode=transparent');
			} else {
				$(this).attr('src', ythref + '&wmode=transparent');
			}
		}
	});
});