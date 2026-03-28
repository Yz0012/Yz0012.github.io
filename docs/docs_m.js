//initialize
var breadcrumb = document.getElementById('body-breadcrumb-1');
//append script

var newElm_imagehoverinfo_0 = document.createElement("script");
var newElm_panmode_0 = document.createElement("script");
var newElm_autoanchorlink_0 = document.createElement("script");

newElm_panmode_0.src = "/source/component_html/element_panmode.js";
newElm_imagehoverinfo_0.src = "/source/component_html/image_hover_info.js"
newElm_autoanchorlink_0.src = '/source/component_html/element_autoanchorlink.js'

newElm_panmode_0.defer = "";
newElm_imagehoverinfo_0.defer = "";
newElm_autoanchorlink_0.defer = '';

newElm_panmode_0.id = "js_file_panmode";
newElm_imagehoverinfo_0.id = "js_file_imagehoverinfo";
newElm_autoanchorlink_0.id = 'js_file_autoanchorlink';

document.body.appendChild(newElm_panmode_0);
document.body.appendChild(newElm_imagehoverinfo_0);
document.body.appendChild(newElm_autoanchorlink_0);

fetch("/source/component_html/sidebar_lis_0.html")
  .then(response => response.text())
  .then(data => {
    // Initialize the DOM parser
    const parser = new DOMParser()

    // Parse the text
    const doc = parser.parseFromString(data, "text/html")
    var element = document.getElementById("body-sidebar-1-id");
    element.innerHTML = doc.getElementById("body-sidebar").innerHTML;
    var newElm = document.createElement("script");
    var newElm_1 = document.createElement("script");
    var newElm_fetch = document.createElement("script");
    var newElm_popstate = document.createElement("script");
    var newElm_switch_0 = document.createElement("script");
    var newElm_autohidescroll_0 = document.createElement("script");

    newElm.src = "/source/component_html/sidebar_lis_0_js.js";
    newElm_1.src = "/source/component_html/sidebar_lis_1_js.js";
    newElm_fetch.src = "/source/component_html/sidebar_lis_fetch.js";
    newElm_popstate.src = "/source/component_html/sidebar_lis_popstate.js";
    newElm_switch_0.src = "/source/component_html/sidebar_lis_switch.js";
    newElm_autohidescroll_0.src = "/source/component_html/element_autohidescroll.js";

    newElm.defer = "";
    newElm_1.defer = "";
    newElm_fetch.defer = "";
    newElm_popstate.defer = "";
    newElm_switch_0.defer = "";
    newElm_autohidescroll_0.defer = "";

    newElm.id = "sidebar_js_file_0";
    newElm_1.id = "sidebar_js_file_1";
    newElm_fetch.id = "sidebar_js_file_fetch";
    newElm_popstate.id = "sidebar_js_file_popstate";
    newElm_switch_0.id = "sidebar_js_file_switch_0";
    newElm_autohidescroll_0.id = "js_file_autohidescroll";

    element.appendChild(newElm);
    element.appendChild(newElm_1);
    element.appendChild(newElm_fetch);
    element.appendChild(newElm_popstate);
    element.appendChild(newElm_switch_0);
    element.appendChild(newElm_autohidescroll_0);

  });

fetch("/source/component_html/header_0.html")
  .then(response => response.text())
  .then(data => {
    // Initialize the DOM parser
    const parser = new DOMParser()

    // Parse the text
    const doc = parser.parseFromString(data, "text/html")
    var element = document.getElementsByClassName('header')[0];
    element.innerHTML = doc.getElementById("container").innerHTML;
  });

fetch("/source/component_html/body_sidebar_submenu.html")
  .then(response => response.text())
  .then(data => {
    // Initialize the DOM parser
    const parser = new DOMParser()

    // Parse the text
    const doc = parser.parseFromString(data, "text/html")
    var element = document.getElementById("body-sidebar-submenu-1");
    element.innerHTML = doc.body.innerHTML;
  });

//载入script
onload = (event) => {

  listToggleRefreshEvent(document.querySelector('[classname_con_2="' + getCurrentHtmlName() + '"]'));

  init_imageinfohover(false);
  //生成本文内容
  createtitle();

  init_autoanchorlink({
    container: '#wrap_0',
    selector: 'h1, h2, h3, h4, h5, h6',
    icon: '¶',
    scrollOffset: 100
  });

}

/**
 * @description Get the current HTML file name, if the file name is empty, return "index.html"
 * @description 获取当前HTML文件名，如果文件名为空，返回"index.html"
 * @returns {string}
 */
function getCurrentHtmlName() {
  const path = window.location.pathname;
  // 获取最后一个斜杠后的内容
  let fileName = path.substring(path.lastIndexOf('/') + 1);

  // 如果文件名为空（比如访问根目录），返回默认值
  if (fileName === '') {
    return 'index.html';
  }

  // 如果有查询参数或锚点，移除它们
  if (fileName.includes('?')) {
    fileName = fileName.split('?')[0];
  }
  if (fileName.includes('#')) {
    fileName = fileName.split('#')[0];
  }

  return fileName;
}

