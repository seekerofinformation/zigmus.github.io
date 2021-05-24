$(function () {

    $('.tab').on('click', function(e){
    e.preventDefault(); // отмена стандартного поведения браузера

    $($(this).siblings()).removeClass('tab--active');
    $('.tabs__content').removeClass('tabs__content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs__content--active');

    //$('.').slick('setPosition'); // Инициализация слайдера
});

    $('.hamburger-btn').on('click', function() {
    $('.hamburger-btn').toggleClass('hamburger-btn--active');
    $('.header__menu').toggleClass('header__menu--active');
});

    $('.order-slider__inner').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button class="order-slider__btn order-slider__btn--prev"><svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.469181 6.53814C0.176289 6.24525 0.176289 5.77038 0.469181 5.47748L5.24215 0.704512C5.53505 0.411618 6.00992 0.411618 6.30281 0.704512C6.59571 0.997405 6.59571 1.47228 6.30281 1.76517L2.06017 6.00781L6.30281 10.2505C6.59571 10.5433 6.59571 11.0182 6.30281 11.3111C6.00992 11.604 5.53505 11.604 5.24215 11.3111L0.469181 6.53814ZM22.9995 6.75781H0.999512V5.25781H22.9995V6.75781Z"fill="#236EFF"><svg></button>',
    nextArrow: '<button class="order-slider__btn order-slider__btn--next"><svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.2064 6.53814C23.4992 6.24525 23.4992 5.77038 23.2064 5.47748L18.4334 0.704512C18.1405 0.411618 17.6656 0.411618 17.3727 0.704512C17.0798 0.997405 17.0798 1.47228 17.3727 1.76517L21.6154 6.00781L17.3727 10.2505C17.0798 10.5433 17.0798 11.0182 17.3727 11.3111C17.6656 11.604 18.1405 11.604 18.4334 11.3111L23.2064 6.53814ZM0.676025 6.75781H22.676V5.25781H0.676025V6.75781Z" fill="#236EFF"/></svg></button>',
    appendArrows: $('.order-slider__arrows'),
    variableWidth: true,
    responsive: [
        {
            //breakpoint: ,
            settings: {
                
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

    $("#quantity").ionRangeSlider({
    grid: false,
    min: 0,
    max: 20,
    from: 2,
});

$("#price").ionRangeSlider({
    grid: false,
    min: 0,
    max: 1000,
    from: 300,
    postfix: "€",
});

    $('.slider-clients').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<button class="slider__btn slider__btn--prev"><svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.2064 6.53814C23.4992 6.24525 23.4992 5.77038 23.2064 5.47748L18.4334 0.704512C18.1405 0.411618 17.6656 0.411618 17.3727 0.704512C17.0798 0.997405 17.0798 1.47228 17.3727 1.76517L21.6154 6.00781L17.3727 10.2505C17.0798 10.5433 17.0798 11.0182 17.3727 11.3111C17.6656 11.604 18.1405 11.604 18.4334 11.3111L23.2064 6.53814ZM0.676025 6.75781H22.676V5.25781H0.676025V6.75781Z" fill="#FFF8F5"/></svg></button>',
    nextArrow: '<button class="slider__btn slider__btn--next"><svg width="23" height="12" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.469181 6.53814C0.176289 6.24525 0.176289 5.77038 0.469181 5.47748L5.24215 0.704512C5.53505 0.411618 6.00992 0.411618 6.30281 0.704512C6.59571 0.997405 6.59571 1.47228 6.30281 1.76517L2.06017 6.00781L6.30281 10.2505C6.59571 10.5433 6.59571 11.0182 6.30281 11.3111C6.00992 11.604 5.53505 11.604 5.24215 11.3111L0.469181 6.53814ZM22.9995 6.75781H0.999512V5.25781H22.9995V6.75781Z" fill="#FFF8F5"/></svg></button>',
    variableWidth: true,
    dots: true,
    responsive: [
        /* {
            breakpoint: 1090,
            settings: {
                slidestoShow: 1,
            }
        }, */
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
                arrows: false,
                infinite: true,
                //centerMode: true,
            }
        },
    ]
});

    $('.slider-media').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<button class="slider__btn slider-media__btn slider__btn--prev"><svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.2064 6.53814C23.4992 6.24525 23.4992 5.77038 23.2064 5.47748L18.4334 0.704512C18.1405 0.411618 17.6656 0.411618 17.3727 0.704512C17.0798 0.997405 17.0798 1.47228 17.3727 1.76517L21.6154 6.00781L17.3727 10.2505C17.0798 10.5433 17.0798 11.0182 17.3727 11.3111C17.6656 11.604 18.1405 11.604 18.4334 11.3111L23.2064 6.53814ZM0.676025 6.75781H22.676V5.25781H0.676025V6.75781Z" fill="#FFF8F5"/></svg></button>',
    nextArrow: '<button class="slider__btn slider-media__btn slider__btn--next"><svg width="23" height="12" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.469181 6.53814C0.176289 6.24525 0.176289 5.77038 0.469181 5.47748L5.24215 0.704512C5.53505 0.411618 6.00992 0.411618 6.30281 0.704512C6.59571 0.997405 6.59571 1.47228 6.30281 1.76517L2.06017 6.00781L6.30281 10.2505C6.59571 10.5433 6.59571 11.0182 6.30281 11.3111C6.00992 11.604 5.53505 11.604 5.24215 11.3111L0.469181 6.53814ZM22.9995 6.75781H0.999512V5.25781H22.9995V6.75781Z" fill="#FFF8F5"/></svg></button>',
    appendArrows: $('.media__slider-switchers'),
    appendDots: $('.media__slider-switchers'),
    dots: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                infinite: true,
                arrows: false,
            }
        },
    ]
});

    $('.slider-start').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                vertical: false,
                verticalSwiping: false,
            }
        },
    ]
});

    $('.questions__item-header').on('click', function(){
    $(this).parent().toggleClass('questions__item--active');   
});

    $(".popup__close-btn").on("click", function () {
        $(".overlay, .popup").fadeOut("slow");
    });

    $(".filter-style").styler();

    $("input[name=phone]").mask("+375 (99) 999-99-99");

    $("#email-enter").on("click", function () {
        $(this).children().text($(this).text() == "Войти через email" ? "Войти по номеру телефона" : "Войти через email");
        $(".enter-popup__phone-enter").toggleClass("enter-popup__phone-enter--hide");
        $(".enter-popup__email-enter").toggleClass("enter-popup__email-enter--show");
    });
});