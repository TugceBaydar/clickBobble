var posX;
var posY;

$("section").mousemove(function(e) {
  console.log(e.pageX, e.pageY);
  posX = e.pageX;
  posY = e.pageY;
})

$("section").click(function() {
  $("section").append(
    "<div class='circle' style='left: " + posX + "px; top: " + posY + "px; '></div>"
  )
  setTimeout(function() {
    $("section .circle").remove();
  },1000)
})
