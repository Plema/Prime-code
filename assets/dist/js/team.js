$(document).ready(function () {
    $('.slider').slick({
        slidesToScroll: 1,
        slidesToShow: 5,
        variableWidth: false,
        appendArrows: $('.section-team .holder-btn'),
        prevArrow: '<button type="button" id="prev-1" class="btn-arrow prev"><i class=" icon-left-open-1" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" id="next-1"class="btn-arrow next"><i class="  icon-right-open" aria-hidden="true"></i></button>',
        responsive: [{
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    customPaging: 10,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    variableWidth: true
                },
            },
        ]
    });
})