//initialize
//append script

var newElm_imagehoverinfo_0 = document.createElement("script");
var newElm_panmode_0 = document.createElement("script");
var newElm_autoanchorlink_0 = document.createElement("script");

newElm_panmode_0.src = "/source/component_html/element_panmode.js";
newElm_imagehoverinfo_0.src = "/source/component_html/image_hover_info.js"
newElm_autoanchorlink_0.src = '/source/component_html/element_autoanchorlink.js'

newElm_panmode_0.defer = "";
newElm_imagehoverinfo_0.defer = "";
newElm_autoanchorlink_0.defer = '';

newElm_panmode_0.id = "js_file_panmode";
newElm_imagehoverinfo_0.id = "js_file_imagehoverinfo";
newElm_autoanchorlink_0.id = 'js_file_autoanchorlink';

document.body.appendChild(newElm_panmode_0);
document.body.appendChild(newElm_imagehoverinfo_0);
document.body.appendChild(newElm_autoanchorlink_0);

fetch("/source/component_html/sidebar_lis_0.html")
  .then(response => response.text())
  .then(data => {
    // Initialize the DOM parser
    const parser = new DOMParser()

    // Parse the text
    const doc = parser.parseFromString(data, "text/html")
    var element = document.getElementById("body-sidebar-1-id");
    element.innerHTML = doc.getElementById("body-sidebar").innerHTML;
    var newElm = document.createElement("script");
    var newElm_1 = document.createElement("script");
    var newElm_fetch = document.createElement("script");
    var newElm_popstate = document.createElement("script");
    var newElm_switch_0 = document.createElement("script");
    var newElm_autohidescroll_0 = document.createElement("script");

    newElm.src = "/source/component_html/sidebar_lis_0_js.js";
    newElm_1.src = "/source/component_html/sidebar_lis_1_js.js";
    newElm_fetch.src = "/source/component_html/sidebar_lis_fetch.js";
    newElm_popstate.src = "/source/component_html/sidebar_lis_popstate.js";
    newElm_switch_0.src = "/source/component_html/sidebar_lis_switch.js";
    newElm_autohidescroll_0.src = "/source/component_html/element_autohidescroll.js";

    newElm.defer = "";
    newElm_1.defer = "";
    newElm_fetch.defer = "";
    newElm_popstate.defer = "";
    newElm_switch_0.defer = "";
    newElm_autohidescroll_0.defer = "";

    newElm.id = "sidebar_js_file_0";
    newElm_1.id = "sidebar_js_file_1";
    newElm_fetch.id = "sidebar_js_file_fetch";
    newElm_popstate.id = "sidebar_js_file_popstate";
    newElm_switch_0.id = "sidebar_js_file_switch_0";
    newElm_autohidescroll_0.id = "js_file_autohidescroll";

    element.appendChild(newElm);
    element.appendChild(newElm_1);
    element.appendChild(newElm_fetch);
    element.appendChild(newElm_popstate);
    element.appendChild(newElm_switch_0);
    element.appendChild(newElm_autohidescroll_0);

  });

fetch("/source/component_html/header_0.html")
  .then(response => response.text())
  .then(data => {
    // Initialize the DOM parser
    const parser = new DOMParser()

    // Parse the text
    const doc = parser.parseFromString(data, "text/html")
    var element = document.getElementsByClassName('header')[0];
    element.innerHTML = doc.getElementById("container").innerHTML;
  });

fetch("/source/component_html/body_sidebar_submenu.html")
  .then(response => response.text())
  .then(data => {
    // Initialize the DOM parser
    const parser = new DOMParser()

    // Parse the text
    const doc = parser.parseFromString(data, "text/html")
    var element = document.getElementById("body-sidebar-submenu-1");
    element.innerHTML = doc.body.innerHTML;
  });

//载入script
onload = (event) => {
  if (document.getElementById("docs_m_updateWindow_0") != null) {
    document.getElementById("docs_m_updateWindow_0").remove();
  }
  let script_re = document.createElement("script");
  script_re.id = "docs_m_updateWindow_0";
  script_re.src = "/docs/docs_m_update_Window.js";
  document.body.appendChild(script_re);

  init_imageinfohover(false);
  //生成本文内容
  createtitle();

  init_autoanchorlink({
    container: '#wrap_0',
    selector: 'h1, h2, h3, h4, h5, h6',
    icon: '¶',
    scrollOffset: 100
  });

}

function removeocsmupdateiframeWindow() {
  //每次点击后都需要重新载入docs_m_updateWindow
  if (document.getElementById("docs_m_updateWindow_0") != null) {
    document.getElementById("docs_m_updateWindow_0").remove();
  }
  let script_re = document.createElement("script");
  script_re.id = "docs_m_updateWindow_0";
  script_re.src = "/docs/docs_m_update_Window.js";
  document.body.appendChild(script_re);
}

