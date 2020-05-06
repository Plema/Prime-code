$(document).ready(function () {
    $('.slider .list-item').matchHeight({
        byRow: false
    });
    $('.slider').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToScroll: 1,
        slidesToShow: 2,
        focusOnSelect: true,

        appendArrows: $('.section-news .holder-btn'),
        prevArrow: '<button type="button" id="prev-1" class="btn-arrow prev"><i class=" icon-up-open-1" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" id="next-1"class="btn-arrow next"><i class="  icon-down-open-1" aria-hidden="true"></i></button>',
        responsive: [{
                breakpoint: 1280,
                settings: {

                },
            },
            {
                breakpoint: 768,
                settings: {
                    adaptiveHeight: true,
                },
            },

        ]
    });
})