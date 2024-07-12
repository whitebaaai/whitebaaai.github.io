(function () {
  "use strict";
  
  var $projects = $(".projects");

  $projects.imagesLoaded(function() {
    $projects.isotope({
      itemSelector: ".item",
      layoutMode: "fitRows"
    });
  });

  $("ul.filters > li").on("click", function (e) {
    e.preventDefault();

    var filter = $(this).attr("data-filter");
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $projects.isotope({ filter: '*' });
    } else {
      $("ul.filters > li").removeClass("active");
      $(this).addClass("active");
      $projects.isotope({ filter: filter });
    }
  });

  $(".project-head")
    .mouseenter(function () {
      $(this)
        .find(".project-overlay")
        .css({
          top: "-100%"
        });
      $(this)
        .find(".project-hover")
        .css({
          top: "0"
        });
    })
    .mouseleave(function () {
      $(this)
        .find(".project-overlay")
        .css({
          top: "0"
        });
      $(this)
        .find(".project-hover")
        .css({
          top: "100%"
        });
    });
})(jQuery);

