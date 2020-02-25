

$(".header__burger").click(function (e) {
    e.preventDefault(), $(".header__navigation").toggleClass("header__navigation--visible")
}), function (e) {
    e('a[href^="#"]').click(function () {
        var a = e(this).attr("href");
        return e("html, body").animate({scrollTop: e(a).offset().top}, 1e3), !1
    })
}(jQuery), function (e) {
    e(function () {
        e(".level__degree").on("click", "li:not(.active)", function () {
            e(this).addClass("level__item--active").siblings().removeClass("level__item--active").closest(".level__content").find(".level__tabs").removeClass("level__tabs--active").eq(e(this).index()).addClass("level__tabs--active")
        })
    })
}(jQuery), function (e) {
    e(".branch__accordion > .branch__item:eq(1) .branch__name").addClass("branch__name--active").next().slideDown(), e(".branch__accordion .branch__name").click(function (a) {
        var t = e(this).closest(".branch__item").find(".branch__text");
        e(this).closest(".branch__accordion").find(".branch__text").not(t).slideUp(), e(this).hasClass("branch__name--active") ? e(this).removeClass("branch__name--active") : (e(this).closest(".branch__accordion").find(".branch__name--active").removeClass("branch__name--active"), e(this).addClass("branch__name--active")), t.stop(!1, !0).slideToggle(), a.preventDefault()
    })
}(jQuery), $('[data-fancybox="gallery"]').fancybox({
    thumbs: {infobar: !1},
    buttons: ["close"]
}), $(window).scroll(function () {
    window.pageYOffset >= 450 ? $(".header__heading").addClass("header__heading--fixed") : $(".header__heading").removeClass("header__heading--fixed")
}), $(document).ready(function () {
    var e = new Swiper(".targeting__slider.swiper-container", {
        cssMode: true,
        mousewheel: {
            releaseOnEdges: false,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: false
        }
    });
    $('input[type="range"]').on("input change", function (a) {
        a.preventDefault();
        var t = $(this).val();
        console.log(t), e.slideTo(t - 1, 500, !1)
    })

    new Swiper(".life__gallery.swiper-container", {
        slidesPerView: 3,
        spaceBetween: 15,
        navigation: {nextEl: ".life__link"},
        breakpoints: {
            320: {slidesPerView: 1, spaceBetween: 10},
            480: {slidesPerView: 1, spaceBetween: 10},
            640: {slidesPerView: 1, spaceBetween: 10},
            768: {slidesPerView: 2, spaceBetween: 10},
            992: {slidesPerView: 3, spaceBetween: 15}
        }
    });


    var obj = $('.swiper-scrollbar');
    obj.append('<div class="swiper-scrollbar-drag_my" style="width: 191.6px; transform: translate3d(0px, 0px, 0px);"></div>')



});
$(window).scroll(function () {
    $(this).scrollTop() > 80 ? ($(".header__vector").addClass("header__animate"), $(".header__vector--two").addClass("header__animate--two"), $(".header__vector--three").addClass("header__animate--three"), $(".header__vector--fo").addClass("header__animate--fo"), $(".header__vector--five").addClass("header__animate--five")) : ($(".header__vector").removeClass("header__animate"), $(".header__vector--two").removeClass("header__animate--two"), $(".header__vector--three").removeClass("header__animate--three"), $(".header__vector--fo").removeClass("header__animate--fo"), $(".header__vector--five").removeClass("header__animate--five")), $(this).scrollTop() > 1700 ? $(".level__vector").addClass("level__animate") : $(".level__vector").removeClass("level__animate"), $(this).scrollTop() > 2200 ? $(".level__vector--two").addClass("level__animate--two") : $(".level__vector--two").removeClass("level__animate--two"), $(this).scrollTop() > 2800 ? $(".targeting__vector").addClass("targeting__animate") : $(".targeting__vector").removeClass("targeting__animate"), $(this).scrollTop() > 4700 ? ($(".flying__vector").addClass("flying__animate"), $(".flying__vector--two").addClass("flying__animate--two"), $(".flying__vector--three").addClass("flying__animate--three"), $(".flying__vector--fo").addClass("flying__animate--fo")) : ($(".flying__vector").removeClass("flying__animate"), $(".flying__vector--two").removeClass("flying__animate--two"), $(".flying__vector--three").removeClass("flying__animate--three"), $(".flying__vector--fo").removeClass("flying__animate--fo")), $(this).scrollTop() > 5800 ? ($(".contact__vector").addClass("contact__animate"), $(".contact__vector--two").addClass("contact__animate--two"), $(".contact__vector--three").addClass("contact__animate--three"), $(".contact__vector--fo").addClass("contact__animate--fo")) : ($(".contact__vector").removeClass("contact__animate"), $(".contact__vector--two").removeClass("contact__animate--two"), $(".contact__vector--three").removeClass("contact__animate--three"), $(".contact__vector--fo").removeClass("contact__animate--fo"))
});

setTimeout(function () {


    $("#about-button-1").on("click", function () {
         $('.about__line--activ').css('width', '13.5%');
        $(".about__switches").removeClass('about__switches--activ');
        $("#about-button-1").addClass('about__switches--activ');
    });
    $("#about-button-2").on("click", function () {
         $('.about__line--activ').css('width', '33.5%');
        $(".about__switches").removeClass('about__switches--activ');
        $("#about-button-2").addClass('about__switches--activ');

    });
    $("#about-button-3").on("click", function () {
         $('.about__line--activ').css('width', '56.5%');
        $(".about__switches").removeClass('about__switches--activ');
        $("#about-button-3").addClass('about__switches--activ');
    });
    $("#about-button-4").on("click", function () {
         $('.about__line--activ').css('width', '81.5%');
        $(".about__switches").removeClass('about__switches--activ');
        $("#about-button-4").addClass('about__switches--activ');
    });
    $("#about-button-5").on("click", function () {
         $('.about__line--activ').css('width', '100%');
        $(".about__switches").removeClass('about__switches--activ');
        $("#about-button-5").addClass('about__switches--activ');
    });
}, 0);
var map = document.getElementById("map");
map && ymaps.ready(function () {
    var e = new ymaps.Map("map", {center: [61.78, 34.37], zoom: 13});
    e.controls.remove("zoomControl"), e.controls.remove("rulerControl"), e.controls.remove("geolocationControl"), e.controls.remove("routeButtonControl"), e.controls.remove("trafficControl"), e.controls.remove("typeSelector"), e.controls.remove("fullscreenControl"), e.controls.remove("searchControl"), myPlacemark = new ymaps.Placemark([61.795657, 34.372047], {
        hintContent: "улица Куйбышева, 26",
        balloonContent: "улица Куйбышева, 26"
    }, {
        iconLayout: "default#image",
        iconImageHref: "img/map-marker.svg",
        iconImageSize: [30, 30]
    }), e.geoObjects.add(myPlacemark)
});