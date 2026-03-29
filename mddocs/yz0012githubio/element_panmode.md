---
title: element_panmode.js
source: source\component_html\element_panmode.js
type: JSDOC
path: yz0012githubio\component_html
createTime: Sun, 29 Mar 2026 02:21:55 GMT
---

<a name="AdvancedPanScroll"></a>

## AdvancedPanScroll
**Kind**: global class  

* [AdvancedPanScroll](#AdvancedPanScroll)
    * [new AdvancedPanScroll(container, options)](#new_AdvancedPanScroll_new)
    * [.init()](#AdvancedPanScroll+init)
    * [.bindEvents()](#AdvancedPanScroll+bindEvents)
    * [.onMouseDown(e)](#AdvancedPanScroll+onMouseDown)
    * [.onMouseMove(e)](#AdvancedPanScroll+onMouseMove)
    * [.backroom()](#AdvancedPanScroll+backroom)
    * [.onMouseUp()](#AdvancedPanScroll+onMouseUp)
    * [.onTouchStart(e)](#AdvancedPanScroll+onTouchStart)
    * [.onTouchMove(e)](#AdvancedPanScroll+onTouchMove)
    * [.onTouchEnd()](#AdvancedPanScroll+onTouchEnd)
    * [.animate()](#AdvancedPanScroll+animate)
    * [.destroy()](#AdvancedPanScroll+destroy)

<a name="new_AdvancedPanScroll_new"></a>

### new AdvancedPanScroll(container, options)

| Param | Type | Description |
| --- | --- | --- |
| container | <code>HTMLElement</code> | Add PanScroll to element. |
| options | <code>\*</code> |  |

<a name="AdvancedPanScroll+init"></a>

### advancedPanScroll.init()
Initialize.

**Kind**: instance method of [<code>AdvancedPanScroll</code>](#AdvancedPanScroll)  
<a name="AdvancedPanScroll+bindEvents"></a>

### advancedPanScroll.bindEvents()
Bind event to element.

**Kind**: instance method of [<code>AdvancedPanScroll</code>](#AdvancedPanScroll)  
<a name="AdvancedPanScroll+onMouseDown"></a>

### advancedPanScroll.onMouseDown(e)
Function will be called when mouse move down.

**Kind**: instance method of [<code>AdvancedPanScroll</code>](#AdvancedPanScroll)  

| Param | Type |
| --- | --- |
| e | <code>\*</code> | 

<a name="AdvancedPanScroll+onMouseMove"></a>

### advancedPanScroll.onMouseMove(e)
Function will be called when mouse move.

**Kind**: instance method of [<code>AdvancedPanScroll</code>](#AdvancedPanScroll)  

| Param | Type |
| --- | --- |
| e | <code>\*</code> | 

<a name="AdvancedPanScroll+backroom"></a>

### advancedPanScroll.backroom()
**Kind**: instance method of [<code>AdvancedPanScroll</code>](#AdvancedPanScroll)  
**Author**: Y_z00  
<a name="AdvancedPanScroll+onMouseUp"></a>

### advancedPanScroll.onMouseUp()
Function will be called when mouse move up.

**Kind**: instance method of [<code>AdvancedPanScroll</code>](#AdvancedPanScroll)  
<a name="AdvancedPanScroll+onTouchStart"></a>

### advancedPanScroll.onTouchStart(e)
Called when the click action start.

**Kind**: instance method of [<code>AdvancedPanScroll</code>](#AdvancedPanScroll)  

| Param | Type |
| --- | --- |
| e | <code>HTMLElement</code> | 

<a name="AdvancedPanScroll+onTouchMove"></a>

### advancedPanScroll.onTouchMove(e)
Called when clicked.

**Kind**: instance method of [<code>AdvancedPanScroll</code>](#AdvancedPanScroll)  

| Param | Type |
| --- | --- |
| e | <code>HTMLElement</code> | 

<a name="AdvancedPanScroll+onTouchEnd"></a>

### advancedPanScroll.onTouchEnd()
Called when the click action ends.

**Kind**: instance method of [<code>AdvancedPanScroll</code>](#AdvancedPanScroll)  
<a name="AdvancedPanScroll+animate"></a>

### advancedPanScroll.animate()
Inertial animation.

**Kind**: instance method of [<code>AdvancedPanScroll</code>](#AdvancedPanScroll)  
<a name="AdvancedPanScroll+destroy"></a>

### advancedPanScroll.destroy()
Remove element pan mode.

**Kind**: instance method of [<code>AdvancedPanScroll</code>](#AdvancedPanScroll)  
