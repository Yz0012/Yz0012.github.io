---
title : 站点文档_markdown中的元数据
path : docs\htmlDoc\html_sitedoc\
type : 站点文档
createTime : Thu, 11 Dec 2025 14:38:22 GMT
---

## 站点文档_markdown中的元数据

!%&注意&{本文为站点文档，其中可能含有未经诠释的信息。若其中信息已过时，则该文档可能会被删除}

<p></p>

!%&耦合&{本文档与genDoc.js产生耦合，修改时注意}

站点中markdown文件使用YAML格式作为其元数据标签，标签被定义在markdown文件头部。目前规定其YAML标签具有以下属性：

|属性|类型|注释|
|:-----|:-----|:-----|
|title|字符串|genDoc.js生成文档时被调用|
|path|字符串|genDoc.js生成文档时被调用|
|type|字符串|genDoc.js生成文档时被调用|
|createTime|字符串|genDoc.js生成文档时被调用|

*   title属性在genDoc.js中被调用至通过`document.createElement`创建的带有`title`标签的html元素中，以生成文档标题

*   path属性在genDoc.js中为<br>
    `mkdirSync()`提供参数path: PathLike<br>
    `writeFileSync()`提供参数file: PathOrFileDescriptor<br>

    path指输出文件夹路径

*   type属性在genDoc.js中为<br>
    `type_0.innerHTML`提供数据

    !#&信息&{若metadata不存在，则会以`fileName.split("_")[0]`的形式为`type_0.innerHTML`提供数据}

*   createTime属性在genDoc.js中为<br>
    `timeData_01.innerHTML`提供数据

### 获取metadata

站点使用`gray-matter`库直接读取元数据

### 耦合关系

*   title属性与genFiles\genDoc.js中<br>
    `title.innerHTML`<br>
    `console.log()`<br>

*   path属性与genFiles\genDoc.js中<br>
    `mkdirSync()`<br>
    `writeFileSync()`<br>
    `console.log()`<br>

*   type属性与genFiles\genDoc.js中<br>
    `type_0.innerHTML`<br>

*   createTime属性与genFiles\genDoc.js中<br>
    `timeData_01.innerHTML`<br>