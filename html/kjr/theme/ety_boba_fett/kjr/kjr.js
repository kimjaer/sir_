$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 80) {
      $("body").addClass("hdblackmode");
    } else {
      $("body").removeClass("hdblackmode");
    }
  })
  $("#kim-gnb").on('mouseenter', function () {
    $("body").addClass("hdblackmode");
  }).on('mouseleaves').on('mouseleave', function () {
    if ($(window).scrollTop() > 80) {
      $("body").addClass("hdblackmode");
    } else {
      $("body").removeClass("hdblackmode");
    }
  })

})