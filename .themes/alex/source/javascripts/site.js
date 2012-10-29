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
      var button = $(this);
      var original = button.html();


      function vote() {FB.api(
        '/me/workingthedream:vote',
        'post',
        { entrepreneur: entrepreneur },
        function(response) {
           if (!response || response.error) {
              button.html("U heeft al gestemd op deze ondernemer.");
              button.addClass("success")
           } else {
              button.html("Uw stem is verwerkt.");
              button.addClass("success")
           }
        });
      };

      button.removeClass("error success");

      button.html("Uw stem wordt verwerkt..");
      FB.login(function(response) {
          if (response.authResponse) {
              vote();
          } else {
              button.html("U moet rechten verlenen.");
              button.addClass("error")
          }
      }, {scope: 'publish_actions'});
    });

  })
})(jQuery)