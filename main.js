// $(document).ready(function () {

//     $("#slider1").sliderResponsive({
//         // Using default everything
//         // slidePause: 5000,
//         // fadeSpeed: 800,
//         // autoPlay: "on",
//         // showArrows: "off", 
//         // hideDots: "off", 
//         // hoverZoom: "on", 
//         // titleBarTop: "off"
//     });

//     $("#slider2").sliderResponsive({
//         fadeSpeed: 500,
//         autoPlay: "off",
//         showArrows: "on",
//         hideDots: "on"
//     });

//     $("#slider3").sliderResponsive({
//         hoverZoom: "on",
//         hideDots: "on",
//          slidePause: 4000,
//          autoPlay: "on",
//     });

// }); 

// JavaScript for Toggle Menu 

    var navLinks = document.getElementById("navLinks");

    function showMenu() {
        navLinks.style.right = "0";
    }

    function hideMenu() {
        navLinks.style.right = "-200px";
    }
