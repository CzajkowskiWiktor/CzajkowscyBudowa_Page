document.addEventListener('DOMContentLoaded', function () {
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
});