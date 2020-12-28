;(function($){
    $(function (){
    $(".news__slider").slick({
        autoplay: false,
        dots: true,
        infinite: true,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false
    });
    $(".button__prev").click(function() {
        $(".news__slider").slick("slickPrev");
    });
    $(".button__next").click(function() {
        $(".news__slider").slick("slickNext");
    });

    $(".screenNav__dots").click(function () {
        $(this)
            .addClass("active")
            .removeClass("disable");
        $(this)
            .siblings()
            .removeClass("active")
            .addClass("disable");
        $(".tab")
            .css("display", "none")
            .eq($(this).index())
            .css("display", "block");
    });

    });

})(jQuery);
const beetroot = {lat: 48.7376207, lng: 37.5807421 };
const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
const iw2 = document.getElementById('iw2').outerHTML;
console.log(iw2);
function initMap() {
    const map = new google.maps.Map
    (document.getElementById("map"),
        {
            center: beetroot,
            zoom: 18
        }
    );
    const m2 = new google.maps.Marker({
        position: {lat: 48.7376, lng: 37.5816},
        map,
        title: "Hello Beetroot!",
        animation: google.maps.Animation.BOUNCE //DROP,
    });
    const infoWindow = new google.maps.InfoWindow({
        content: iw2,
    });
    m2.addListener("click", () => {
        infoWindow.open(map, m2);
    });
}