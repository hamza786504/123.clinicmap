const close_notification_bar = document.getElementById("close_notification_bar");
close_notification_bar.addEventListener("click" , function(){
    document.querySelector(".notification_bar").classList.add("d-none");
});





$('.r_products_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.testimonial_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        770:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
