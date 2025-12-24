//initialize
fetch("/source/component_html/sidebar_lis_0.html")
  .then(response => response.text())
  .then(data => {
    // Initialize the DOM parser
    const parser = new DOMParser()

    // Parse the text
    const doc = parser.parseFromString(data, "text/html")
    var element = document.getElementById("body-sidebar-1-id");
    element.appendChild(doc.getElementById("body-sidebar-lis-o-1"));
    var newElm = document.createElement("script");
    var newElm_1 = document.createElement("script");
    var newElm_fetch = document.createElement("script");
    var newElm_popstate = document.createElement("script");
    var newElm_switch_0 = document.createElement("script");

    newElm.src = "/source/component_html/sidebar_lis_0_js.js";
    newElm_1.src = "/source/component_html/sidebar_lis_1_js.js";
    newElm_fetch.src = "/source/component_html/sidebar_lis_fetch.js";
    newElm_popstate.src = "/source/component_html/sidebar_lis_popstate.js";
    newElm_switch_0.src = "/source/component_html/sidebar_lis_switch.js";

    newElm.defer = "";
    newElm_1.defer = "";
    newElm_fetch.defer = "";
    newElm_popstate.defer = "";
    newElm_switch_0.defer = "";

    newElm.id = "sidebar_js_file_0";
    newElm_1.id = "sidebar_js_file_1";
    newElm_fetch.id = "sidebar_js_file_fetch";
    newElm_popstate.id = "sidebar_js_file_popstate";
    newElm_switch_0.id = "sidebar_js_file_switch_0";

    element.appendChild(newElm);
    element.appendChild(newElm_1);
    element.appendChild(newElm_fetch);
    element.appendChild(newElm_popstate);
    element.appendChild(newElm_switch_0);

  });
//载入docs_m_updateWindow
onload = (event) => {
  if (document.getElementById("docs_m_updateWindow_0") != null) {
    document.getElementById("docs_m_updateWindow_0").remove();
  }
  let script_re = document.createElement("script");
  script_re.id = "docs_m_updateWindow_0";
  script_re.src = "/docs/docs_m_update_Window.js";
  document.body.appendChild(script_re);
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
  event.srcElement.style.display = "none";
}

let onSwitch = true;
document
  .querySelector("#body-sidebar-icons-1")
  .addEventListener("click", () => {
    if (onSwitch) {
      document.getElementById("body-sidebar-icons-1").style.transform =
        "rotate(90deg)";
      document.getElementById("body-sidebar-submenu-1").style.display = "block";
    } else {
      document.getElementById("body-sidebar-icons-1").style.transform =
        "rotate(0deg)";
      document.getElementById("body-sidebar-submenu-1").style.display = "none";
    }
    onSwitch = !onSwitch;
  });

//a switch determine whether lis display
let onLis = false;

