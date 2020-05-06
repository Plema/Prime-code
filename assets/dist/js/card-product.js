$(document).ready(function () {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('.list-advantages').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        arrows: false,
        dots: true,
    })

    $('#responsiveTabs').responsiveTabs({
        startCollapsed: 'accordion',
        active: 0
    });

    if ($(window).width() < 768) {
        $('.list-commodity').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 600,
            appendArrows: $('.section-commodity .holder-btn'),
            prevArrow: '<button type="button" id="prev-2" class="btn-arrow prev"><i class="icon-strelkamoblevo" aria-hidden="true"></i></button>',
            nextArrow: '<button type="button" id="next-2"class="btn-arrow next"><i class="icon-strelkamobpravo" aria-hidden="true"></i></button>',
        })
    }


    $('.list-commodity .item').on('click', function () {
        var id = $(this).attr('id');
        $('.item').removeClass('active')
        $(this).addClass('active');
        $(".active-item [data-id='" + id + "']").addClass('show').siblings().removeClass('show');
    });

    $('.item-details li').on('click', function () {
        $('.item-details li').removeClass('checked')
        $(this).addClass('checked');
    })
    


    if ($(window).width() < 1279) {
        $('.list-products').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 600,
            appendArrows: $('.section-products .holder-btn'),
            prevArrow: '<button type="button" id="prev-1" class="btn-arrow prev"><i class="icon-strelkamoblevo" aria-hidden="true"></i></button>',
            nextArrow: '<button type="button" id="next-1"class="btn-arrow next"><i class="icon-strelkamobpravo" aria-hidden="true"></i></button>',
            responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,

                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            ]
        })
    }
})

$('.item-image .overlay span').hover(function () {
    var point = this.className;
    $(this).addClass('active').siblings().removeClass('active');;
    $(this).parents(".item-image").find("img[data-point='" + point + "']").addClass('active').siblings().removeClass('active');
});