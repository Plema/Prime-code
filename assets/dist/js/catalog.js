$(document).ready(function () {
    $('.slider-catalog').slick({
        slidesPerRow: 5,
        rows: 1,
        slidesToScroll: 1,
        appendArrows: $('.section-catalog .holder-btn'),
        prevArrow: '<button type="button" id="prev-2" class="btn-arrow prev"><i class=" icon-up-open-1" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" id="next-2"class="btn-arrow next"><i class="  icon-down-open-1" aria-hidden="true"></i></button>',
        responsive: [{
                breakpoint: 1440,
                settings: {
                    slidesPerRow: 4,
                    rows: 1,
                    vertical: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesPerRow: 2,
                    rows: 2,
                    vertical: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesPerRow: 1,
                    rows: 1,
                    vertical: true,
                    verticalSwiping: true,
                    slidesToScroll: 1,
                    slidesToShow: 5,
                },
            },
        ]
    });
})