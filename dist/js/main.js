/*! project-name v0.0.1 | (c) 2020 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
AOS.init({
  duration: 800,
  easing: "slide"
});

(function($) {
  var fullHeight = function() {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize((function() {
      $(".js-fullheight").css("height", $(window).height());
    }));
  };
  fullHeight();

  // loader
  var loader = function() {
    setTimeout((function() {
      if ($("#ftco-loader").length > 0) {
        $("#ftco-loader").removeClass("show");
      }
    }), 1);
  };
  loader();

  // Scrollax

  var contentWayPoint = function() {
    var i = 0;
    $(".ftco-animate").waypoint(
      (function(direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout((function() {
            $("body .ftco-animate.item-animate").each((function(k) {
              var el = $(this);
              setTimeout(
                (function() {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn ftco-animated");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft ftco-animated");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight ftco-animated");
                  } else {
                    el.addClass("fadeInUp ftco-animated");
                  }
                  el.removeClass("item-animate");
                }),
                k * 50,
                "easeInOutExpo"
              );
            }));
          }), 100);
        }
      }),
      { offset: "95%" }
    );
  };
  contentWayPoint();
})(jQuery);
