$(document).ready(function () {
  var element = document.getElementById("layout");
  panzoom(element, {
    onTouch: (_) => false,
    maxZoom: 10,
    minZoom: 1,
    initialZoom: 4,
    bounds: true,
    boundsPadding: 0.3,
    zoomSpeed: 0.065 
  });

  //overlay text
  $(".project").click(function (event) {
    var text = event.target.dataset.text;
    $("#displaytext").first().html(text);
  });

  let currentX = 0,
    currentY = 0;

  $("html").on("mousedown", function (e) {
    currentX = e.clientX;
    currentY = e.clientY;
  });

  //toggle overlay

  $(".project").on("mouseup", function (e) {
    if (currentX == e.clientX && currentY == e.clientY) {
      $(".project").addClass("grayed-out");
      e.currentTarget.classList.remove("grayed-out");
      $(".overlay").toggleClass("displayNone");
      e.preventDefault();
    }
  });

  $(".overlay").on("click", function (e) {
    $(".project").removeClass("grayed-out");
    $(".overlay").toggleClass("displayNone");
    e.preventDefault();
  });
});
