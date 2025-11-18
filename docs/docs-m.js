//initialize
var breadcrumb = document.getElementById("body-breadcrumb-1");
var lis = document.getElementsByClassName("body-sidebar-lis");
var bodySidebarCon = document.getElementsByClassName("body-sidebar-contents");
var iframe1 = document.getElementById("body-viewer-iframe-1");
var bodyViewerScrollbar_1 = document.getElementById("body-viewer-scrollbar_0");
// window.onerror = function error () {return true};

//a list to add "onclick" event,enter the class
//correct name is all y&m need!
addOnClick_0("body-sidebar-lis", "setLisContentStyle(this,true)");
addOnClick_1(
  "body-sidebar-lis-contexts",
  "setLisContextStyle(this,true)",
  "addHighlight(this)"
);
addAnimationend("body-sidebar-lis", "endAnima(event)");
addAnimationend("body-sidebar-contents", "endAnima(event)");

//add "onclick" event to the selector
function addOnClick_0(target, method_0) {
  var getClickElementObject = document.getElementsByClassName(target);
  for (var i = 0; i < getClickElementObject.length; i++) {
    getClickElementObject[i].setAttribute("onclick", method_0);
  }
}

//add "onclick" event to the selector
function addOnClick_1(target, method_0, method_1) {
  var getClickElementObject = document.getElementsByClassName(target);
  for (var i = 0; i < getClickElementObject.length; i++) {
    getClickElementObject[i].setAttribute(
      "onclick",
      method_0 + "; " + method_1
    );
  }
}

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
//initial
for (i = 0; i < bodySidebarCon.length; i++) {
  bodySidebarCon[i].setAttribute("booleandata", false);
}

displayEvent();

// for (i = 0; i < lis.length; i++) {
//   document.getElementById(lis[i].id).style.display = "none";
// }

for (i = 0; i < bodySidebarCon.length; i++) {
  document.getElementById(bodySidebarCon[i].id).style.display = "none";
}

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
}

addCssTOIframeByClick(
  0,
  iframe1.contentWindow.document,
  iframe1.contentWindow.document,
  false
);

//这里后面要改
onunload_0(iframe1.contentWindow);
function onunload_0(target) {
  target.onunload = () => {
    if (elementData_0 !== undefined) {
      addHighlight(elementData_0);
    }
    addCssTOIframeByClick(
      0,
      iframe1.contentWindow.document,
      iframe1.contentWindow.document,
      true
    );
    bodyViewerScrollbar_1.style.animationPlayState = "running";
    bodyViewerScrollbar_1.style.display = "block";
    // target.onunload = null;
    //because of onunload function can only be run twice
    //reset the onunload event use function "setTimeout"
    //it can't work if you don't use "setTimeout"

    //but i must be consider what performent issus will occurred when i used this method
    setTimeout(() => {
      onunload_0(target);
    }, 100);
  };
}

var booleandata_2 = null;
function addCssTOIframeByClick(timeData, docBehind, docBefore, booleanData_3) {
  setTimeout(() => {
    let doc = iframe1.contentWindow.document;
    // about booleanData_3:when we refresh iframe,booleanData_2 should be true
    // but when we clicked new doc,it will detect iframe whether successfully changed
    // booleanData_2 should be false while iframe successfully changed
    if (booleanData_3) {
      booleandata_2 = docBehind === docBefore;
    } else {
      booleandata_2 = docBehind !== docBefore;
    }
    setTimeout(() => {
      if (timeData > 50) return console.log("load failed"); //增加提示
      if (booleandata_2) {
        addCssTOIframeByClick(timeData, docBehind, doc, booleanData_3);
      }
    }, 500);
    if (!booleandata_2) {
      setTimeout(() => {
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
      iframe1.style.opacity = "1";
    }, 100);
    window.history.pushState("id_114514", "", "/docs/main.html");
    if (doc.body === null) return;
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

//init
for (i = 0; i < bodySidebarCon.length; i++) {
  bodySidebarLis[i].setAttribute("booleandata", false);
}

//set element id of you clicked,it just to make up the numbers
function setLisContextStyle(wow, refreshData_boolean) {
  // also奇技淫巧
  //记得性能优化
  var lisClicked = document.getElementById(wow.id);
  if (refreshData_boolean) {
    lisClicked.setAttribute("booleandata", true);
  }
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

//init boolean data
document.querySelector('[classname_con_2="docs"]').setAttribute("booleandata", true)
document.querySelector('[classname_con_2="htmlDoc"]').setAttribute("booleandata", true)
document.querySelector('[classname_con_2="html_unarchived"]').setAttribute("booleandata", true)
document.querySelector('[classname_2="unarchived_0000_FirstDoc.html"]').setAttribute("booleandata", true)

//refresh or init
setLisContentStyle(document.querySelector('[classname_con_2="docs"]'), false);
setLisContentStyle(document.querySelector('[classname_con_2="htmlDoc"]'), false);
setLisContentStyle(document.querySelector('[classname_con_2="html_unarchived"]'), false);
setLisContextStyle(document.querySelector('[classname_2="unarchived_0000_FirstDoc.html"]'), false);

//a function to changed a doc element which your clicked
var srcPathS = "/docs/htmlDoc/html_unarchived/unarchived_0000_FirstDoc.html";
function changedDocElement(element) {
  getParentName(element.parentElement, element.innerText);
  function getParentName(eleNode, path) {
    if (Number.parseInt(eleNode.id.split(" ")[1].replace(/\D/g, "")) !== 0) {
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
    if (srcPathS != srcPath) {
      iframe1.src = srcPath;
      breadcrumb.innerText = srcPath_0.replaceAll("/", " > "); //用svg
      srcPathS = srcPath;
      addCssTOIframeByClick(
        0,
        iframe1.contentWindow.document,
        iframe1.contentWindow.document,
        false
      );
      bodyViewerScrollbar_1.style.animationPlayState = "running";
      bodyViewerScrollbar_1.style.display = "block";
    }
  }
}


// to save the elementdata
// init page don't use highlight.js,so i set undefined
var elementData_0 = undefined;
function addHighlight(element) {
  //highlight by the fileformat you clicked.
  setTimeout(() => {
    let lisClicked = document.getElementById(element.id);
    let doc = iframe1.contentWindow.document;
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

window.addEventListener(
  "popstate",
  function () {
    breadcrumb.innerText = "*";
    // console.log("网站暂未支持退后");
  },
  false
);
