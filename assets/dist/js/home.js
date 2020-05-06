$(document).ready(function () {

    if ($(window).width() > 768) {
        var wheel, scrolling;
        var $carousel = $('#carousel');
        $carousel.on('init', function () {
                wheel = new WheelIndicator({
                    elem: $carousel[0],
                    callback: wheelHandler,
                });
            })
            .on('beforeChange', function () {
                scrolling = true;
            })
            .on('afterChange', function () {
                scrolling = false;
            })

        function wheelHandler(e) {
            if (!scrolling) {
                console.log('Mouse wheel scroll:', e.direction);
                $carousel.slick(e.direction === 'up' ? 'slickPrev' : 'slickNext');
            }
        }
    }

    $('.list-hero').slick({
        infinite: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        fade: true,
        adaptiveHeight: true,
        appendArrows: $('.section-hero .holder-btn'),
        prevArrow: '<button type="button" id="prev-1" class="btn-arrow prev"><i class=" icon-left-open-1" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" id="next-1"class="btn-arrow next"><i class=" icon-right-open" aria-hidden="true"></i></button>',
    });
    
    var dots = $('ul.slick-dots')
    var $status = $('.pagingInfo');
    var $slickElement = $('.list-hero');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        if (!slick.$dots) {
            return;
        }

        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html("<span>" + i + "</span>" + "<span>" + '/' + "</span>" + "<span>" + (slick.$dots[0].children.length) + "</span>" + '<p class="slide-title">' + 'Prime design' + '</p>');

    });

    $('#carousel').on('afterChange', function(event, slick, currentSlide, nextSlide){
        var elSlide = $('.slick-active .item');
        var materials = elSlide.data('materials');
       
        $('.slide-title').text(materials);
    });
})