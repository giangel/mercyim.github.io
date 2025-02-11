$(document).ready(function(){
    $('.center').slick({
        infinite: true,
        slidesToShow: 2, // Changed from 3 to 2
        slidesToScroll: 1, // Changed from 3 to 1
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: '❯',
        prevArrow: '❮',
        dots: true,
        dotsClass: 'dots-container text-center',
        customPaging: function (slider, i) {
            return '';
        }
    });

    $(document).on('click', '.dot', function () {
        var slideIndex = $(this).data('slide');
        $('.center').slick('slickGoTo', slideIndex - 1);
    });
});