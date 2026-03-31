/**
 * @description: Fetch the sidebar list for yz0012.github.io and insert it into the DOM, along with necessary scripts.
 * 获取yz0012.github.io的侧边栏列表，并将其插入到DOM中，同时加载必要的脚本。
 * @returns {void}
 * @author: Yz0012
 */
let a = false;

function fetchLis_yz0012githubio(path) {

  // Prevent multiple script insertions
  if (a) {
    fetch(path)
      .then(response => response.text())
      .then(data => {
        // Initialize the DOM parser
        const parser = new DOMParser()

        // Parse the text
        const doc = parser.parseFromString(data, "text/html")
        var element = document.getElementById('body-sidebar-lis-o-1');
        element.innerHTML = doc.getElementById("body-sidebar-lis-o-1").innerHTML;
      });
  } else {
    fetch(path)
      .then(response => response.text())
      .then(data => {
        // Initialize the DOM parser
        const parser = new DOMParser()

        // Parse the text
        const doc = parser.parseFromString(data, "text/html")
        var element = document.getElementById("body-sidebar-1-id");
        element.innerHTML = doc.getElementById("body-sidebar").innerHTML;

        w1d56a1(element);

      });
  }
}

function w1d56a1(doc) {
  var newElm = document.createElement("script");
  var newElm_1 = document.createElement("script");
  var newElm_fetch = document.createElement("script");
  var newElm_popstate = document.createElement("script");
  var newElm_switch_0 = document.createElement("script");
  var newElm_autohidescroll_0 = document.createElement("script");
  var newElm_updateWindows = document.createElement("script");

  newElm.src = "/source/component_html/sidebar_lis_0_js.js";
  newElm_1.src = "/source/component_html/sidebar_lis_1_js.js";
  newElm_fetch.src = "/source/component_html/sidebar_lis_fetch.js";
  newElm_popstate.src = "/source/component_html/sidebar_lis_popstate.js";
  newElm_switch_0.src = "/source/component_html/sidebar_lis_switch.js";
  newElm_autohidescroll_0.src = "/source/component_html/element_autohidescroll.js";
  newElm_updateWindows.src = "/source/component_html/updateWindows.js";

  newElm.defer = "";
  newElm_1.defer = "";
  newElm_fetch.defer = "";
  newElm_popstate.defer = "";
  newElm_switch_0.defer = "";
  newElm_autohidescroll_0.defer = "";
  newElm_updateWindows.defer = "";

  newElm.id = "sidebar_js_file_0";
  newElm_1.id = "sidebar_js_file_1";
  newElm_fetch.id = "sidebar_js_file_fetch";
  newElm_popstate.id = "sidebar_js_file_popstate";
  newElm_switch_0.id = "sidebar_js_file_switch_0";
  newElm_autohidescroll_0.id = "js_file_autohidescroll";
  newElm_updateWindows.id = "js_file_updateWindows";

  doc.appendChild(newElm);
  doc.appendChild(newElm_1);
  doc.appendChild(newElm_fetch);
  doc.appendChild(newElm_popstate);
  doc.appendChild(newElm_switch_0);
  doc.appendChild(newElm_autohidescroll_0);
  doc.appendChild(newElm_updateWindows);

  a = true;
}