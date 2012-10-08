(function($) {
  'use strict';

  $(function() {
    var settings = {
      reverseDirectionX : false,
      enableHorizontal: true,
      enableVertical: false,
      loopItX: false,
      bgRepeat: true,
      staticSpeedX: 0.1
    }
    $("div.background-image").scrollingParallax(settings);

    $(document).imagesLoaded( function(){
      $(".grid").alexGrids();
      $("#preloader").addClass("fade");
      $(window).resize(function() {
        $(".grid").alexGrids();
      });
    });



  })
})(jQuery)