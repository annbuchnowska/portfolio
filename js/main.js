//disable scrolling
$('html, body').css({
    'overflow': 'hidden',
    'height': '100%'
});
// to restore
// $('html, body').css({
//     'overflow': 'auto',
//     'height': 'auto'
// });

// accordion-ui
$(document).ready(function() {
	$( "#accordion" ).accordion({
		header: "a",
		active: false,
		collapsible: true,
		animate: 1000
	});
});


// $("a").click(function(){
// 	$('a').not(".ui-state-active").addClas(".hide");
// });
