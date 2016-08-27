//disable scrolling
      // $('html, body').css({
      //     'overflow': 'hidden',
      //     'height': '100%'
      // });
// to restore
// $('html, body').css({
//     'overflow': 'auto',
//     'height': 'auto'
// });

// accordion-ui
$(document).ready(function() {
  var icons = {
      header: "iconDown",    // custom icon class
      activeHeader: "iconUp" // custom icon class
  };
	$( "#accordion" ).accordion({
		header: "a",
		active: false,
		collapsible: true,
		animate: 1000,
    icons: icons
	});
});


// $("a").click(function(){
// 	$('a').not(".ui-state-active").addClas(".hide");
// });

//contact form
new ContactForm('#contact-form', {
    endpoint: './process.php'
});
