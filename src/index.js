import $ from "jquery";
import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import "./css/main.scss";

// ----- Libs -----

// ----- ekko -----
import "./js/libs/ekko-lightbox.min.js";

// ----- slick -----
import "./js/libs/slick.min.js";

// ----- -----

$("#year").text(new Date().getFullYear());

// Configure slider
$("#showcase .carousel").carousel({
  interval: 6000,
  pause: "hover",
});

$(function () {
  // Auto play modal video
  $(".video").click(function () {
    var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto =
        videoSRC +
        "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + " iframe").attr("src", videoSRCauto);
    $(theModal + " button.close").click(function () {
      $(theModal + " iframe").attr("src", videoSRC);
    });
  });
});

$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

$(".slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});
