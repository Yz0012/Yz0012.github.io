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

//init
for (i = 0; i < bodySidebarCon.length; i++) {
    bodySidebarLis[i].setAttribute("booleandata", false);
}

//init lis

//initial
for (i = 0; i < bodySidebarCon.length; i++) {
    bodySidebarCon[i].setAttribute("booleandata", false);
}

for (i = 0; i < bodySidebarCon.length; i++) {
    document.getElementById(bodySidebarCon[i].id).style.display = "none";
}

setTimeout(() => {
    //init boolean data
    var src_Split = document.getElementById("html_src_0").getAttribute("src_0").split("\\");
    for (let i = 0; i < src_Split.length; i++) {
        let element = document.querySelector('[classname_con_2="' + src_Split[i] + '"]');
        element.setAttribute("booleandata", true);
        //refresh or init
        if (i == (src_Split.length - 1)) {
            setLisContextStyle(element, false);
        } else {
            setLisContentStyle(element, false);
        }

    }
}, 500);