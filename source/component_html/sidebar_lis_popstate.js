window.addEventListener("popstate", function (event) {

    if (document.getElementById("body-viewer-iframe-1") != null) {
        this.document.getElementById("body-viewer-iframe-1").remove();
        document.getElementById("body-viewer-1").style.display = "none";
        document.getElementById("body-viewer-2").style.display = "block";
    }

    if (event.state == null) return;
    event.preventDefault();

    var src_Url_0 = new URL(event.state.page);
    var src_Url = src_Url_0.pathname.split("/");
    //这里i=1是因为第一位是空的
    for (let i = 1; i < src_Url.length; i++) {
        let element = document.querySelector('[classname_con_2="' + src_Url[i] + '"]');
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
        });
}, false);