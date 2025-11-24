var iframe_0 = document.getElementById("body-viewer-iframe-1");
var bodyViewer_0 = document.getElementById("body-viewer-1");
var bodyBreadcrumb_0 = document.getElementById("body-breadcrumb-1");
// var bodyViewerSwitch_0 = document.getElementById("body-viewer-switch_0");
var bodyRightbar_0 = document.getElementById("body-rightsidebar_0");
var bodyViewerScrollbar_0 = document.getElementById("body-viewer-scrollbar_0");
var bodySidebar_0 = document.getElementById("body-sidebar-1-id");
var bodySidebar_1 = document.getElementById("body-sidebar-lis-o-1");

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
// bodyViewerSwitch_0.style.left =
//   bodyViewer_0.offsetWidth * 0.95 + number_0 - 16 + "px";
// bodyViewerSwitch_0.style.top = bodyViewer_0.offsetHeight * 0.02 + 72 + "px";

// set body-rightsidebar_0 position and witdh and hight
bodyRightbar_0.style.right = 20 + "px";
bodyRightbar_0.style.top = "72px";
bodyRightbar_0.style.width = window.innerWidth * 0.15 + "px";
// bodyRightbar_0.style.height = window.innerHeight - 72 + "px";

//similarly

var bodySidebar_0_H = window.innerHeight - 48;
bodySidebar_0.style.height = bodySidebar_0_H + "px";


var bodySidebar_1_H = window.innerHeight - 112;
bodySidebar_1.style.height = bodySidebar_1_H + "px";

//undate window size
window.onresize = function () { resize(false); };
function resize(booleandata_0) {
  var iframe_0_h = window.innerHeight - 72;
  iframe_0.style.height = iframe_0_h + "px";

  // something interesting numbers
  var dynamic_Number_0 = window.innerWidth * 0.2;

  //set body-viewer-scrollbar position and height
  bodyViewerScrollbar_0.style.left = dynamic_Number_0 + "px";
  bodyViewerScrollbar_0.style.top = "72px";

  // set body-rightsidebar_0 position and witdh and hight
  bodyRightbar_0.style.right = 20 + "px";
  bodyRightbar_0.style.top = "72px";
  bodyRightbar_0.style.width = window.innerWidth * 0.15 + "px";
  // bodyRightbar_0.style.height = window.innerHeight - 72 + "px";

  var bodySidebar_0_H = window.innerHeight - 48;
  bodySidebar_0.style.height = bodySidebar_0_H + "px";

  var bodySidebar_1_H = window.innerHeight - 112;
  bodySidebar_1.style.height = bodySidebar_1_H + "px";

  if (booleandata_0) {

    //set body-breadcrumb left width
    bodyBreadcrumb_0.style.left = 0;

    //set body-viewer left width
    bodyViewer_0.style.left = 0;

    // set body-viewer-switch position
    // bodyViewerSwitch_0.style.left =
    //   bodyViewer_0.offsetWidth * 0.95 + dynamic_Number_0 - 16 + "px";
    // bodyViewerSwitch_0.style.top = bodyViewer_0.offsetHeight * 0.02 + 72 + "px";

  } else {

    //set body-breadcrumb left width
    bodyBreadcrumb_0.style.left = dynamic_Number_0 + "px";

    //set body-viewer left width
    bodyViewer_0.style.left = dynamic_Number_0 + "px";

    // set body-viewer-switch position
    // bodyViewerSwitch_0.style.left =
    //   bodyViewer_0.offsetWidth * 0.95 + dynamic_Number_0 - 16 + "px";
    // bodyViewerSwitch_0.style.top = bodyViewer_0.offsetHeight * 0.02 + 72 + "px";

  }
}

var switch_0 = true;
function windowZoom() {
  //set body-viewer left width
  if (switch_0) {
    window.onresize = function () { resize(true); };
    bodySidebar_0.style.display = "none";
    bodyBreadcrumb_0.style.animation = "enLarge 0.5s cubic-bezier(0, 0.6, 0, 1)";
    bodyBreadcrumb_0.style.left = 0;
    bodyViewer_0.style.left = 0;
    iframe_0.style.animation = "enLarge 0.5s cubic-bezier(0, 0.6, 0, 1)";
    iframe_0.style.width = "100vw";
    switch_0 = !switch_0;
  } else {
    window.onresize = function () { resize(false); };
    var dynamic_Number_1 = window.innerWidth * 0.2;
    bodyBreadcrumb_0.style.animation = "enSmall 0.5s cubic-bezier(0, 0.6, 0, 1)";
    bodyBreadcrumb_0.style.left = dynamic_Number_1 + "px";
    bodyViewer_0.style.left = dynamic_Number_1 + "px";
    bodySidebar_0.style.display = "block";
    iframe_0.style.animation = "enSmall 0.5s cubic-bezier(0, 0.6, 0, 1)";
    iframe_0.style.width = "60vw";
    switch_0 = !switch_0;
  }
}

var switch_1 = true;
function enLarge_0(element) {
  let bodyRightbar_0_Con = document.getElementById("body-rightbar-con_0");
  if (switch_1 && bodyRightbar_0_Con != null) {
    bodyRightbar_0.style.height = bodyRightbar_0_Con.getBoundingClientRect().height + "px";
    element.style.color = "#deac47";
    switch_1 = !switch_1;
  } else {
    bodyRightbar_0.style.height = "24px";
    element.style.color = "#b7ed88";
    switch_1 = !switch_1;
  }
}

//init window according window witdh
if (window.innerWidth < 1000) {
  windowZoom();
}

var switch_2 = true;
window.addEventListener("resize", () => {
  if (window.innerWidth < 1000 && switch_2) {
    window.onresize = function () { resize(true); };
    bodySidebar_0.style.display = "none";
    bodyBreadcrumb_0.style.animation = "enLarge 0.5s cubic-bezier(0, 0.6, 0, 1)";
    bodyBreadcrumb_0.style.left = 0;
    bodyViewer_0.style.left = 0;
    iframe_0.style.animation = "enLarge 0.5s cubic-bezier(0, 0.6, 0, 1)";
    iframe_0.style.width = "100vw";
    switch_2 = false;
  }
  if (window.innerWidth > 1000 && !switch_2) {
    window.onresize = function () { resize(false); };
    var dynamic_Number_1 = window.innerWidth * 0.2;
    bodyBreadcrumb_0.style.animation = "enSmall 0.5s cubic-bezier(0, 0.6, 0, 1)";
    bodyBreadcrumb_0.style.left = dynamic_Number_1 + "px";
    bodyViewer_0.style.left = dynamic_Number_1 + "px";
    bodySidebar_0.style.display = "block";
    iframe_0.style.animation = "enSmall 0.5s cubic-bezier(0, 0.6, 0, 1)";
    iframe_0.style.width = "60vw";
    switch_2 = true;
  }
}) 