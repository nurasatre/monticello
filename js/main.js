$(document).ready(function() {
    $('.flex_block-five').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        infinite: true,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false
    });
});
$(".js_prev").click(function() {
    $(".flex_block-five").slick("slickPrev");
});
$(".js_next").click(function() {
    $(".flex_block-five").slick("slickNext");
});

$("a.menu-link").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
    }, 800);
    return false;
});