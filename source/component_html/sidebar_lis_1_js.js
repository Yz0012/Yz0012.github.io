
/**
 * @description Handle the click event of a directory item, where the elementId parameter is the id of the directory item.
 * @description the auxiliaryElementId parameter is the id of the content element corresponding to the directory item.
 * @description 处理目录元素的点击事件，elementId参数为目录元素的id，auxiliaryElementId参数为目录元素对应内容元素的id
 * @param {string} elementId auxiliaryElementId
 */
function dirClickedEvent(element, auxiliaryElementId) {
    let auxiliaryElement = document.getElementById(auxiliaryElementId);
    auxiliaryElement.style.display = auxiliaryElement.style.display == "none" ? "block" : "none";
    breadcrumb.innerHTML = element.getAttribute('href');
}

/**
 * 
 * @param {node} currentNode 
 * @returns nextElementSibling
 */
function getNextNode(currentNode) {
    return currentNode.nextElementSibling;
}

/**
 * 
 * @param {node} currentNode 
 * @description Execute diplay event,input node param
 */
function anchorDisplayEvent(currentNode) {
    if (getNextNode(currentNode) == nodeStorage('get')) return;
    let nextNode = getNextNode(currentNode);
    nextNode.style.display = 'block';
    nodeStorage('get').style.display = 'none';
    nodeStorage('update', nextNode);
}

/**
 * 
 * @param {string} param 
 * @param {node} paramNodeData 
 * @returns Stored node data
 */
var nodeData = undefined;
function nodeStorage(param, paramNodeData) {
    switch (param) {
        case 'get': return nodeData;
        case 'update': nodeData = paramNodeData;
            break;
        default: console.log('param: ' + param + ' error!');
    }
}

/**
 * @description init nodeData
 */
function initAnchorNode() {
    let srcSplit = document.getElementById("html_src_0").getAttribute("src_0").split("\\");
    let AffiliatedName = srcSplit[srcSplit.length - 1];
    let element = document.querySelector('[affiliatedname="' + AffiliatedName + '"]');
    nodeStorage('update', element)
    element.style.display = 'block';
}

initAnchorNode();