//array to save class "body-sidebar-contents" that whether be clicked status
var lisDisplayOrNot = new Array(
  document.getElementsByClassName("body-sidebar-contents").length
).fill(true);

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

//a switch determine whether lis display
let onLis = true;
var lis = document.getElementsByClassName("body-sidebar-lis");

function getLis(id){
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
        if(lisDisplayOrNot[k]){
          getLis(k+1).style.display = "none"
        }
      }
      document.getElementById("body-sidebar-icons-3").style.transform =
        "rotate(0deg)";
    } else {
      for (var i = 0; i < lis.length; i++) {
        lis[i].style.display = "block";
      }
      for (var k = 0; k < lisDisplayOrNot.length; k++) {
        if(lisDisplayOrNot[k]){
          getLis(k+1).style.display = "block"
        }
      }
      document.getElementById("body-sidebar-icons-3").style.transform =
        "rotate(90deg)";
    }
    onLis = !onLis;
  });

//get element id of you clicked
function getClickElement(wow) {
  //奇淫技巧,get id
  // console.log(lisDisplayOrNot[Number.parseInt(wow.id.replace(/\D/g, "") - 1)]);
  var lisClicked = document.getElementById(wow.id);
  var lisClickedId = Number.parseInt(wow.id.replace(/\D/g, "") - 1);
  var lisContents = document.getElementById("body-sidebar-contents-" + wow.id.replace(/\D/g, ""));
  if (lisDisplayOrNot[lisClickedId]) {
        lisClicked.style.color = "#6abd66"
    lisClicked.style.backgroundColor = "#00a6ff00";
    lisContents.style.display = "none";
  } else {
    lisClicked.style.color = "#ffffff"
    lisClicked.style.backgroundColor = "#00a6ff";
    lisContents.style.display = "block";
  }
  lisDisplayOrNot[lisClickedId] =
    !lisDisplayOrNot[lisClickedId];
}
