// accordion-ui
$(document).ready(function() {
  var icons = {
    header: "iconDown",    // custom icon class
    activeHeader: "iconUp" // custom icon class
  };
  $( "#accordion" ).accordion({
    header: "a.sectionTitle",
    active: false,
    collapsible: true,
    animate: 1000,
    icons: icons
  });
  $('#intro-slider').flexslider({
    animation: 'fade',
    controlNav: false,
    slideshowSpeed: 4000,
  });
});


// contact-form
$(function() {
	var form = $('#ajax-contact');
	var formMessages = $('#form-messages');
	$(form).submit(function(e) {
		e.preventDefault();
		var formData = $(form).serialize();
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');
			$(formMessages).text(response);
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});
	});
});