displayEvent();

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
function addCssTOIframeByClick(timeData, docBehind, docBefore, booleanData_3) {
  bodyViewerScrollbar_1.style.animationPlayState = "running";
  bodyViewerScrollbar_1.style.display = "block";
  setTimeout(() => {
    if (document.getElementById("body-viewer-iframe-1") == null) return;
    let doc = document.getElementById("body-viewer-iframe-1").contentWindow.document;
    // about booleanData_3:when we refresh iframe,booleanData_2 should be true
    // but when we clicked new doc,it will detect iframe whether successfully changed
    // booleanData_2 should be false while iframe successfully changed
    if (booleanData_3) {
      booleandata_2 = docBehind === docBefore;
    } else {
      booleandata_2 = docBehind !== docBefore;
    }
    setTimeout(() => {
      if (timeData > 50) { console.log("load failed") }; //增加提示
      if (booleandata_2) {
        addCssTOIframeByClick(timeData, docBehind, doc, booleanData_3);
      }
    }, 500);
    if (!booleandata_2) {
      setTimeout(() => {
        if (doc.getElementsByTagName("svg")[0] != null) {
          scriptLink_2.innerText = "hljs.highlightAll();";
          bodyViewerScrollbar_1.style.animationPlayState = "paused";
          bodyViewerScrollbar_1.style.display = "none";
        };
        if (doc.body === null) return;
        doc.body.appendChild(scriptLink_2);
        // i consider highlight angin isn't an issues
        // so you can ignore log of highlight.js
        scriptLink_2.innerText = "hljs.highlightAll();";
        bodyViewerScrollbar_1.style.animationPlayState = "paused";
        bodyViewerScrollbar_1.style.display = "none";
      }, 500);
    }
    let cssLink = document.createElement("link");
    let cssLink_2 = document.createElement("link");
    let cssLink_3 = document.createElement("link");
    let scriptLink_0 = document.createElement("script");
    let scriptLink_1 = document.createElement("script");
    let scriptLink_2 = document.createElement("script");
    setTimeout(() => {
      document.getElementById("body-viewer-iframe-1").style.opacity = "1";
    }, 100);
    if (doc.body == null) return;
    if (doc.getElementById("iframe_1") != null) return;
    doc.head.appendChild(cssLink);
    doc.head.appendChild(cssLink_2);
    doc.head.appendChild(cssLink_3);
    doc.head.appendChild(scriptLink_0);
    doc.head.appendChild(scriptLink_1);
    cssLink.id = "iframe_1";
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    cssLink.href = "/docs/iframe1.css";
    cssLink_2.rel = "stylesheet";
    cssLink_2.href = "/fonts/stylesheet.css";
    cssLink_3.rel = "stylesheet";
    cssLink_3.href = "/highlights/styles/gradient-dark.min.css";
    scriptLink_0.src = "/highlights/highlight.min.js";
    scriptLink_1.src = "/highlights/languages/javascript.js";
    timeData++;
  }, 100);
}

document.querySelector(".body-sidebar-title").addEventListener("click", () => {
  displayEvent();
});

//magic!!magic!!!!
function displayEvent() {
  if (onLis) {
    for (var i = 0; i < lis.length; i++) {
      lis[i].style.animation = "fadeIn 0.5s cubic-bezier(0, 0.6, 0, 1)";
    }
    for (var k = 0; k < bodySidebarCon.length; k++) {
      document.getElementById(bodySidebarCon[k].id).style.animation =
        "fadeIn 0.5s cubic-bezier(0, 0.6, 0, 1)";
    }
    document.getElementById("body-sidebar-icons-3").style.transform =
      "rotate(0deg)";
  } else {
    for (var i = 0; i < lis.length; i++) {
      lis[i].style.display = "block"; //同样
      lis[i].style.animation = "fadeOut 0.5s cubic-bezier(0, 0.6, 0, 1)";
    }
    for (var k = 0; k < bodySidebarCon.length; k++) {
      if (JSON.parse(bodySidebarCon[k].getAttribute("booleandata"))) {
        document.getElementById(bodySidebarCon[k].id).style.display =
          "inline-block"; //这里需要改
        document.getElementById(bodySidebarCon[k].id).style.animation =
          "fadeOut 0.5s cubic-bezier(0, 0.6, 0, 1)";
      }
    }
    document.getElementById("body-sidebar-icons-3").style.transform =
      "rotate(90deg)";
  }
  onLis = !onLis;
}

