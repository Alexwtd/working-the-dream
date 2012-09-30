( function($) {

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
    
  })
})(jQuery)