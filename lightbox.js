$(document).ready(function() {
  $(".slider img").click(function() {
    var imgSrc = $(this).attr("src");
    var lightboxContent = '<img src="' + imgSrc + '">';
    $(".lightbox").html(lightboxContent);
    $(".lightbox").addClass("show");
  });

  $(".lightbox").click(function() {
    $(".lightbox").removeClass("show");
  });
});
