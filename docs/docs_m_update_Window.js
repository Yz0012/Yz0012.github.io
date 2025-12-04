var bodyBreadcrumb_0 = document.getElementById("body-breadcrumb-1");
var bodyRightbar_0 = document.getElementById("body-rightsidebar_0");
var bodyViewerScrollbar_0 = document.getElementById("body-viewer-scrollbar_0");
var bodySidebar_0 = document.getElementById("body-sidebar-1-id");
var bodyHeaderIcon_0 = document.getElementById("header-m-icon_0");
var bodySidebar_1 = document.getElementById("body-sidebar-lis-o-1");

//init bodySidebar_1 in source\component_html\sidebar_lis_0_js.js

// something interesting numbers
var number_0 = window.innerWidth * 0.2;

//set body-viewer-scrollbar position and height
bodyViewerScrollbar_0.style.left = number_0 + "px";
bodyViewerScrollbar_0.style.top = "80px";

//similarly

var bodySidebar_0_H = window.innerHeight - 48;
bodySidebar_0.style.height = bodySidebar_0_H + "px";

//undate window size
window.onresize = function () { resize(false); };
function resize(booleandata_0) {

  // something interesting numbers
  var dynamic_Number_0 = window.innerWidth * 0.2;

  //set body-viewer-scrollbar position and height
  bodyViewerScrollbar_0.style.left = dynamic_Number_0 + "px";
  bodyViewerScrollbar_0.style.top = "80px";

  var bodySidebar_0_H = window.innerHeight - 48;
  bodySidebar_0.style.height = bodySidebar_0_H + "px";

  var bodySidebar_1_H = window.innerHeight - 128;
  bodySidebar_1.style.height = bodySidebar_1_H + "px";

  if (booleandata_0) {

    //set body-breadcrumb left width
    bodyBreadcrumb_0.style.left = 0;

  } else {

    //set body-breadcrumb left width
    bodyBreadcrumb_0.style.left = dynamic_Number_0 + "px";

  }
}

var switch_1 = true;
function enLarge_0(element) {
  if (switch_1) {
    bodyRightbar_0.style.display = "block";
    bodyRightbar_0.style.opacity = "1";
    bodyRightbar_0.style.animation = "enLarge_0 0.5s cubic-bezier(0, 0.6, 0, 1)"
    switch_1 = !switch_1;
  } else {
    setTimeout(() => {
      bodyRightbar_0.style.display = "none";
    }, 500);
    bodyRightbar_0.style.animation = "enSmall_0 0.5s cubic-bezier(0, 0.6, 0, 1)"
    bodyRightbar_0.style.opacity = "0";
    switch_1 = !switch_1;
  }
}

var switch_2_html = true;
window.addEventListener("resize", () => {
  if (window.innerWidth < 1000 && switch_2_html) {
    window.onresize = function () { resize(true); };
    bodyHeaderIcon_0.style.display = "block";
    bodySidebar_0.style.display = "none";
    bodyBreadcrumb_0.style.animation = "enLarge_2 0.5s cubic-bezier(0, 0.6, 0, 1)";
    bodyBreadcrumb_0.style.left = 0;
    bodyBreadcrumb_0.style.width = "100vw";
    switch_2_html = false;

    //第二个开关
    document.getElementById("header-m-icon_1").style.display = "none";
  }
  if (window.innerWidth > 1000 && !switch_2_html) {
    window.onresize = function () { resize(false); };
    var dynamic_Number_1 = window.innerWidth * 0.2;
    bodyHeaderIcon_0.style.display = "none";
    bodyBreadcrumb_0.style.animation = "enSmall_2 0.5s cubic-bezier(0, 0.6, 0, 1)";
    bodyBreadcrumb_0.style.left = dynamic_Number_1 + "px";
    bodyBreadcrumb_0.style.width = "80vw";
    bodySidebar_0.style.display = "block";
    switch_2_html = true;

    //还原
    switch_sidebar_lis.style.display = "block";
    switch_sidebar_lis.style.zIndex = "";
    switch_sidebar_lis.style.width = "20vw";

    //第二个开关
    document.getElementById("header-m-icon_1").style.display = "block";
  }
})