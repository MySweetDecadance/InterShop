// Все подключаемые файлы в конце

// alert("Js подключен");

$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1,
        arrows: true,
        waitForAnimate: false,
        infinite: true,
    });
});

$(document).ready(function() {
    $('.carousel').slick({
        slidesToShow: 4,
        arrows: true,
        waitForAnimate: false,
        infinite: true,
    });
});


$(document).ready(function() {
    $('.carousel-today').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        waitForAnimate: false,
        infinite: true,
        dots:true,
    });
});

$(document).ready(function() {
    $('.slider-brands').slick({
        slidesToShow: 7 ,
        arrows: true,
        waitForAnimate: false,
        infinite: true,
    });
});


//Подключение slick
@@include('slick.min.js');