//set element id of you clicked
function setLisContentStyle(wow, refreshData_boolean) {
  //奇技淫巧,get id
  // console.log(lisDisplayOrNot[Number.parseInt(wow.id.replace(/\D/g, "") - 1)]);
  //记得优化
  var lisId = wow.id.split(" ");
  var lisClickedId = Number.parseInt(lisId[0].replace(/\D/g, ""));
  // if refreshData_boolean = true , it can turn lisClicked to lisContents
  // refresh don't need this
  if (refreshData_boolean) {
    var lisClicked = wow;
    var lisContents = document.getElementById(
      "body-sidebar-contents-" +
      lisClickedId +
      " " +
      lisId[1] +
      " " +
      lisId[2] +
      " " +
      lisId[3]
    ); //需要改
  } else {
    //don't fucking move it
    lisContents = wow;
    var lisClicked = document.getElementById(
      "body-sidebar-lis-" +
      lisClickedId +
      " " +
      lisId[1] +
      " " +
      lisId[2] +
      " " +
      lisId[3]
    ); //需要改
  }
  if (refreshData_boolean) {
    lisContents.setAttribute(
      "booleandata",
      !JSON.parse(lisContents.getAttribute("booleandata"))
    );
  }
  if (JSON.parse(lisContents.getAttribute("booleandata"))) {
    lisClicked.style.color = "#ffffff";
    lisClicked.style.backgroundColor = "#00a6ff";
    lisContents.style.borderColor = "#deac47";
    lisContents.style.boxShadow = "inset 10px 0 10px -10px #deac47";
    lisContents.style.display = "inline-block"; //这里需要改
    lisContents.style.animation = "fadeOut 0.2s cubic-bezier(0, 0.6, 0, 1)";
  } else {

    lisClicked.style.color = "#b7ed88";
    lisClicked.style.backgroundColor = "#00a6ff00";
    lisContents.style.borderColor = "#b7ed88";
    lisContents.style.boxShadow = "inset 10px 0 0 #b7ed8800";
    lisContents.style.animation = "fadeIn 0.2s cubic-bezier(0, 0.6, 0, 1)";
  }
}

var bodySidebarLis = document.getElementsByClassName(
  "body-sidebar-lis-contexts"
);

//set element id of you clicked,it just to make up the numbers
// bodySidebarLis_datastorage defined in source\component_html\sidebar_lis_1_js.js
// no or!
function setLisContextStyle(wow, refreshData_boolean) {
  // also奇技淫巧
  //记得性能优化
  var lisClicked = document.getElementById(wow.id);
  if (refreshData_boolean) {
    lisClicked.setAttribute("booleandata", true);
    if (bodySidebarLis_datastorage != undefined) {
      bodySidebarLis_datastorage.style.backgroundColor = "#6abd6600";
      bodySidebarLis_datastorage.style.color = "#ff32d6";
      bodySidebarLis_datastorage.setAttribute("booleandata", false);
    }
    lisClicked.style.backgroundColor = "#6abd66";
    lisClicked.style.color = "#ffffff";
    changedDocElement(wow);
    lisClicked.setAttribute("booleandata", false);
    bodySidebarLis_datastorage = lisClicked;
  } else {
    for (i = 0; i < bodySidebarLis.length; i++) {
      if (JSON.parse(bodySidebarLis[i].getAttribute("booleandata"))) {
        lisClicked.style.backgroundColor = "#6abd66";
        lisClicked.style.color = "#ffffff";
        changedDocElement(wow);
        lisClicked.setAttribute("booleandata", false);
      } else {
        bodySidebarLis[i].style.backgroundColor = "#6abd6600";
        bodySidebarLis[i].style.color = "#ff32d6";
        bodySidebarLis[i].setAttribute("booleandata", false);
      }
    }
  }
}

//a function to changed a doc element which your clicked
var srcPathS = "/docs/";
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
    var srcPath_0 = eleNode.id.split(" ")[3] + "/" + path;
    var srcPath =
      "/" +
      srcPath_0.replace(
        //注意
        /[\u{1F600}-\u{1F64F}|\u{1F300}-\u{1F5FF}|\u{1F680}-\u{1F6FF}|\u{1F700}-\u{1F77F}|\u{1F780}-\u{1F7FF}|\u{1F800}-\u{1F8FF}|\u{1F900}-\u{1F9FF}|\u{1FA00}-\u{1FA6F}|\u{1FA70}-\u{1FAFF}|\u{2600}-\u{26FF}|\u{2700}-\u{27BF}]/gu,
        ""
      );
    //html will adopt a new function to express
    if (element.getAttribute("fileformat") == "language-html") {
      if (srcPathS != srcPath) {
        document.getElementById("body-viewer-1").style.display = "none";
        document.getElementById("body-viewer-2").style.display = "block";
        breadcrumb.innerText = srcPath_0.replaceAll("/", " > ");
      }
    } else {
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