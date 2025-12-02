var bodySidebar_1 = document.getElementById("body-sidebar-lis-o-1");

var bodySidebar_1_H = window.innerHeight - 112;
bodySidebar_1.style.height = bodySidebar_1_H + "px";

window.onresize = function () { resize(); };
function resize() {
      var bodySidebar_1_H = window.innerHeight - 112;
  bodySidebar_1.style.height = bodySidebar_1_H + "px";
}