---
title: sidebar_lis_1_js.js
source: source\component_html\sidebar_lis_1_js.js
type: JSDOC
path: docs\source\yz0012githubio\component_html
createTime: Sun, 29 Mar 2026 14:59:26 GMT
---

## Functions

<dl>
<dt><a href="#dirClickedEvent">dirClickedEvent(element, elementId)</a></dt>
<dd><p>Handle the click event of a directory item, where the element parameter is the directory item.<br>
When the click event is triggered, it will display the content element corresponding to the directory item and hide the previously displayed content element.<br>
处理目录元素的点击事件，其中element参数为目录元素。当触发点击事件时，会显示目录元素对应的内容元素，并隐藏上一次显示的内容元素</p>
</dd>
<dt><a href="#listToggleRefreshEvent">listToggleRefreshEvent()</a></dt>
<dd><p>After calling, it will refresh the list according to the current page, meaning it will open the folders on the path of the current page.<br>
调用后会根据当前页面刷新列表，即会打开当前页面路径上的文件夹</p>
</dd>
<dt><a href="#getAuxiliaryElement">getAuxiliaryElement(element)</a> ⇒ <code>HTMLElement</code></dt>
<dd><p>获取当前节点对应的辅助元素，其中当前节点为目录元素，附属元素为目录元素对应的内容元素<br>
After calling, it will return the auxiliary element corresponding to the current node.<br>
调用后会返回当前节点对应的附属元素</p>
</dd>
<dt><a href="#updateAnchorDisplayEvent">updateAnchorDisplayEvent(currentNode)</a></dt>
<dd><p>Handle the click event of a directory item, where the current node is the directory item.<br>
处理目录元素的点击事件，其中当前节点为目录元素。当触发点击事件时，会显示目录元素对应的内容元素，并隐藏上一次显示的内容元素<br>
Note: This method should not be used in the popstate event, because there is no clicked directory item in the popstate event, so it is impossible to get the content element corresponding to the directory item of the current page. <br>
注意：该方法不应使用在popstate的事件中，因为popstate事件中没有点击的目录元素，所以无法获取当前页面的目录元素对应的内容元素</p>
</dd>
<dt><a href="#updateAnchorDisplayByPopstate">updateAnchorDisplayByPopstate(htmlName)</a></dt>
<dd><p>Handle the popstate event, which is triggered when the user clicks the browser&#39;s back or forward button. When the popstate event is triggered, it will update the displayed anchor content on the page according to the state of the event.<br>
处理popstate事件，当用户点击浏览器的后退或前进按钮时触发。当触发popstate事件时，会根据事件的状态更新页面上显示的锚点内容</p>
</dd>
<dt><a href="#lisDataDisplayEvent">lisDataDisplayEvent(element)</a></dt>
<dd><p>重复使用的目录元素点击事件的处理函数，element参数为目录元素<br>
Handle the click event of a directory item that is reused, where the element parameter is the directory item.<br></p>
</dd>
<dt><a href="#initAnchorNode">initAnchorNode()</a></dt>
<dd><p>初始化当前页面的Anchor节点<br>
Initialize the Anchor node of the current page</p>
</dd>
</dl>

<a name="dirClickedEvent"></a>

## dirClickedEvent(element, elementId)
Handle the click event of a directory item, where the element parameter is the directory item.<br>When the click event is triggered, it will display the content element corresponding to the directory item and hide the previously displayed content element.<br>处理目录元素的点击事件，其中element参数为目录元素。当触发点击事件时，会显示目录元素对应的内容元素，并隐藏上一次显示的内容元素

**Kind**: global function  

| Param | Type |
| --- | --- |
| element | <code>HTMLElement</code> | 
| elementId | <code>string</code> | 

<a name="listToggleRefreshEvent"></a>

## listToggleRefreshEvent()
After calling, it will refresh the list according to the current page, meaning it will open the folders on the path of the current page.<br>调用后会根据当前页面刷新列表，即会打开当前页面路径上的文件夹

**Kind**: global function  
<a name="getAuxiliaryElement"></a>

## getAuxiliaryElement(element) ⇒ <code>HTMLElement</code>
获取当前节点对应的辅助元素，其中当前节点为目录元素，附属元素为目录元素对应的内容元素<br>After calling, it will return the auxiliary element corresponding to the current node.<br>调用后会返回当前节点对应的附属元素

**Kind**: global function  
**Returns**: <code>HTMLElement</code> - Auxiliary element corresponding to the current node, where the current node is the directory item and the auxiliary element is the content element corresponding to the directory item.<br>  

| Param | Type |
| --- | --- |
| element | <code>HTMLElement</code> | 

<a name="updateAnchorDisplayEvent"></a>

## updateAnchorDisplayEvent(currentNode)
Handle the click event of a directory item, where the current node is the directory item.<br>处理目录元素的点击事件，其中当前节点为目录元素。当触发点击事件时，会显示目录元素对应的内容元素，并隐藏上一次显示的内容元素<br>Note: This method should not be used in the popstate event, because there is no clicked directory item in the popstate event, so it is impossible to get the content element corresponding to the directory item of the current page. <br>注意：该方法不应使用在popstate的事件中，因为popstate事件中没有点击的目录元素，所以无法获取当前页面的目录元素对应的内容元素

**Kind**: global function  

| Param | Type |
| --- | --- |
| currentNode | <code>HTMLElement</code> | 

<a name="updateAnchorDisplayByPopstate"></a>

## updateAnchorDisplayByPopstate(htmlName)
Handle the popstate event, which is triggered when the user clicks the browser's back or forward button. When the popstate event is triggered, it will update the displayed anchor content on the page according to the state of the event.<br>处理popstate事件，当用户点击浏览器的后退或前进按钮时触发。当触发popstate事件时，会根据事件的状态更新页面上显示的锚点内容

**Kind**: global function  

| Param | Type |
| --- | --- |
| htmlName | <code>string</code> | 

<a name="lisDataDisplayEvent"></a>

## lisDataDisplayEvent(element)
重复使用的目录元素点击事件的处理函数，element参数为目录元素<br>Handle the click event of a directory item that is reused, where the element parameter is the directory item.<br>

**Kind**: global function  

| Param | Type |
| --- | --- |
| element | <code>HTMLElement</code> | 

<a name="initAnchorNode"></a>

## initAnchorNode()
初始化当前页面的Anchor节点<br>Initialize the Anchor node of the current page

**Kind**: global function  
