var iframe_0 = document.getElementById("body-viewer-iframe-1");
var bodyViewer_0 = document.getElementById("body-viewer-1");
var bodyBreadcrumb_0 = document.getElementById("body-breadcrumb-1");

//initialize iframe window
var iframe_0_h = window.innerHeight - 72;
iframe_0.style.height = iframe_0_h + "px";

//set body-viewer left width
bodyViewer_0.style.left = window.innerWidth * 0.2 + "px";

//set body-breadcrumb left width
bodyBreadcrumb_0.style.left = window.innerWidth * 0.2 + "px";

//similarly
var bodySidebar_0 = document.getElementById("body-sidebar-1-id");

var bodySidebar_0_H = window.innerHeight - 48;
bodySidebar_0.style.height = bodySidebar_0_H + "px";

var bodySidebar_1 = document.getElementById("body-sidebar-lis-o-1");

var bodySidebar_1_H = window.innerHeight - 112;
bodySidebar_1.style.height = bodySidebar_1_H + "px";

//undate window size
window.onresize = function () {
  var iframe_0_h = window.innerHeight - 72;
  iframe_0.style.height = iframe_0_h + "px";

  bodyViewer_0.style.left = window.innerWidth * 0.2 + "px";

  bodyBreadcrumb_0.style.left = window.innerWidth * 0.2 + "px";

  var bodySidebar_0_H = window.innerHeight - 48;
  bodySidebar_0.style.height = bodySidebar_0_H + "px";

  var bodySidebar_1_H = window.innerHeight - 112;
bodySidebar_1.style.height = bodySidebar_1_H + "px";
};
