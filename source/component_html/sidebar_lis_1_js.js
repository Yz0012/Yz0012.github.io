
let lisElementData = null;//用于存储目录元素的数据
let nodeData = null; //用于存储当前显示的内容元素的节点数据

/**
 * @description Handle the click event of a directory item, where the element parameter is the directory item.<br>
 * When the click event is triggered, it will display the content element corresponding to the directory item and hide the previously displayed content element.<br>
 * 处理目录元素的点击事件，其中element参数为目录元素。当触发点击事件时，会显示目录元素对应的内容元素，并隐藏上一次显示的内容元素
 * @param {HTMLElement} element
 * @param {string} elementId
 */
function dirClickedEvent(element) {
    let auxiliaryElement = getAuxiliaryElement(element);
    auxiliaryElement.style.display = auxiliaryElement.style.display == "none" ? "block" : "none";
    breadcrumb.innerHTML = element.getAttribute('href');
    //更新当前页面的Anchor节点
    updateAnchorDisplayEvent(element);
}

/**
 * @description After calling, it will refresh the list according to the current page, meaning it will open the folders on the path of the current page.<br>
 * 调用后会根据当前页面刷新列表，即会打开当前页面路径上的文件夹
 */
function listToggleRefreshEvent(element) {
    //父元素的tag name为div时表明当前元素为最高级目录，不执行toggle事件
    if (element.parentElement.tagName == 'DIV') return;
    element.parentElement.style.display = "block";
    //递归调用，直到最高级目录
    listToggleRefreshEvent(element.parentElement);
}

/**
 * 
 * @param {HTMLElement} element
 * @returns {HTMLElement} Auxiliary element corresponding to the current node, where the current node is the directory item and the auxiliary element is the content element corresponding to the directory item.<br>
 * @description 获取当前节点对应的辅助元素，其中当前节点为目录元素，附属元素为目录元素对应的内容元素<br>
 * After calling, it will return the auxiliary element corresponding to the current node.<br>
 * 调用后会返回当前节点对应的附属元素
 */
function getAuxiliaryElement(element) {
    return document.getElementById(element.getAttribute("auxiliaryelement"));
}

/**
 * 
 * @param {HTMLElement} currentNode
 * @description Handle the click event of a directory item, where the current node is the directory item.<br>
 * 处理目录元素的点击事件，其中当前节点为目录元素。当触发点击事件时，会显示目录元素对应的内容元素，并隐藏上一次显示的内容元素<br>
 * Note: This method should not be used in the popstate event, because there is no clicked directory item in the popstate event, so it is impossible to get the content element corresponding to the directory item of the current page. <br>
 * 注意：该方法不应使用在popstate的事件中，因为popstate事件中没有点击的目录元素，所以无法获取当前页面的目录元素对应的内容元素
 */
function updateAnchorDisplayEvent(currentNode) {
    //当点击的目录元素对应的内容元素已经显示时，不执行任何操作
    let auxiliaryElement = getAuxiliaryElement(currentNode);
    if (auxiliaryElement == null) return;
    //去掉没有afficiliatedname属性的元素
    if (!(auxiliaryElement.hasAttribute('affiliatedname'))) return;
    if (auxiliaryElement == nodeData) return;
    //显示当前点击的目录元素对应的内容元素，并隐藏上一次显示的内容元素
    nodeData.style.display = 'none';
    nodeData = auxiliaryElement;

    //为点击的列表添加颜色
    lisDataDisplayEvent(currentNode);
}

/**
 * @description Handle the popstate event, which is triggered when the user clicks the browser's back or forward button. When the popstate event is triggered, it will update the displayed anchor content on the page according to the state of the event.<br>
 * 处理popstate事件，当用户点击浏览器的后退或前进按钮时触发。当触发popstate事件时，会根据事件的状态更新页面上显示的锚点内容
 * @param {string} htmlName 
 */
function updateAnchorDisplayByPopstate(htmlName) {
    let element = document.querySelector('[affiliatedname="' + htmlName + '"]');
    if (element == null) return;
    nodeData.style.display = 'none';
    nodeData = element;
    element.style.display = 'block';

    //为点击的列表添加颜色
    lisDataDisplayEvent(document.querySelector('[auxiliaryelement="' + element.id + '"]'));
}

/**
 * @description 重复使用的目录元素点击事件的处理函数，element参数为目录元素<br>
 * Handle the click event of a directory item that is reused, where the element parameter is the directory item.<br>
 * @param {HTMLElement} element 
 */
function lisDataDisplayEvent(element) {
    lisElementData.style.backgroundColor = '';
    element.style.backgroundColor = 'var(--color-primary-84transparent)';
    lisElementData = element;
}

/**
 * @description 初始化当前页面的Anchor节点<br>
 * Initialize the Anchor node of the current page
 */
function initAnchorNode() {
    //获取当前页面的Anchor节点，并初始化
    let element = document.querySelector('[affiliatedname="' + getCurrentHtmlName() + '"]');
    //如果不存在当前页面的Anchor节点，则不执行任何操作
    if (element == null) return;
    nodeData = element;
    element.style.display = 'block';

    //初始化列表的颜色
    lisElementData = document.querySelector('[auxiliaryelement="' + element.id + '"]');
    lisElementData.style.backgroundColor = 'var(--color-primary-84transparent)';
}

//页面初始化时，自动打开当前页面的Anchor
initAnchorNode();