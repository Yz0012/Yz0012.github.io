let switch_sidebar_lis = document.getElementById("body-sidebar-1-id");
function clicked_0() {
    if (switch_sidebar_lis.style.display == "block") {
        switch_sidebar_lis.style.display = "none";
        switch_sidebar_lis.style.zIndex = "";
        switch_sidebar_lis.style.width = "20vw";
    } else {
        switch_sidebar_lis.style.animation = "";
        switch_sidebar_lis.style.display = "block";
        switch_sidebar_lis.style.zIndex = "1";
        switch_sidebar_lis.style.width = "100vw";
    }
}

function clicked_1() {
    if (switch_sidebar_lis.style.width == "100vw") {
        switch_sidebar_lis.style.width = "20vw";
        switch_sidebar_lis.style.animation = "enSmall_3 0.5s cubic-bezier(0, 0.6, 0, 1)";
    } else {
        switch_sidebar_lis.style.zIndex = "1";
        switch_sidebar_lis.style.width = "100vw";
        switch_sidebar_lis.style.animation = "enLarge_3 0.5s cubic-bezier(0, 0.6, 0, 1)";
    }
}