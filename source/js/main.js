jQuery(document).ready(function ($) {
    let brandSliderBtrPrew = '<button class="btn-prev brand-slider__btn-prev">\n' +
        '          <svg class="icon icon-arrow-left ">\n' +
        '            <use xlink:href="img/svg/sprite.svg#icon-arrow-left"></use>\n' +
        '          </svg>\n' +
        '        </button>';
    let brandSliderBtrnext = '<button class="btn-next brand-slider__btn-next">\n' +
        '          <svg class="icon icon-arrow-right ">\n' +
        '            <use xlink:href="img/svg/sprite.svg#icon-arrow-right"></use>\n' +
        '          </svg>\n' +
        '        </button>';

    let advertisingSliderNext = '<button class="btn-next advertising__btn-next slick-arrow" style="">\n' +
        '              <svg class="icon icon-arrow-right ">\n' +
        '                <use xlink:href="img/svg/sprite.svg#icon-arrow-right"></use>\n' +
        '              </svg>\n' +
        '            </button>' ;
    let advertisingSliderPrev = '<button class="btn-prev advertising__btn-prev slick-arrow" style="">\n' +
        '              <svg class="icon icon-arrow-left ">\n' +
        '                <use xlink:href="img/svg/sprite.svg#icon-arrow-left"></use>\n' +
        '              </svg>\n' +
        '            </button>'

    $('.big-slider__list').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        dots: true,
        arrows: true,
        responsive: [{

            breakpoint: 990,
            settings: {
                slidesToShow: 4,
                arrows: true,
            }


        }]
    });

    $('.proposal__list').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        dots: true,
        arrows: true,
        responsive: [{

            breakpoint: 990,
            settings: {
                slidesToShow: 4,
                arrows: true,
            }


        }]
    });
    $('.brand-block__slider-list').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        dots: true,
        arrows: true,
        responsive: [{

            breakpoint: 990,
            settings: {
                slidesToShow: 4,
                arrows: true,
            }


        }]
    });

    // $('.sale-slider__list').slick({
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 6,
    //     centerMode: true,
    //     variableWidth: true,
    //     // prevArrow: $('.sale-slider__btn-prev'),
    //     // nextArrow: $('.sale-slider__btn-next'),
    //     responsive: [{
    //
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow: 4,
    //             arrows: false
    //         }
    //
    //
    //     }]
    // });
    //
    // $('.advertising__slider').slick({
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 2,
    //     variableWidth: true,
    //     dots: false,
    //     prevArrow: advertisingSliderPrev,
    //     nextArrow: advertisingSliderNext,
    //     responsive: [{
    //
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow: 4
    //         }
    //     }]
    // });
    //
    // $('.catalog-nav__brand').slick({
    //     slidesToShow: 5,
    //     variableWidth: true,
    //     dots: false,
    //     arrows: false,
    //     responsive: [
    //         {
    //             breakpoint: 99999,
    //             settings: 'unslick'
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });
    //
    //
    // $(".product-head__sliders").each(function () {
    //     var th = $(this);
    //
    //
    //     //  слайдер в  карточке товара
    //     th.find('.product-head__slider-big').slick({
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         dots: false,
    //         speed: 450,
    //         asNavFor: th.find('.product-head__slider-small'),
    //         infinite: false,
    //         loop: false,
    //         arrows: false,
    //
    //     });
    //     th.find('.product-head__slider-small').slick({
    //         slidesToShow: 6,
    //         slidesToScroll: 1,
    //         dots: false,
    //         speed: 450,
    //         infinite: false,
    //         loop: false,
    //         arrows: false,
    //         vertical: true,
    //         verticalSwiping: true,
    //         focusOnSelect: true,
    //         asNavFor: th.find('.product-head__slider-big'),
    //         responsive: [{
    //             breakpoint: 1199,
    //             settings: {
    //                 slidesToShow: 3,
    //             }
    //         },
    //             {
    //                 breakpoint: 767,
    //                 settings: {
    //                     slidesToShow: 4,
    //                     vertical: false,
    //                     verticalSwiping: false,
    //                 }
    //             },
    //
    //         ]
    //     });
    // });


    // $('.product-head__slide--big a').magnificPopup({
    //     type: 'image',
    //     closeOnContentClick: true,
    //     mainClass: 'mfp-img-mobile',
    //     image: {
    //         verticalFit: true
    //     }
    //
    // });


    // $('.product-head__video-link').magnificPopup({
    //     disableOn: 700,
    //     type: 'iframe',
    //     mainClass: 'mfp-fade',
    //     removalDelay: 160,
    //     preloader: false,
    //     fixedContentPos: false
    // });
    //
    //
    // $('.tabs__caption').slick({
    //     dots: false,
    //     arrows: false,
    //     infinite: false,
    //     loop: false,
    //     speed: 450,
    //     slidesToShow: 1,
    //     variableWidth: true,
    //     rows: 0,
    //     responsive: [
    //         {
    //             breakpoint: 99999,
    //             settings: 'unslick'
    //         },
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });
    //
    // function tabscostume(tab) {
    //     $('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
    //         $(this)
    //             .addClass('active').siblings().removeClass('active')
    //             .closest('.' + tab).find('.' + tab + '__item').hide().removeClass('active')
    //             .eq($(this).index()).fadeIn().addClass('active');
    //     });
    // };
    // tabscostume('tabs');
    //
    //
    // $('.instagram-block__slider').slick({
    //     slidesToShow: 5,
    //     variableWidth: true,
    //     dots: false,
    //     arrows: false,
    // });
    //
    // $(".order-history__toggle").click(function () {
    //     $(this).closest(".order-history__item").toggleClass('order-history__item--open');
    // });
    //
    // $('.popup-with-move-anim').magnificPopup({
    //     type: 'inline',
    //
    //     fixedContentPos: true,
    //     fixedBgPos: true,
    //
    //     overflowY: 'auto',
    //
    //     closeBtnInside: true,
    //     preloader: false,
    //
    //     midClick: true,
    //     removalDelay: 300,
    //     mainClass: 'my-mfp-zoom-in'
    // });
    //
    //
    // $('input[type="tel"]').mask("+7(999) 999-9999", {});
    //
    // $(".custom-scroll-js").mCustomScrollbar({
    //     autoHideScrollbar: true,
    // });
    //
    //
    // $(".custom-scroll-js3").mCustomScrollbar({
    //     autoHideScrollbar: true,
    // });
    // $(".custom-scroll-js2").mCustomScrollbar({
    //     autoHideScrollbar: true,
    // });
    //
    // $('[data-toggle="tooltip-catalog"]').tooltip({
    //     html: true,
    //     placement: 'top',
    //     template: '<div class="tooltip tooltip-catalog__wrapper" role="tooltip">' +
    //         '<div class="tooltip-arrow"></div>' +
    //         '<div class="tooltip-inner tooltip-catalog__wrapper-inner"></div></div>'
    // });
    //
    // // range в каталоге
    // $(".js-range-slider").ionRangeSlider();
    //
    //
    // $('.select2--js').select2({
    //     minimumResultsForSearch: -1
    // });
    //
    //
    // $('.brands__name-list').slick({
    //     slidesToShow: 5,
    //     variableWidth: true,
    //     dots: false,
    //     arrows: false,
    //     responsive: [
    //         {
    //             breakpoint: 99999,
    //             settings: 'unslick'
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });
    //
    // jQuery('.aside-filter__toggle').on('click', function(e) {
    //     e.preventDefault();
    //     jQuery(this).closest('.aside-filter__group').toggleClass('aside-filter__group--active');
    // });

});


