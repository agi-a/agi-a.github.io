$(window).scroll(function(){




    $('.parallax-window').parallax({imageSrc: 'portada.webp'});


    $('.ropa').each(function () {
        if ($(this).visible(true)) {
            $(this).addClass('visible');
        } else {
            $(this).removeClass('visible');
        }
    });



});