/* Change header class based on position */
$(window).scroll(function () {
    var pos = $(this).scrollTop(),
        contentPos = $('.wrap').offset().top,
        headerOffset = $('.header').outerHeight();

    if (pos >= contentPos - headerOffset) {
        $('.header').addClass('transform');
    } else {
        $('.header').removeClass('transform');
    }
});

$(document).ready(function () {
    $('.toggle').bigSlide({
        'side': 'right'
    });

    $('.toggle').click(function () {
        $(this).find('i').toggleClass('fa-close');
        $(this).find('i').toggleClass('fa-bars');
    });

    // Add smooth scrolling to all links
    $("nav a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});