$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:2,
        loop:true,
        center:true,
        
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:1
            }
        }
    })
  });


