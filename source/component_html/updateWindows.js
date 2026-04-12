var bodyBreadcrumb_0 = document.getElementById("body-breadcrumb-1");
var bodySidebar_0 = document.getElementById("body-sidebar-1-id");
var bodySidebar_1 = document.getElementById("body-sidebar-lis-o-1");

//init bodySidebar_1 in source\component_html\sidebar_lis_0_js.js

// something interesting numbers
var number_0 = window.innerWidth * 0.2;

//similarly

var bodySidebar_0_H = window.innerHeight - 48;
bodySidebar_0.style.height = bodySidebar_0_H + "px";

//undate window size
window.onresize = function () { resize(false); };
function resize(booleandata_0) {

  // something interesting numbers
  var dynamic_Number_0 = window.innerWidth * 0.2;

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

var switch_2_html = true;
window.addEventListener("resize", () => {
  if (window.innerWidth < 1000 && switch_2_html) {
    window.onresize = function () { resize(true); };
    bodySidebar_0.style.display = "none";
    bodyBreadcrumb_0.style.animation = "enLarge_2 0.5s cubic-bezier(0, 0.6, 0, 1)";
    bodyBreadcrumb_0.style.left = 0;
    bodyBreadcrumb_0.style.width = "100vw";
    switch_2_html = false;

    //第二个开关
    // document.getElementById("header-m-icon_1").style.display = "none";
  }
  if (window.innerWidth > 1000 && !switch_2_html) {
    window.onresize = function () { resize(false); };
    var dynamic_Number_1 = window.innerWidth * 0.2;
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
    // document.getElementById("header-m-icon_1").style.display = "block";
  }
})