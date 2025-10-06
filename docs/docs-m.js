//initialize
// window.onerror = function error () {return true};

//a list to add "onclick" event,enter the class
//correct name is all y&m need!
addOnClick("body-sidebar-lis", "setLisContentStyle(this)");
addOnClick("body-sidebar-lis-contexts", "setLisContextStyle(this)");
addAnimationend("body-sidebar-lis", "endAnima(event)");
addAnimationend("body-sidebar-contents", "endAnima(event)");

//add "onclick" event to the selector
function addOnClick(target, method) {
  var getClickElementObject = document.getElementsByClassName(target);
  for (var i = 0; i < getClickElementObject.length; i++) {
    getClickElementObject[i].setAttribute("onclick", method);
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
let onLis = true;
var lis = document.getElementsByClassName("body-sidebar-lis");
var bodySidebarCon = document.getElementsByClassName("body-sidebar-contents");
//initial
for (i = 0; i < bodySidebarCon.length; i++) {
  bodySidebarCon[i].setAttribute("booleandata", false);
}

displayEvent();

for (i = 0; i < bodySidebarCon.length; i++) {
  document.getElementById(bodySidebarCon[i].id).style.display = "none";
}

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
}

var iframe1 = document.getElementById("body-viewer-iframe-1");

try {
  iframe1.onload = function () {
    iframe1.style.opacity = "0";
    let cssLink = document.createElement("link");
    let doc = iframe1.contentWindow.document;
    setTimeout(() => {
      iframe1.style.opacity = "1";
    },100)
    if(doc.head === null) return;
    doc.head.appendChild(cssLink);
    cssLink.id = "iframe_1";
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    cssLink.href = "/docs/iframe1.css";
  };
} catch (err) {}

document
  .querySelector(".body-sidebar-title")
  .addEventListener("click", (event) => {
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
function setLisContentStyle(wow) {
  //奇淫技巧,get id
  // console.log(lisDisplayOrNot[Number.parseInt(wow.id.replace(/\D/g, "") - 1)]);
  var lisClicked = document.getElementById(wow.id);
  var lisId = wow.id.split(" ");
  var lisClickedId = Number.parseInt(lisId[0].replace(/\D/g, ""));
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
  if (JSON.parse(lisContents.getAttribute("booleandata"))) {
    lisClicked.style.color = "#b7ed88";
    lisClicked.style.backgroundColor = "#00a6ff00";
    lisContents.style.borderColor = "#b7ed88";
    lisContents.style.boxShadow = "inset 10px 0 0 #b7ed8800";
    lisContents.style.animation = "fadeIn 0.5s cubic-bezier(0, 0.6, 0, 1)";
  } else {
    lisClicked.style.color = "#ffffff";
    lisClicked.style.backgroundColor = "#00a6ff";
    lisContents.style.borderColor = "#deac47";
    lisContents.style.boxShadow = "inset 10px 0 10px -10px #deac47";
    lisContents.style.display = "inline-block"; //这里需要改
    lisContents.style.animation = "fadeOut 0.5s cubic-bezier(0, 0.6, 0, 1)";
  }
  lisContents.setAttribute(
    "booleandata",
    !JSON.parse(lisContents.getAttribute("booleandata"))
  );
}

var bodySidebarLis = document.getElementsByClassName(
  "body-sidebar-lis-contexts"
);
for (i = 0; i < bodySidebarCon.length; i++) {
  bodySidebarLis[i].setAttribute("booleandata", false);
}

//set element id of you clicked,it just to make up the numbers
function setLisContextStyle(wow) {
  // also奇淫技巧
  var lisClicked = document.getElementById(wow.id);
  lisClicked.setAttribute("booleandata_1", true);
  for (i = 0; i < bodySidebarLis.length; i++) {
    if (JSON.parse(bodySidebarLis[i].getAttribute("booleandata_1"))) {
      lisClicked.style.backgroundColor = "#ff32d6";
      lisClicked.style.color = "#212a32";
      changedDocElement(wow);
      lisClicked.setAttribute("booleandata_1", false);
    } else {
      bodySidebarLis[i].style.backgroundColor = "#ff32d600";
      bodySidebarLis[i].style.color = "#ff32d6";
      bodySidebarLis[i].setAttribute("booleandata_1", false);
    }
  }
}

//a function to changed a doc element which your clicked
var breadcrumb = document.getElementById("body-breadcrumb-1");
var srcPathS = "what was that?";
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
    var srcPath_0 = eleNode.id.split(" ")[3] + "/" + path;
    var srcPath =
      "/" +
      srcPath_0.replace( //注意
        /[\u{1F600}-\u{1F64F}|\u{1F300}-\u{1F5FF}|\u{1F680}-\u{1F6FF}|\u{1F700}-\u{1F77F}|\u{1F780}-\u{1F7FF}|\u{1F800}-\u{1F8FF}|\u{1F900}-\u{1F9FF}|\u{1FA00}-\u{1FA6F}|\u{1FA70}-\u{1FAFF}|\u{2600}-\u{26FF}|\u{2700}-\u{27BF}]/gu,
        ""
      );
    if (srcPathS != srcPath) {
      iframe1.src = srcPath;
      breadcrumb.innerText = srcPath_0.replaceAll("/", " > ");//用svg
      srcPathS = srcPath;
    }
  }
}
