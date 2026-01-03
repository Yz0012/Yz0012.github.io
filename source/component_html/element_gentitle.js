var bodyRightbar_0 = document.getElementById("body-rightsidebar_0");

clearBodyRightSidebar();
addTextToBodyRightSidebar_1("h", bodyRightbar_0);


//position into view
function getPosition(number) {
    let doc = document.getElementById("wrap_0").querySelectorAll(
        "h1, h2, h3, h4, h5, h6"
    );
    doc[number].scrollIntoView({ behavior: "smooth", block: "center" });
    doc[number].style.animation = "hint_0 0.5s cubic-bezier(0, 0.6, 0, 1)";
    //弱耦合
    setTimeout(() => {
        doc[number].style.animation = "";
    }, 600);
}

function addTextToBodyRightSidebar_1(tagName, parentElement) {
    let wrap_0 = document.getElementById("wrap_0");
    if (wrap_0 == null) return;
    if (
        //to make the generated titles linearly sorted
        wrap_0.querySelectorAll(
            "h1, h2, h3, h4, h5, h6"
        ) != undefined
    ) {
        let doc = wrap_0.querySelectorAll(
            "h1, h2, h3, h4, h5, h6"
        );
        var newCon_0 = document.createElement("div");
        newCon_0.id = "body-rightbar-con_0";
        for (let i = 0; i < doc.length; i++) {
            var newCon = document.createElement("ul");
            var newElm = document.createElement("li");
            newElm.innerText = doc[i].firstChild.textContent;
            newElm.setAttribute("onclick", "getPosition" + "(" + i + ")");
            newElm.className = "body-viewer-iframe-1-" + tagName + "-" + i;
            newCon.style.cssText = `
                padding-left: `+ doc[i].tagName.replace(/\D/g, '') + `rem;` + `
                color: #ff32d6;
                margin-top: 0;
                margin-bottom: 0;
                list-style-type: square;`;
            parentElement.appendChild(newCon_0);
            newCon_0.appendChild(newCon);
            newCon.appendChild(newElm);
        }
    }
}

function clearBodyRightSidebar() {
    if (document.getElementById("body-rightbar-con_0") == null) return;
    document.getElementById("body-rightsidebar_0").innerHTML = "";
}
