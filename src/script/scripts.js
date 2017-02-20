$(document).ready(function () {

    //-- ОСНОВНОЙ СЛАЙДЕР  --//
    $('.main-slider__wrapper').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
    });
    //-- Вызов форм  --//
    $('.ask-question').on('click', function (event) {
        event.preventDefault();

        $('#write-us').addClass('write-us--active');
        $('.form-background').addClass('form-background--active');
    });

    $('.order').on('click', function (event) {
        event.preventDefault();

        $('#order').addClass('write-us--active');
        $('.form-background').addClass('form-background--active');
    });

    $('.close').on('click', function () {
        $('.write-us').removeClass('write-us--active');
        $('.form-background').removeClass('form-background--active');
    });

    //-- Переключение складов  --//
    $('#sklad-2').on('click', function (event) {
        event.preventDefault();

        $('.sklad-1').hide();
        $('.sklad-2').show();
    });

    $('#sklad-1').on('click', function (event) {
        event.preventDefault();

        $('.sklad-2').hide();
        $('.sklad-1').show();
    });

    $('[name ^= "simpleForm"]').next('div').hide();

    $('#scroll').on('click', function () {
        $('body,html').animate({scrollTop:0},800);
    });

    $('.main-nav__burger').on('click', function () {
        $('.main-nav__list').toggleClass('main-nav__list--show');
    });
});