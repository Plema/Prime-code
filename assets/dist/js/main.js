document.addEventListener("touchstart", function () {}, true);

$(document).ready(function () {

    //Меню

    $('.open-menu').on('click', function () {
        $('.menu-mobile').toggleClass('active');
    });

    $('.cloze-menu').on('click', function () {
        $('.menu-mobile').removeClass('active');
    });

    $('.moon').on('click', function () {
        $(this).addClass('active');
        $('.body').addClass('dark');
        $('.sun').removeClass('active');
    })

    $('.sun').on('click', function () {
        $('.moon').removeClass('active');
        $(this).addClass('active');
        $('.body').removeClass('dark');
    })

    if ($(window).width() < 768) {
        $('.dropdown').on('click', function () {
            $(this).toggleClass('active');

        });

        jQuery(function ($) {
            $(document).mouseup(function (e) {
                var div = $(".dropdown");
                if (!div.is(e.target)
                    && div.has(e.target).length === 0) {
                    div.removeClass('active');
                }
            });
        });

    }

    var $menu = $('.menu-mobile .nav ul');
    var $navmenu = $('.menu-mobile .nav')
    if ($(window).width() > 768) {
        jQuery(function ($) {
            $(document).mouseup(function (e) {
                var div = $(".menu-mobile");
                if (!div.is(e.target)
                    && div.has(e.target).length === 0) {
                    div.removeClass('active');
                }
            });
        });
        $menu.menuAim({
            activate: activateSubmenu,
            deactivate: deactivateSubmenu
        });

        function activateSubmenu(row) {
            var $row = $(row),
                $submenu = $row.children('ul');

            $row.children('.dropdown').addClass('hover');
            $submenu.css({ display: 'block' });
            $navmenu.addClass('bg');
        }

        function deactivateSubmenu(row) {
            var $row = $(row),
                $submenu = $row.children('ul');

            $row.find('.dropdown').removeClass('hover');
            $submenu.css('display', 'none');
            $navmenu.removeClass('bg');
        }


        $(document).click(function () {
            $('.menu-mobile .dropdown.hover').removeClass('hover');
            $('.menu-mobile .popover').css('display', 'none');
            $navmenu.removeClass('bg');
            $('.menu-mobile .nav ul ul').css('display', 'none');
        });
    }

    //Попапы
    jQuery(function(a) {
        a(document).mouseup(function(b) {
            var c = a(".modall-body");
            c.is(b.target) || 0 !== c.has(b.target).length || (c.removeClass("active-modall"),
            a(".modall").removeClass("active-modall"),
            a(".body").removeClass("showing-modal"))
        })
    }),

    $('.close, ok').on('click', function () {
        $(".modall").removeClass('active-modall');
        $('.body').removeClass('showing-modal');
    });

    $('.request').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-request").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });

    $('.popup-card').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-card").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });

    $('.reply').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-reply").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });

   
    jQuery(".only_number").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

    $(".phone_mask").mask("+7 (000) 000 00 00", {
        placeholder: "Ваш номер телефона"
    })



});
