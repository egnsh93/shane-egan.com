$(document).ready(function () {
    $('.toggle').bigSlide({
        'side': 'right',
        'easyClose': 'true'
    });

    $(document).click(function() {
        isMenuActive();

    });

    $('.toggle').click(function () {
        isMenuActive();
    });

    function isMenuActive() {
        var menuIsActive = $('.toggle').hasClass('active');
        if (menuIsActive) {
            $('.toggle').find('i').removeClass('fa-bars');
            $('.toggle').find('i').addClass('fa-close');
        } else {
            $('.toggle').find('i').removeClass('fa-close');
            $('.toggle').find('i').addClass('fa-bars');
        }
    }

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
