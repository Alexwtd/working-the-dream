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
      $("#main").addClass("fadein");
      $(window).resize(function() {
        $(".grid").alexGrids();
      });
    });

    $('.main-height').height($('#main').innerHeight() - 40);
    $(window).resize(function() {
      $('.main-height').height($('#main').innerHeight() - 40);
    });

    $('.tooltip-container').tooltip();

    $('.vote-button').click(function(e) {
      e.preventDefault();
      var entrepreneur = $(this).attr('href');

      console.log("tha fuck");

      FB.getLoginStatus(function(response) {
        console.log(response);
        if (response.status === 'connected') {
          FB.api(
            '/me/workingthedream:vote',
            'post',
            { entrepreneur: entrepreneur },
            function(response) {
               if (!response || response.error) {
                  console.log(response.error);
                  alert('Error occured');
               } else {
                  alert('vote was successful! Action ID: ' + response.id);
               }
            }
          );
          console.log("connected");
        } else if (response.status === 'not_authorized') {
          console.log("not not_authorized");
        } else {
          console.log("login")  ;
        }
      });
      
    });

  })
})(jQuery)