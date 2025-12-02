let switch_sidebar_lis = document.getElementById("body-sidebar-1-id");
function clicked_0 () {
    if (switch_sidebar_lis.style.display == "block") {
        switch_sidebar_lis.style.display = "none";
        switch_sidebar_lis.style.zIndex = "";
        switch_sidebar_lis.style.width = "20vw";
    }else {
        switch_sidebar_lis.style.display = "block";
        switch_sidebar_lis.style.zIndex = "1";
        switch_sidebar_lis.style.width = "100vw";
    }
}

function clicked_1 () {
    if (switch_sidebar_lis.style.width == "100vw") {
        switch_sidebar_lis.style.zIndex = "";
        switch_sidebar_lis.style.width = "20vw";
    }else {
        switch_sidebar_lis.style.zIndex = "1";
        switch_sidebar_lis.style.width = "100vw";
    }
}