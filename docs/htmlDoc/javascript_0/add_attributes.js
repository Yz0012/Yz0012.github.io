var element_tag_a = document.getElementsByTagName("a");
for(i = 0; i < element_tag_a.length;i++){
    element_tag_a[i].target = "_blank";
    element_tag_a[i].rel = "noopener noreferrer";
}