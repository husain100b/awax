// Use custom JavaScript here

(function ($) {
    "use strict";

    // Preloader
    $(window).on('load', function() {
        $('.preloader-wrapper').fadeOut()
    });

    // Responsive navigation
    $('.navigation').meanmenu({
        meanMenuContainer: '.responsive-nav',
        meanScreenWidth: "991"
    });

    // Magnific Popup
    $('.single-portfolio').magnificPopup({
        delegate: 'a',
        type: 'image'
    });

    // Counterup call
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // ScrollIt
    $.scrollIt();

    // scrollUp
    $.scrollUp({
       scrollText: '<i class=" ion-ios-arrow-up"></i>'
    });

})(jQuery);



