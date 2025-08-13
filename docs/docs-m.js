let onSwitch = true;
document.querySelector('.body-sidebar-icons').addEventListener("click", (event) => {
    if(onSwitch) {
        document.getElementById('body-sidebar-icons-1').style.transform="rotate(90deg)";
    }else{
        document.getElementById('body-sidebar-icons-1').style.transform="rotate(0deg)";
    }
    onSwitch = !onSwitch
});