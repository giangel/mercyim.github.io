$(document).ready(function () {
    $('.center').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        nextArrow: '<button class="custom-slick-next">❯</button>',
        prevArrow: '<button class="custom-slick-prev">❮</button>',
        dots: true,
        dotsClass: 'dots-container text-center',
        customPaging: function (slider, i) {
            return '<button type="button" class="dot" data-slide="' + (i + 1) + '"></button>';
        },
        responsive: [
            {
                breakpoint: 768, // Adjust this value based on what you consider "small screens"
                settings: {
                    slidesToShow: 1, // Show 1 slide at a time on screens smaller than 768px
                    slidesToScroll: 1,
                    centerMode: false, // Disable center mode for small screens if you don't need it
                }
            }
        ]
    });

    // Event delegation for dots
    $(document).on('click', '.dot', function () {
        var slideIndex = $(this).data('slide');
        $('.center').slick('slickGoTo', slideIndex - 1);
    });
});