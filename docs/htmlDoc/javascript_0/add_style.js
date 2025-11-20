//loop to add style
addStyle_0("body_0")
function addStyle_0(elementId) {
    setTimeout(() => {
        let element = document.getElementById(elementId);
        if (element == null) {
            addStyle_0(elementId)
        } else {
            element.style.width = window.parent.parent.innerWidth + "px";
            window.parent.parent.addEventListener("resize", () => {
                element.style.width = window.parent.parent.innerWidth + "px";
            })
        }
    }, 1000);
}

addStyle_1("wrap_0")
function addStyle_1(elementId) {
    let element = document.getElementById(elementId);
    setTimeout(() => {
        if (element == null) {
            addStyle_1(elementId)
        } else {
            element.style.width = window.parent.parent.innerWidth * 0.6 - 64 + "px";
            element.scrollIntoView({ behavior: "smooth", inline: "start" });
            window.parent.parent.addEventListener("resize", () => {
                element.style.width = window.parent.parent.innerWidth * 0.6 - 64 + "px";
            })
        }
    }, 1000);
}

addStyle_2("giscus", 0) //a comment system
function addStyle_2(elementId, num) {
    let element = document.getElementsByClassName(elementId)[num];
    setTimeout(() => {
        if (element == null) {
            addStyle_2(elementId, num)
        } else {
            element.style.width = window.parent.parent.innerWidth * 0.6 - 64 + "px";
            window.parent.parent.addEventListener("resize", () => {
                element.style.width = window.parent.parent.innerWidth * 0.6 - 64 + "px";
            })
        }
    }, 1000);
}