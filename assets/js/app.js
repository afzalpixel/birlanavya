$(document).ready(function() {
    $('.toggle-btn').click(function(event) {
        event.stopPropagation();
        if ($(this).hasClass('active')) {
            $(".menubar-sidebar").removeClass('showin');
            $(this).removeClass('active');
            $(".wrapper").removeClass('overlay');
        } else {
            //----- mobile side menu closed-------
            $(".toggle-mobile").removeClass('active');
            $(".menubar").removeClass('showin');
            $(".wrapper").removeClass('overlay')
                //----- mobile side menu closed-------
            $(".toggle-btn.active").removeClass('active');
            $(".menubar-sidebar").removeClass('showin');
            $("body").removeClass('overlay')
            $(this).addClass('active');
            $(".menubar-sidebar").addClass('showin');
            $(".wrapper").addClass('overlay')
        }
    });
    $('.wrapper').click(function(event) {
        $(".toggle-btn").removeClass('active');
        $(".menubar-sidebar").removeClass('showin');
        $(".wrapper").removeClass('overlay')
    });




    $("#hamburger").on("click", function() {
        $(this).toggleClass("active");
        $('.tabs-wrapper').slideToggle();
    });



});