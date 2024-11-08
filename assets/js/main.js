$(document).ready(function(){
    $('.banner_section').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false, 
        autoplaySpeed: 2000, 
        arrows: true, 
        prevArrow: '<button class="prev-arrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-chevron-right"></i></button>', 
        responsive: [
            {
                breakpoint: 481, 
                settings: {
                    arrows:false
                }
            }
        ]
    });
    $('.great_service_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false, 
        autoplaySpeed: 2000, 
        arrows:false,
        responsive: [
            {
                breakpoint: 991, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.team_slider_section').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false, 
        autoplaySpeed: 2000, 
        arrows:false,
        responsive: [
            {
                breakpoint: 991, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    
    });
    $('.recent_news_list_blog').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false, 
        autoplaySpeed: 2000, 
        arrows:false,
        responsive: [
            {
                breakpoint: 991, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

});


