document.addEventListener('DOMContentLoaded', function () {
    //add shadow do navigation menu
    const nav = document.querySelector('.navbar');
    function addShadow() {
        if (window.scrollY > 400) {
            nav.classList.add('shadow-bg');
        } else {
            nav.classList.remove('shadow-bg');
        };
    };
    window.addEventListener('scroll', addShadow);
    // fixing the problem with menu (with jquery)
    $(document).ready(function () {
        $(document).click(function (event) {
            var clickover = $(event.target);
            var _opened = $(".navbar-collapse").hasClass("show");
            if (_opened === true && !clickover.hasClass("navbar-toggler")) {
                $(".navbar-toggler").click();
            }
        });
    });
    //slickJS
    $(document).ready(function(){
        $('.team-carousel').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1580,
                    settings: {
                        slidesToShow: 4
                    }
                }
            ]
        });
      });
});