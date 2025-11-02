var iframe1 = document.getElementById("body-viewer-iframe-1");
var bodyRightbar_0 = document.getElementById("body-rightsidebar_0");
iframe1.onload = function addTextToBodyRightSidebar() {
  if (bodyRightbar_0.getElementsByTagName("ul") != undefined) {
    clearBodyRightSidebar();
  }
  addTextToBodyRightSidebar_1();
};

function addTextToBodyRightSidebar_1() {
    if (iframe1.contentWindow.document.body.getElementsByTagName("h1") != undefined) {
    let doc = iframe1.contentWindow.document.body.getElementsByTagName("h1");
    for (let i = 0; i < doc.length; i++) {
      var newCon = document.createElement("ul");
      var newElm = document.createElement("li");
      newElm.innerText = doc[i].innerText;
      newElm.className = "body-viewer-iframe-1-h1-" + i;
      bodyRightbar_0.appendChild(newCon);
      newCon.appendChild(newElm);
    }
  }
}

function clearBodyRightSidebar() {
  for (let i = 0; i < bodyRightbar_0.getElementsByTagName("ul").length; i++) {
    bodyRightbar_0.getElementsByTagName("ul")[i].remove();
  }
  for (let i = 0; i < bodyRightbar_0.getElementsByTagName("li").length; i++) {
    bodyRightbar_0.getElementsByTagName("li")[i].remove();
  }
}
