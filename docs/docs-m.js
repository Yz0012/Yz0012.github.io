//initialize----------------------------------------
//array to save class "body-sidebar-contents" that whether be clicked status
var lisDisplayOrNot = new Array(
  document.getElementsByClassName("body-sidebar-contents").length
).fill(true);
var secondLisDisplayOrNot = new Array(
  document.getElementsByClassName("body-sidebar-lis-contexts").length
).fill(true);

//a list to add "onclick" event,enter the class
//correct name is all y&m need!
addOnClick("body-sidebar-lis", "setLisContentStyle(this)");
addOnClick("body-sidebar-lis-contexts", "setLisContextStyle(this)");

//add "onclick" event to the selector
function addOnClick(target, method) {
  var getClickElementObject = document.getElementsByClassName(target);
  for (var i = 0; i < getClickElementObject.length; i++) {
    getClickElementObject[i].setAttribute("onclick", method);
  }
}

var iframe1 = document.getElementById("body-viewer-iframe-1");
iframe1.onload = function () {
  let cssLink = document.createElement("link");
  let doc = iframe1.contentWindow.document;
  doc.head.appendChild(cssLink);
  cssLink.rel = "stylesheet";
  cssLink.href = "../docs/iframe1.css";
};

//--------------------------------------------------

let onSwitch = true;
document
  .querySelector("#body-sidebar-icons-1")
  .addEventListener("click", (event) => {
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

function getLis(id) {
  return document.getElementById("body-sidebar-contents-" + id.toString());
}

//magic!!magic!!!!
document
  .querySelector(".body-sidebar-title")
  .addEventListener("click", (event) => {
    if (onLis) {
      for (var i = 0; i < lis.length; i++) {
        lis[i].style.display = "none";
      }
      for (var k = 0; k < lisDisplayOrNot.length; k++) {
        if (lisDisplayOrNot[k]) {
          getLis(k + 1).style.display = "none";
        }
      }
      document.getElementById("body-sidebar-icons-3").style.transform =
        "rotate(0deg)";
    } else {
      for (var i = 0; i < lis.length; i++) {
        lis[i].style.display = "block";
      }
      for (var k = 0; k < lisDisplayOrNot.length; k++) {
        if (lisDisplayOrNot[k]) {
          getLis(k + 1).style.display = "block";
        }
      }
      document.getElementById("body-sidebar-icons-3").style.transform =
        "rotate(90deg)";
    }
    onLis = !onLis;
  });

//set element id of you clicked
function setLisContentStyle(wow) {
  //奇淫技巧,get id
  // console.log(lisDisplayOrNot[Number.parseInt(wow.id.replace(/\D/g, "") - 1)]);
  var lisClicked = document.getElementById(wow.id);
  var lisClickedId = Number.parseInt(wow.id.replace(/\D/g, "") - 1);
  var lisContents = document.getElementById(
    "body-sidebar-contents-" + wow.id.replace(/\D/g, "")
  );
  if (lisDisplayOrNot[lisClickedId]) {
    lisClicked.style.color = "#6abd66";
    lisClicked.style.backgroundColor = "#00a6ff00";
    lisContents.style.display = "none";
  } else {
    lisClicked.style.color = "#ffffff";
    lisClicked.style.backgroundColor = "#00a6ff";
    lisContents.style.display = "block";
  }
  lisDisplayOrNot[lisClickedId] = !lisDisplayOrNot[lisClickedId];
}

//set element id of you clicked,it just to make up the numbers
function setLisContextStyle(wow) {
  // also奇淫技巧
  var lisSected = document.querySelectorAll(".body-sidebar-lis-contexts");
  var lisIndex = Number.parseInt(wow.id.replace(/\D/g, "") - 1);
  var lisClicked = document.getElementById(wow.id);
  secondLisDisplayOrNot[lisIndex] = false;
  for (i = 0; i < secondLisDisplayOrNot.length; i++) {
    if (i == lisIndex) {
      lisClicked.style.backgroundColor = "#ff32d6";
      secondLisDisplayOrNot[lisIndex] = true;
      changedDocElement(wow);
    } else {
      lisSected[i].style.backgroundColor = "#ff32d600";
      secondLisDisplayOrNot[i] = true;
    }
  }
}

//a function to changed a doc element which your clicked
function changedDocElement(element) {
  // 从网上找到的极其吓人的去掉emoji的正则表达式，这部分将在自动生成目录后弃用
  iframe1.data =
    "../docs/" +
    element.innerText.replace(
      /[\u{1F600}-\u{1F64F}|\u{1F300}-\u{1F5FF}|\u{1F680}-\u{1F6FF}|\u{1F700}-\u{1F77F}|\u{1F780}-\u{1F7FF}|\u{1F800}-\u{1F8FF}|\u{1F900}-\u{1F9FF}|\u{1FA00}-\u{1FA6F}|\u{1FA70}-\u{1FAFF}|\u{2600}-\u{26FF}|\u{2700}-\u{27BF}]/gu,
      ""
    );
}
