// js
  


// jq
$(document).ready(function(){





// slick slider
 $('.slick').slick({
 	centerMode:true,
 	centerPadding: '60px',
    slidesToShow: 3,
      responsive: [
    {
      breakpoint: 991,
      settings: {
         arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        slidesToScroll: 3,
        
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
         arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
    
  ]
   
 });



 

 

});