$(document).ready(function () {
    $('#myCarousel').carousel({
        interval: null
    })
    $('.fdi-Carousel .item').each(function () {
        var next = $(this).next();
        for(i = 0; i < next.siblings().length; i++) {
          if (!next.length) {
              next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
          if (next.siblings().length > 0) {
              next.next().children(':first-child').clone().appendTo($(this));
              next = next.next();
          }
        }
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    });
});
wow = new WOW({
  animateClass: 'animated',
  offset:       100,
  callback:     function(box) {
    console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
  }
});
wow.init();