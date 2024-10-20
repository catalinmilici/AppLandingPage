// sreenshots slider

        $('.app-sreennshots').slick({
            centerMode: true,
            centerPadding: '70px',
            slidesToShow: 3,
            dots: true,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '20px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '20px',
                        slidesToShow: 1
                    }
                }
            ]
        });


//  clients slider

        $('.clients-wrapper').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 6,
            adaptiveHeight: true,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }

            ]
        });


//   add background menu

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 1) {
                $("nav").addClass("background-color");
            } else {
                $("nav").removeClass("background-color");
            }
        });

// smooth scrolling anchor
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

// message in console
//         var style = "font-size: 24px;" +
//   "background: #67b26f; /* fallback for old browsers */" +
//   "background: -webkit-linear-gradient(to right, #67b26f, #4ca2cd); /* Chrome 10-25, Safari 5.1-6 */" +
//   "background: linear-gradient(to right, #67b26f, #4ca2cd); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */" +
//   "color: white;" +
//   "text-align: center;" +
//   "padding: 10px 15px;" +
//   "width: 100%;" +
//   "border-radius: 20px;";

// var text = "%cLet's talk about projects🙏. catalin.milici@gmail.com";

// console.log(text, style);