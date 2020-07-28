$(document).ready(function () {
  $("#jimMenu a, #scrollTop").click(function () {
    let href = $(this).attr("href");
    let offset = $(href).offset().top - 50;
    $("body, html").animate({
      scrollTop: offset
    }, 500, "swing")
  })
})


$(window).scroll(() => {
  spy();
})

function spy() {
  let nowat = $(window).scrollTop();
  $("section").each(function () {
    let
      id = $(this).attr("id"),
      offset = $(this).offset().top,
      height = $(this).innerHeight();

    if (offset < nowat && nowat < offset + height) {
      $("#jimMenu a").removeClass("active");
      $(`#jimMenu a[href='#${id}']`).addClass("active");
    }
  });
}