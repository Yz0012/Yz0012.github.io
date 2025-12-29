/**
 * 使用方法：ImageInfoHover.init('.image-container');
 */
//未经审核 标记为20251229_0
class ImageInfoHover {
    static defaultOptions = {
        showFormat: true,
        showOriginalSize: true,
        showDisplaySize: true,
        showAspectRatio: true,
        tooltipClass: 'image-info-tooltip',
        animation: true,
        delay: 100,
        refresh: false
    };

    static init(containerSelector, options = {}) {
        const config = { ...this.defaultOptions, ...options };
        const containers = document.querySelectorAll(containerSelector);
        
        if (containers.length === 0) {
            console.warn(`未找到容器: ${containerSelector}`);
            return;
        }
        
        containers.forEach(container => {
            this.setupContainer(container, config);
        });
    }

    static setupContainer(container, config) {
        const images = container.querySelectorAll('img');
        
        images.forEach(img => {
            // 防止重复初始化
            if (img.dataset.infoHoverInitialized || config.refresh) return;

            console.log(config.reflesh);
            
            const wrapper = this.createWrapper(img);
            const tooltip = this.createTooltip(config.tooltipClass);
            
            img.parentNode.insertBefore(wrapper, img);
            wrapper.appendChild(img);
            wrapper.appendChild(tooltip);
            
            this.setupImage(img, tooltip, config);
            
            img.dataset.infoHoverInitialized = 'true';
        });
    }

    static createWrapper(img) {
        const wrapper = document.createElement('div');
        wrapper.className = 'image-info-wrapper';
        wrapper.style.position = 'relative';
        wrapper.style.display = 'inline-block';
        return wrapper;
    }

    static createTooltip(className) {
        const tooltip = document.createElement('div');
        tooltip.className = className;
        tooltip.style.cssText = `
            position: absolute;
            bottom: 100%;
            left: 20%;
            transform: translateX(-50%);
            background: #1720279c;
            backdrop-filter: blur(5px);
            color: white;
            padding: 8px 12px;
            font-size: 12px;
            white-space: nowrap;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.2s, visibility 0.2s;
            pointer-events: none;
        `;
        
        tooltip.innerHTML = '<div>加载中...</div>';
        return tooltip;
    }

    static setupImage(img, tooltip, config) {
        let timeoutId;
        
        img.parentElement.addEventListener('mouseenter', () => {
            timeoutId = setTimeout(() => {
                this.updateTooltip(img, tooltip, config);
                this.showTooltip(tooltip, config);
            }, config.delay);
        });
        
        img.parentElement.addEventListener('mouseleave', () => {
            clearTimeout(timeoutId);
            this.hideTooltip(tooltip, config);
        });
        
        if (img.complete) {
            this.updateTooltip(img, tooltip, config);
        } else {
            img.addEventListener('load', () => {
                this.updateTooltip(img, tooltip, config);
            });
        }
    }

    static updateTooltip(img, tooltip, config) {
        const format = this.getImageFormat(img.src);
        const info = [];
        
        if (config.showOriginalSize) {
            info.push(`原始: ${img.naturalWidth}×${img.naturalHeight}px`);
        }
        
        if (config.showDisplaySize && img.width !== img.naturalWidth) {
            info.push(`显示: ${img.width}×${img.height}px`);
        }
        
        if (config.showAspectRatio) {
            info.push(`宽高比例: ${(img.naturalWidth / img.naturalHeight).toFixed(2)}`);
        }
        
        if (config.showFormat) {
            info.push(`格式: ${format}`);
        }
        
        tooltip.innerHTML = info.map(item => `<div>${item}</div>`).join('');
    }

    static getImageFormat(src) {
        const match = src.match(/\.(jpe?g|png|gif|webp|bmp|svg)/i);
        return match ? match[1].toUpperCase() : '未知';
    }

    static showTooltip(tooltip, config) {
        if (config.animation) {
            tooltip.style.opacity = '1';
            tooltip.style.visibility = 'visible';
        } else {
            tooltip.style.display = 'block';
        }
    }

    static hideTooltip(tooltip, config) {
        if (config.animation) {
            tooltip.style.opacity = '0';
            tooltip.style.visibility = 'hidden';
        } else {
            tooltip.style.display = 'none';
        }
    }
}


function init_imageinfohover(booleandata) {
    ImageInfoHover.init('#body-viewer-2', {
    showFormat: true,
    showOriginalSize: true,
    animation: true,
    delay: 200,
    reflesh:booleandata
});
}