var state_obj = { page: window.location.href, title: document.head.getElementsByTagName("title")[0].innerText };
window.history.replaceState(state_obj, "0", window.location.href)

var breadcrumb = document.getElementById("body-breadcrumb-1");
var lis = document.getElementsByClassName("body-sidebar-lis");
var bodySidebarCon = document.getElementsByClassName("body-sidebar-contents");
var bodyViewerScrollbar_1 = document.getElementById("body-viewer-scrollbar_0");

addAnimationend("body-sidebar-lis", "endAnima(event)");
addAnimationend("body-sidebar-contents", "endAnima(event)");

//add "animationend" event to the selector
function addAnimationend(target, method) {
  var getAnimaElementObject = document.getElementsByClassName(target);
  for (var i = 0; i < getAnimaElementObject.length; i++) {
    if (
      Number.parseInt(
        getAnimaElementObject[i].id.split(" ")[1].replace(/\D/g, "")
      ) == 0
    ) {
      getAnimaElementObject[i].setAttribute("onanimationend", method);
    }
  }
}

//run when anima ended;
function endAnima(event) {
  if (event.animationName == "fadeOut") return;
  event.target.style.display = "none";
}

// for (i = 0; i < lis.length; i++) {
//   document.getElementById(lis[i].id).style.display = "none";
// }

//when styleSheets.length == 0,styleSheets[-1] doesn't exist
if (document.styleSheets.length == 0) {
  createAnima(0);
} else {
  createAnima(1);
}

function createAnima(num) {
  document.styleSheets[document.styleSheets.length - num].insertRule(
    `
  @keyframes fadeIn {
  0% { margin-top: 4px; opacity: 1;}
  100% { margin-top: -16px; opacity: 0; }
  }`
  );

  document.styleSheets[document.styleSheets.length - num].insertRule(
    `@keyframes fadeOut {
  0% { margin-top: -8px; opacity: 0;}
  100% { margin-top: 4px; opacity: 1; }
  }`
  );

  document.styleSheets[document.styleSheets.length - num].insertRule(
    `@keyframes enLarge {
  0% { width:60vw; left:20vw}
  100% { width:100vw; left:0vw}
  }`
  );

  document.styleSheets[document.styleSheets.length - num].insertRule(
    `@keyframes enSmall {
  0% { width:100vw; left:0vw}
  100% { width:60vw; left:20vw}
  }`
  );

  document.styleSheets[document.styleSheets.length - num].insertRule(
    `@keyframes enLarge_0 {
    0% {opacity:0}
  100% { opacity:100}
  }`
  );

  document.styleSheets[document.styleSheets.length - num].insertRule(
    `@keyframes enSmall_0 {
    0% {opacity:100}
  100% {opacity:0}
  }`
  );

  document.styleSheets[document.styleSheets.length - num].insertRule(
    `@keyframes enLarge_2 {
  0% { width:80vw; left:20vw}
  100% { width:100vw; left:0vw}
  }`
  );

  document.styleSheets[document.styleSheets.length - num].insertRule(
    `@keyframes enSmall_2 {
  0% { width:100vw; left:0vw}
  100% { width:80vw; left:20vw}
  }`
  );

  document.styleSheets[document.styleSheets.length - num].insertRule(
    `@keyframes hint_0 {
  0% { background-color: #0091ff}
  100% { background-color: #0091ff00}
  }`
  );

  document.styleSheets[document.styleSheets.length - num].insertRule(
    `@keyframes enLarge_3 {
  0% { width:20vw}
  100% { width:100vw}
  }`
  );

  document.styleSheets[document.styleSheets.length - num].insertRule(
    `@keyframes enSmall_3 {
  0% { width:100vw}
  100% { width:20vw}
  }`
  );
}

var booleandata_2 = null;

