window.addEventListener("popstate", function (event) {

    if (document.getElementById("body-viewer-iframe-1") != null) {
        this.document.getElementById("body-viewer-iframe-1").remove();
        document.getElementById("body-viewer-1").style.display = "none";
        document.getElementById("body-viewer-2").style.display = "block";
    }

    var src_Url_0 = new URL(event.state.page);
    var src_Url = src_Url_0.pathname.split("/");
    //这里i=1是因为第一位是空的
    for (let i = 1; i < src_Url.length; i++) {
        let element = document.querySelector('[classname_con_2="' + src_Url[i] + '"]');
        bodySidebarLis_datastorage = element;
        element.setAttribute("booleandata", true);
        //refresh or init
        if (i == (src_Url.length - 1)) {
            setLisContextStyle(element, false);
        } else {
            setLisContentStyle(element, false);
        }

    }

    fetch(event.state.page)
        .then(response => response.text())
        .then(html => {

            // Initialize the DOM parser
            const parser = new DOMParser()

            // get target
            let element = document.getElementById("body-viewer-2");
            // Parse the text
            const doc = parser.parseFromString(html, "text/html")

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

            //每次点击后都需要重新载入docs_m_updateWindow
            removeocsmupdateiframeWindow();

            init_imageinfohover(true);
            //生成本文内容
            createtitle();

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
        });
}, false);