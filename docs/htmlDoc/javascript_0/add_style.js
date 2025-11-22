//loop to add style
// addStyle_0("body_0")
// function addStyle_0(elementId) {
//     setTimeout(() => {
//         let element = document.getElementById(elementId);
//         if (element == null) {
//             addStyle_0(elementId)
//         } else {
//             element.style.width = window.parent.parent.innerWidth + "px";
//             window.parent.parent.addEventListener("resize", () => {
//                 element.style.width = window.parent.parent.innerWidth + "px";
//             })
//         }
//     }, 1000);
// }

addStyle_1("wrap_0")
function addStyle_1(elementId) {
    let element = document.getElementById(elementId);
    setTimeout(() => {
        if (element == null) {
            addStyle_1(elementId)
        } else {
            if (window.parent.parent.innerWidth > 1000) {
                element.style.width = window.parent.parent.innerWidth * 0.6 - 68 + "px";
            } else {
                element.style.width = window.parent.parent.innerWidth - 68 + "px";
            }
            element.scrollIntoView({ behavior: "smooth", inline: "nearest" });
            window.parent.parent.addEventListener("resize", () => {
                if (window.parent.parent.innerWidth > 1000) {
                    element.style.width = window.parent.parent.innerWidth * 0.6 - 68 + "px";
                } else {
                    element.style.width = window.parent.parent.innerWidth - 68 + "px";
                }
            })
        }
    }, 1000);
}

addStyle_2("giscus", 0) //a comment system
//https://giscus.app/zh-CN
function addStyle_2(elementClass, num) {
    let element = document.getElementsByClassName(elementClass)[num];
    setTimeout(() => {
        if (element == null) {
            addStyle_2(elementClass, num)
        } else {
            if (window.parent.parent.innerWidth > 1000) {
                element.style.width = window.parent.parent.innerWidth * 0.6 - 68 + "px";
            } else {
                element.style.width = window.parent.parent.innerWidth - 68 + "px";
            }
            window.parent.parent.addEventListener("resize", () => {
                if (window.parent.parent.innerWidth > 1000) {
                    element.style.width = window.parent.parent.innerWidth * 0.6 - 68 + "px";
                } else {
                    element.style.width = window.parent.parent.innerWidth - 68 + "px";
                }
            })
        }
    }, 1000);
}

addStyle_3("html_url_0")
function addStyle_3(elementId) {
    let element = document.getElementById(elementId);
    setTimeout(() => {
        if (element == null) {
            addStyle_3(elementId)
        } else {
            element.style.left = window.parent.parent.innerWidth * 0.2 + "px";
            window.parent.parent.addEventListener("resize", () => {
                element.style.left = window.parent.parent.innerWidth * 0.2 + "px";
            })
        }
    }, 1000);
}