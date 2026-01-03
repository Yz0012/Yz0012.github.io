/**
 * SimpleAnchorLinks - 轻量级锚点链接插件
 */
const SimpleAnchorLinks = {
    /**
     * 初始化锚点链接
     * @param {Object} options - 配置选项
     */
    init: function (options = {}) {
        const config = Object.assign({
            container: 'article, .content, main',
            selector: 'h1, h2, h3, h4, h5, h6',
            icon: '¶',
            className: 'anchor-link',
            scrollOffset: 20
        }, options);

        const containers = document.querySelectorAll(config.container);
        if (!containers.length) return;

        containers.forEach(container => {
            const headings = container.querySelectorAll(config.selector);

            headings.forEach(heading => {
                // 确保标题有ID
                let id = heading.id;
                if (!id) {
                    id = heading.textContent
                        .toLowerCase()
                        .replace(/\s+/g, '-')
                        .replace(/^-|-$/g, '');
                    heading.id = id;
                }

                // 跳过已有锚点的标题
                if (heading.querySelector(`.${config.className}`)) return;

                // 创建锚点链接
                const anchor = document.createElement('a');
                anchor.href = `#${id}`;
                anchor.className = config.className;
                anchor.innerHTML = config.icon;
                anchor.title = '锚点链接';

                // 添加点击事件
                anchor.addEventListener('click', (e) => {
                    e.preventDefault();

                    //reflesh url
                    var state_obj = { page: window.location.href, title: document.head.getElementsByTagName("title")[0].innerText };
                    window.history.replaceState(state_obj, '0', `#${id}`);

                    // 平滑滚动
                    const target = document.getElementById(id);
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - config.scrollOffset,
                            behavior: 'smooth'
                        });
                    }

                });

                // 添加到标题
                heading.style.position = 'relative';
                anchor.style.cssText = `
                    position: absolute;
                    left: -1.5em;
                    top: 50%;
                    transform: translateY(-50%);
                    opacity: 0.1;
                    text-decoration: none;
                    transition: opacity 0.1s;
                `;
                heading.appendChild(anchor);

                // 悬停效果
                heading.addEventListener('mouseenter', () => {
                    anchor.style.opacity = '1';
                });
                heading.addEventListener('mouseleave', () => {
                    anchor.style.opacity = '0.3';
                });
            });
        });
    },

    // /**
    //  * 复制文本到剪贴板
    //  * @param {string} text - 要复制的文本
    //  */
    // copyToClipboard: function (text) {
    //     const textarea = document.createElement('textarea');
    //     textarea.value = text;
    //     document.body.appendChild(textarea);
    //     textarea.select();
    //     document.execCommand('copy');
    //     document.body.removeChild(textarea);
    // },

    /**
     * 更新锚点（用于动态内容）
     */
    update: function (options = {}) {
        this.destroy();
        this.init(options);
    },

    /**
     * 销毁所有锚点
     */
    destroy: function () {
        const anchors = document.querySelectorAll('.anchor-link');
        anchors.forEach(anchor => anchor.remove());
    }
};

/**
 * 初始化锚点
 */
function init_autoanchorlink(options = {}) {
    SimpleAnchorLinks.init(options);
}

/**
 * 更新锚点
 */
function update_autoanchorlink(options = {}) {
    SimpleAnchorLinks.update(options);
}

/**
 * 销毁锚点
 */
function destroy_anchorlink() {
    SimpleAnchorLinks.destroy();
}