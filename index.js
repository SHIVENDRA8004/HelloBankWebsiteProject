var imagearr = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
var i = 0;
function slide() {
  document.getElementById("sldimg").setAttribute("src", imagearr[i]);
  function img1() {
    i = 0;
  }
  function img2() {
    i = 1;
  }
  function img3() {
    i = 2;
  }
  function img4() {
    i = 3;
  }
  if (i < imagearr.length - 1) {
    i = i + 1;
  } else {
    i = 0;
  }
}
setInterval(slide, 2000);
