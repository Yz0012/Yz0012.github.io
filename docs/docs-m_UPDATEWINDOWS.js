var iframe_0 = document.getElementById("body-viewer-iframe-1");
var bodyViewer_0 = document.getElementById("body-viewer-1");
var bodyBreadcrumb_0 = document.getElementById("body-breadcrumb-1");
var bodyViewerSwitch_0 = document.getElementById("body-viewer-switch_0");
var bodyRightbar_0 = document.getElementById("body-rightsidebar_0");
var bodyViewerScrollbar_0 = document.getElementById("body-viewer-scrollbar_0");

//initialize iframe window
var iframe_0_h = window.innerHeight - 72;
iframe_0.style.height = iframe_0_h + "px";

// something interesting numbers
var number_0 = window.innerWidth * 0.2;

//set body-viewer-scrollbar position and height
bodyViewerScrollbar_0.style.left = number_0 + "px";
bodyViewerScrollbar_0.style.top = "72px";

//set body-viewer left width
bodyViewer_0.style.left = number_0 + "px";

//set body-breadcrumb left width
bodyBreadcrumb_0.style.left = number_0 + "px";

// set body-viewer-switch position
bodyViewerSwitch_0.style.left = bodyViewer_0.offsetWidth * 0.95 + number_0 + "px";
bodyViewerSwitch_0.style.top = bodyViewer_0.offsetHeight * 0.02 + 72 + "px";

// set body-rightsidebar_0 position and witdh and hight
bodyRightbar_0.style.left = window.innerWidth * 0.8 + "px";
bodyRightbar_0.style.top = "72px";
bodyRightbar_0.style.width = window.innerWidth * 0.2 + "px";
bodyRightbar_0.style.height = window.innerHeight - 72 + "px";

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

  // something interesting numbers
  var dynamic_Number_0 = window.innerWidth * 0.2;

  //set body-viewer-scrollbar position and height
  bodyViewerScrollbar_0.style.left = dynamic_Number_0 + "px";
  bodyViewerScrollbar_0.style.top = "72px";

  //set body-viewer left width
  bodyViewer_0.style.left = dynamic_Number_0 + "px";

  //set body-breadcrumb left width
  bodyBreadcrumb_0.style.left = dynamic_Number_0 + "px";

  // set body-viewer-switch position
  bodyViewerSwitch_0.style.left = bodyViewer_0.offsetWidth * 0.95 + dynamic_Number_0 + "px";
  bodyViewerSwitch_0.style.top = bodyViewer_0.offsetHeight * 0.02 + 72 + "px";

  // set body-rightsidebar_0 position and witdh and hight
  bodyRightbar_0.style.left = window.innerWidth * 0.8 + "px";
  bodyRightbar_0.style.top = "72px";
  bodyRightbar_0.style.width = window.innerWidth * 0.2 + "px";
  bodyRightbar_0.style.height = window.innerHeight - 72 + "px";


  var bodySidebar_0_H = window.innerHeight - 48;
  bodySidebar_0.style.height = bodySidebar_0_H + "px";

  var bodySidebar_1_H = window.innerHeight - 112;
  bodySidebar_1.style.height = bodySidebar_1_H + "px";
};
