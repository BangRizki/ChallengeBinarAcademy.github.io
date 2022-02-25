$('.owl-carousel').owlCarousel({
    loop: true,
    center: true,
    nav: true,
    navText: ["<img class='button-carousel' id='left-button' src='assets/icon/Left_button_hover.png'>",
        "<img class='button-carousel' id='right-button' src='assets/icon/Right_button_hover.png'>"],
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    responsive: {
        600: {
            items: 2
        },
    }
})