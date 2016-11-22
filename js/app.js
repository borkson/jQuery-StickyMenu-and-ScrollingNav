$(function() {
    //variables
    var nav = $('nav');
    var menu = $('.menu');
    var menuLinks = menu.find('a');
    var menuTop = menu.offset().top;

    //sticky menu
    $(window).on('scroll', function() {
        var docScroll = $(document).scrollTop();
        if (docScroll > menuTop) {
            menu.addClass('sticky');
        } else {
            menu.removeClass('sticky');
        }
    })
    $(window).on('resize', function() {
        if (menu.hasClass('sticky')) {
            menuTop = nav.offset().top;
        } else {
            menuTop = menu.offset().top;
        }
    })


    //scrolling nav
    menuLinks.on('click', function(e) {
        e.preventDefault();
        var aValue = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(aValue).offset().top
        }, 700);
    })


});
