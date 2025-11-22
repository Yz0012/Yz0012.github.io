var iframe1 = document.getElementById("body-viewer-iframe-1");
var bodyRightbar_0 = document.getElementById("body-rightsidebar_0");
iframe1.onload = function addTextToBodyRightSidebar() {
  clearBodyRightSidebar();
  addTextToBodyRightSidebar_1("h", bodyRightbar_0);
};

//position into view
function getPosition(number) {
  let doc = iframe1.contentWindow.document.body.querySelectorAll(
    "h1, h2, h3, h4, h5, h6"
  );
  doc[number].scrollIntoView({ behavior: "smooth" });
  doc[number].style.animation = "hint_0 0.5s cubic-bezier(0, 0.6, 0, 1)";
  //弱耦合
  setTimeout(() => {
    doc[number].style.animation = "";
  }, 600);
}

function addTextToBodyRightSidebar_1(tagName, parentElement) {
  if (iframe1.contentWindow.document.body == null) return;
  if (
    //to make the generated titles linearly sorted
    iframe1.contentWindow.document.body.querySelectorAll(
      "h1, h2, h3, h4, h5, h6"
    ) != undefined
  ) {
    let doc = iframe1.contentWindow.document.body.querySelectorAll(
      "h1, h2, h3, h4, h5, h6"
    );
    var newCon_0 = document.createElement("div");
    newCon_0.id = "body-rightbar-con_0";
    for (let i = 0; i < doc.length; i++) {
      var newCon = document.createElement("ul");
      var newElm = document.createElement("li");
      newElm.innerText = doc[i].innerText;
      newElm.setAttribute("onclick", "getPosition" + "(" + i + ")");
      newElm.className = "body-viewer-iframe-1-" + tagName + "-" + i;
      parentElement.appendChild(newCon_0);
      newCon_0.appendChild(newCon);
      newCon.appendChild(newElm);
    }
  }
}

function clearBodyRightSidebar() {
  if (document.getElementById("body-rightbar-con_0") === null) return;
  let a = document.getElementById("body-rightbar-con_0");
  a.remove();
}
