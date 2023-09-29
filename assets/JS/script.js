$(function(){

// back to top

    $('.back_to_top').click(function(){
        $('html, body').animate({
            scrollTop: 0,
        }, 800)
    });

    $(window)
// preloader

    $(window).on('load', function(){
        $('.preloader_part').delay(500).fadeOut(500);
    })

// navbar bg on scroll

    $(window).scroll(function(){
        var scrollingPoint = $(this).scrollTop();
        if(scrollingPoint > 500) {
            $('.navbar').addClass('bg-on-scroll');
            $('.back_to_top').fadeIn(500);
            
        } else {
            $('.back_to_top').fadeOut(500);
            $('.navbar').removeClass('bg-on-scroll');
            
        }
    })
})


// lightbox


    lightbox.option({
      'resizeDuration': 800,
      'wrapAround': true
    })


// Cliant counter

$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 8000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });
  
  });
  