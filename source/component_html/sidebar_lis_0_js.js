//init
var bodySidebar_1 = document.getElementById("body-sidebar-lis-o-1");
var bodySidebar_icon_3 = document.getElementById("body-sidebar-icons-3");

var bodySidebar_1_H = window.innerHeight - 128;
bodySidebar_1.style.height = bodySidebar_1_H + "px";


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

document.querySelector(".body-sidebar-title").addEventListener("click", () => {
  displayEvent();
});

//a switch determine whether lis display
let onLis = false;

displayEvent();

//magic!!magic!!!!
function displayEvent() {
  if (onLis) {
    bodySidebar_1.style.pointerEvents = "none";
    bodySidebar_1.style.animation = "enSmall_0 0.2s cubic-bezier(0, 0.6, 0, 1) forwards";
    bodySidebar_icon_3.style.transform =
      "rotate(0deg)";
  } else {
    bodySidebar_1.style.pointerEvents = "all";
    bodySidebar_1.style.animation = "enLarge_0 0.2s cubic-bezier(0, 0.6, 0, 1) forwards";
    document.getElementById("body-sidebar-icons-3").style.transform =
      "rotate(90deg)";
  }
  onLis = !onLis;
}