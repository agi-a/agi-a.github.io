$(window).scroll(function () {

    
    $('.paises, .alk').each(function () {
        if ($(this).visible(true)) {
            $(this).addClass('visible');
        } else {
            $(this).removeClass('visible');
        }
    });

    $('.linea').each(function () {
        if ($(this).visible(true)) {
            $(this).addClass('visible');
        } else {
            $(this).removeClass('visible');
        }
    });

    $('.ger').each(function () {
        if ($(this).visible(true)) {
            $(this).addClass('visible');
        } else {
            $(this).removeClass('visible');
        }
    });

    $('.cb1, .cb2').each(function () {
        if ($(this).visible(true)) {
            $(this).addClass('visible');
        } else {
            $(this).removeClass('visible');
        }
    });

    $('.tun').each(function () {
        if ($(this).visible(true)) {
            $(this).addClass('visible');
        } else {
            $(this).removeClass('visible');
        }
    });

    $('.ant1').each(function () {
        if ($(this).visible(true)) {
            $(this).addClass('visible');
        } else {
            $(this).removeClass('visible');
        }
    });

    $('.nic1').each(function () {
        if ($(this).visible(true)) {
            $(this).addClass('visible');
        } else {
            $(this).removeClass('visible');
        }
    });

    $('.nic2').each(function () {
        if ($(this).visible(true)) {
            $(this).addClass('visible');
        } else {
            $(this).removeClass('visible');
        }
    });

    $('.parallax-window').parallax({ imageSrc: 'conde.webp' });


    
});
