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

  //function to change the list style
  // function lisStyle(){

  // }

let onLis = true;
var lis=document.getElementsByClassName("body-sidebar-lis");
document
  .querySelector(".body-sidebar-title")
  .addEventListener("click", (event) => {
    if (onLis) {
      for(var i = 0; i < lis.length;i++) {
        lis[i].style.display="none";
      }
      document.getElementById("body-sidebar-icons-3").style.transform =
      "rotate(0deg)";
    } else {
      for(var i = 0; i < lis.length;i++) {
        lis[i].style.display="block";
      }
      document.getElementById("body-sidebar-icons-3").style.transform =
      "rotate(90deg)";
    }
    onLis = !onLis;
  });