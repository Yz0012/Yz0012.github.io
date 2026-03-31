window.addEventListener("popstate", function (event) {

    if (event.state == null) return;

    fetch(event.state.page)
        .then(response => response.text())
        .then(async html => {
            // Initialize the DOM parser
            const parser = new DOMParser()

            // get target
            let element = document.getElementById("body-viewer-2");
            // Parse the text
            const doc = parser.parseFromString(html, "text/html")

            updateSidebarList(doc);

            let graph_javascript = doc.getElementById("graph_javascript");

            //remove original element
            element.innerHTML = "";

            document.getElementById("body-viewer-2").appendChild(doc.getElementById("body_0"));

            // reflesh giscus and katex and hljs

            // giscus
            //append to target element
            let giscus = document.getElementById("giscus_0");
            if (giscus != null) {
                giscus.remove();
            }
            // create new giscus
            let giscus_0 = document.createElement("script");
            giscus_0.src = "https://giscus.app/client.js";
            giscus_0.setAttribute("data-repo", "Yz0012/Yz0012.github.io");
            giscus_0.setAttribute("data-repo-id", "R_kgDOPR4k8A");
            giscus_0.setAttribute("data-category", "General");
            giscus_0.setAttribute("data-category-id", "DIC_kwDOPR4k8M4Cx9vy");
            giscus_0.setAttribute("data-mapping", "pathname");
            giscus_0.setAttribute("data-strict", "0");
            giscus_0.setAttribute("data-reactions-enabled", "1");
            giscus_0.setAttribute("data-emit-metadata", "0");
            giscus_0.setAttribute("data-input-position", "top");
            giscus_0.setAttribute("data-theme", "dark");
            giscus_0.setAttribute("data-lang", "zh-CN");
            giscus_0.setAttribute("crossorigin", "anonymous");
            giscus_0.setAttribute("async", "");
            document.getElementById("body_0").appendChild(giscus_0);

            //katex
            if (renderMathInElement != null) {
                renderMathInElement(document.body, {
                    delimiters: [
                        { left: '$$', right: '$$', display: true },
                        { left: '$', right: '$', display: false },
                        { left: '\\(', right: '\\)', display: false },
                        { left: '\\[', right: '\\]', display: true }
                    ],
                    throwOnError: true
                });
            }

            //hljs
            hljs.highlightAll();

            init_imageinfohover(true);

            //检测文档是否有函数图像组件
            if (doc.getElementById('js_file_newElm_') != null && document.getElementById('js_file_newElm_1') == null) {
                //防止重复执行
                if (this.document.getElementById('js_file_newElm_') == null) {
                    let newElm_js_1 = document.createElement('script');
                    newElm_js_1.src = doc.getElementById('js_file_newElm_').src;
                    newElm_js_1.id = 'js_file_newElm_1';
                    document.body.appendChild(newElm_js_1);
                }
            }

            if (graph_javascript != null) {
                if (document.getElementById('graph_javascript_1') == null) {
                    let newElm_graph_javascript_2 = document.createElement('script');
                    newElm_graph_javascript_2.innerHTML = graph_javascript.innerHTML;
                    newElm_graph_javascript_2.id = 'graph_javascript_1';
                    document.body.appendChild(newElm_graph_javascript_2);
                } else {
                    document.getElementById('graph_javascript_1').innerHTML = '';
                    document.getElementById('graph_javascript_1').appendChild(graph_javascript);
                }
            }

            graph_javascript = null;

            //更新锚点
            update_autoanchorlink({
                container: '#wrap_0',
                selector: 'h1, h2, h3, h4, h5, h6',
                icon: '¶',
                scrollOffset: 100
            });

            setTimeout(() => {
                //在页面加载完成后，自动刷新列表
                listToggleRefreshEvent(this.document.querySelector('[classname_con_2="' + getCurrentHtmlName() + '"]'));
                //更新当前页面的Anchor节点
                updateAnchorDisplayByPopstate(getExtractFileName(event.state.page));
                //更新面包屑导航
                breadcrumb.innerHTML = document.querySelector('[classname_con_2="' + getExtractFileName(event.state.page) + '"]').getAttribute('href');
            }, 10);
        });
}, false);

function updateSidebarList(doc) {
    let wfa561 = document.createElement("script");
    wfa561.id = "lisfetch_1";
    this.document.getElementById('lisfetch_1').remove();
    wfa561.innerHTML = doc.getElementById('lisfetch_1').innerHTML;
    this.document.body.appendChild(wfa561);

}