//a function to changed a doc element which your clicked
var srcPathS = "/docs/";
var srcPath_0 = undefined;
var srcPath = undefined;
function changedDocElement(element) {
  getParentName(element.parentElement, element.innerText);
  function getParentName(eleNode, path) {
    if (Number.parseInt(eleNode.id.split(" ")[1].replace(/\D/g, "")) !== 0) {
      //recursion get file's src
      getParentName(
        eleNode.parentElement,
        eleNode.id.split(" ")[3] + "/" + path
      );
      return;
    }
    //create src path
    srcPath_0 = eleNode.id.split(" ")[3] + "/" + path;
    srcPath =
      "/" +
      srcPath_0.replace(
        //注意
        /[\u{1F600}-\u{1F64F}|\u{1F300}-\u{1F5FF}|\u{1F680}-\u{1F6FF}|\u{1F700}-\u{1F77F}|\u{1F780}-\u{1F7FF}|\u{1F800}-\u{1F8FF}|\u{1F900}-\u{1F9FF}|\u{1FA00}-\u{1FA6F}|\u{1FA70}-\u{1FAFF}|\u{2600}-\u{26FF}|\u{2700}-\u{27BF}]/gu,
        ""
      );
  }
  //html will adopt a new function to express
  if (element.getAttribute("fileformat") == "language-html") {
    document.getElementById("body-viewer-1").style.display = "none";
    document.getElementById("body-viewer-2").style.display = "block";
    breadcrumb.innerText = srcPath_0.replaceAll("/", " > ");
  } else {
    //scrPathS的值在docs\docs_m_update_iframe_Window.js有变
    if (srcPathS != srcPath) {
      if (document.getElementById("body-viewer-iframe-1") != null) {
        document.getElementById("body-viewer-iframe-1").remove();
        let iframe1 = document.createElement("iframe");
        iframe1.id = "body-viewer-iframe-1";
        iframe1.title = "iframe-1";
        iframe1.setAttribute("class", "body-viewer-iframe");
        document.getElementById("body-viewer-1").appendChild(iframe1);
        iframe1.src = srcPath;
        breadcrumb.innerText = srcPath_0.replaceAll("/", " > "); //用svg
        srcPathS = srcPath;
        addCssTOIframeByClick(
          0,
          iframe1.contentWindow.document,
          iframe1.contentWindow.document,
          false
        );
        //每次点击后都需要重新载入docs_m_updateWindow
        if (document.getElementById("docs_m_updateWindow_0") != null) {
          document.getElementById("docs_m_updateWindow_0").remove();
        }
        let script_re = document.createElement("script");
        script_re.id = "docs_m_updateWindow_0";
        script_re.src = "/docs/docs_m_update_iframe_Window.js";
        document.body.appendChild(script_re);
        document.getElementById("body-viewer-2").style.display = "none";
        document.getElementById("body-viewer-1").style.display = "block";
      } else {
        let iframe1 = document.createElement("iframe");
        iframe1.id = "body-viewer-iframe-1";
        iframe1.title = "iframe-1";
        iframe1.setAttribute("class", "body-viewer-iframe");
        document.getElementById("body-viewer-1").appendChild(iframe1);
        iframe1.src = srcPath;
        breadcrumb.innerText = srcPath_0.replaceAll("/", " > "); //用svg
        srcPathS = srcPath;
        addCssTOIframeByClick(
          0,
          iframe1.contentWindow.document,
          iframe1.contentWindow.document,
          false
        );
        //每次点击后都需要重新载入docs_m_updateWindow
        if (document.getElementById("docs_m_updateWindow_0") != null) {
          document.getElementById("docs_m_updateWindow_0").remove();
        }
        let script_re = document.createElement("script");
        script_re.id = "docs_m_updateWindow_0";
        script_re.src = "/docs/docs_m_update_iframe_Window.js";
        document.body.appendChild(script_re);
        document.getElementById("body-viewer-2").style.display = "none";
        document.getElementById("body-viewer-1").style.display = "block";
      }
    }
  }
}


// to save the elementdata
// init page don't use highlight.js,so i set undefined
var elementData_0 = undefined;
function addHighlight(element) {
  //highlight by the fileformat you clicked.
  if (document.getElementById("body-viewer-iframe-1") == null) return;
  setTimeout(() => {
    let lisClicked = document.getElementById(element.id);
    let doc = document.getElementById("body-viewer-iframe-1").contentWindow.document;
    if (
      lisClicked.getAttribute("fileformat") != null &&
      doc.getElementsByTagName("pre")[0] != undefined &&
      doc.getElementsByTagName("code")[0] == undefined
    ) {
      let codeblock_0 = document.createElement("code");
      let pre_0 = document.createElement("pre");
      doc.body.appendChild(pre_0);
      codeblock_0.id = "codeblock_0";
      //get languange by element data which genindex.js generated
      codeblock_0.setAttribute("class", lisClicked.getAttribute("fileformat"));
      setTimeout(() => {
        doc
          .getElementsByTagName("pre")[0]
          .setAttribute("id", "pre_codeblock_0");
        doc.body.appendChild(codeblock_0);
        codeblock_0.appendChild(doc.getElementsByTagName("pre")[0]);
        pre_0.appendChild(codeblock_0);
      }, 50);
    }
  }, 100);
  elementData_0 = element;
}

//copy function
function copyToClipboard(element) {
  navigator.clipboard.writeText(element.innerText)
    .then(() => {
      alert('已复制到剪贴板！');
    })
    .catch(err => {
      console.error('复制失败: ', err);
    });
}