/**
 * @description Extracts the file name from a URL, with options to handle default names, extensions, and query/hash removal.
 * @description 从URL中提取文件名，提供选项来处理默认名称、扩展名以及查询/哈希的移除。
 * @param {string} url - The URL from which to extract the file name.
 * @param {options} defaultName - Default file name to return if the extracted file name is empty (default: "index.html")
 * @param {options} keepExtension - Whether to keep the file extension in the extracted file name (default: true)
 * @param {options} removeQuery - Whether to remove query parameters from the URL before extracting the file name (default: true)
 * @param {options} removeHash - Whether to remove hash fragments from the URL before extracting the file name (default: true)
 * @returns 
 */
function getExtractFileName(url, options = {}) {
  const {
    defaultName = 'index.html',
    keepExtension = true,
    removeQuery = true,
    removeHash = true
  } = options;

  try {
    let cleanUrl = url;

    // 移除查询参数
    if (removeQuery) {
      cleanUrl = cleanUrl.split('?')[0];
    }

    // 移除hash
    if (removeHash) {
      cleanUrl = cleanUrl.split('#')[0];
    }

    // 处理URL对象
    let pathname;
    try {
      const urlObj = new URL(cleanUrl);
      pathname = urlObj.pathname;
    } catch {
      // 相对路径处理
      pathname = cleanUrl;
    }

    // 处理结尾斜杠
    if (pathname.endsWith('/')) {
      pathname += defaultName;
    }

    // 获取文件名
    let fileName = pathname.split('/').pop();

    // 如果为空，返回默认值
    if (!fileName || fileName === '') {
      fileName = defaultName;
    }

    // 如果不保留扩展名，移除扩展名
    if (!keepExtension && fileName.includes('.')) {
      fileName = fileName.substring(0, fileName.lastIndexOf('.'));
    }

    return fileName;
  } catch (error) {
    console.error('解析URL失败:', error);
    return defaultName;
  }
}

//run when anima ended;
function endAnima(event) {
  if (event.animationName == "fadeOut") return;
  event.target.style.display = "none";
}

// for (i = 0; i < lis.length; i++) {
//   document.getElementById(lis[i].id).style.display = "none";
// }

//when styleSheets.length == 0,styleSheets[-1] doesn't exist
if (document.styleSheets.length == 0) {
  createAnima(0);
} else {
  createAnima(1);
}

function createAnima(num) {

  document.styleSheets[document.styleSheets.length - num].insertRule(
    `
  @keyframes fadeIn {
  0% { margin-top: 4px; opacity: 1;}
  100% { margin-top: -16px; opacity: 0; }
  }`
  );

  document.styleSheets[document.styleSheets.length - num].insertRule(
    `@keyframes fadeOut {
  0% { margin-top: -8px; opacity: 0;}
  100% { margin-top: 4px; opacity: 1; }
  }`
  );

  document.styleSheets[document.styleSheets.length - num].insertRule(
    `@keyframes enLarge {
  0% { width:60vw; left:20vw}
  100% { width:100vw; left:0vw}
  }`
  );

  document.styleSheets[document.styleSheets.length - num].insertRule(
    `@keyframes enSmall {
  0% { width:100vw; left:0vw}
  100% { width:60vw; left:20vw}
  }`
  );

  document.styleSheets[document.styleSheets.length - num].insertRule(
    `@keyframes enLarge_0 {
    0% {opacity:0}
  100% { opacity:100}
  }`
  );

  document.styleSheets[document.styleSheets.length - num].insertRule(
    `@keyframes enSmall_0 {
    0% {opacity:100}
  100% {opacity:0}
  }`
  );

  document.styleSheets[document.styleSheets.length - num].insertRule(
    `@keyframes enLarge_2 {
  0% { width:80vw; left:20vw}
  100% { width:100vw; left:0vw}
  }`
  );

  document.styleSheets[document.styleSheets.length - num].insertRule(
    `@keyframes enSmall_2 {
  0% { width:100vw; left:0vw}
  100% { width:80vw; left:20vw}
  }`
  );

  document.styleSheets[document.styleSheets.length - num].insertRule(
    `@keyframes hint_0 {
  0% { background-color: #0091ff}
  100% { background-color: #0091ff00}
  }`
  );

  document.styleSheets[document.styleSheets.length - num].insertRule(
    `@keyframes enLarge_3 {
  0% { width:20vw}
  100% { width:100vw}
  }`
  );

  document.styleSheets[document.styleSheets.length - num].insertRule(
    `@keyframes enSmall_3 {
  0% { width:100vw}
  100% { width:20vw}
  }`
  );
}

//copy function
function copyToClipboard(element) {
  navigator.clipboard.writeText(element.innerText)
    .then(() => {
      alert('已复制到剪贴板！');
    })
    .catch(err => {
      console.error('复制失败: ', err);
    });
}