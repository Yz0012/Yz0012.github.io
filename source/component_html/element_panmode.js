class AdvancedPanScroll {
    constructor(container, options = {}) {
        this.container = container;
        this.options = {
            speed: 1.5,
            inertia: true,
            inertiaFriction: 0.92,
            minInertiaSpeed: 0.5,
            ...options
        };

        this.isDragging = false;
        this.lastX = 0;
        this.lastY = 0;
        this.velocityX = 0;
        this.velocityY = 0;
        this.animationId = null;

        this.init();
    }

    init() {
        this.bindEvents();
        this.container.style.cursor = 'grab';
        this.container.style.userSelect = 'none';
        this.container.style.touchAction = 'none';
    }

    bindEvents() {
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.animate = this.animate.bind(this);

        this.container.addEventListener('mousedown', this.onMouseDown);
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);

        this.container.addEventListener('touchstart', this.onTouchStart);
        this.container.addEventListener('touchmove', this.onTouchMove, { passive: false });
        this.container.addEventListener('touchend', this.onTouchEnd);
    }

    onMouseDown(e) {
        if (e.button !== 0) return;

        this.isDragging = true;
        this.lastX = e.clientX;
        this.lastY = e.clientY;
        this.velocityX = 0;
        this.velocityY = 0;

        this.container.style.cursor = 'grabbing';
        e.preventDefault();

        // 停止惯性动画
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    onMouseMove(e) {
        if (!this.isDragging) return;

        const deltaX = (this.lastX - e.clientX) * this.options.speed;
        const deltaY = (this.lastY - e.clientY) * this.options.speed;

        this.container.scrollLeft += deltaX;
        this.container.scrollTop += deltaY;

        // 记录速度用于惯性
        this.velocityX = deltaX;
        this.velocityY = deltaY;

        this.lastX = e.clientX;
        this.lastY = e.clientY;

        //彩蛋
        if (deltaX > 150) {
            this.backroom();
        }
    }

    backroom() {
        history.pushState(null, null, '/secret/æˆ‘ä¸å®³æ€•.html');
        window.location.href = "/secret/error.html";
    }

    onMouseUp() {
        if (!this.isDragging) return;

        this.isDragging = false;
        this.container.style.cursor = 'grab';

        // 启动惯性动画
        if (this.options.inertia &&
            (Math.abs(this.velocityX) > this.options.minInertiaSpeed ||
                Math.abs(this.velocityY) > this.options.minInertiaSpeed)) {
            this.animate();
        }
    }

    onTouchStart(e) {
        if (e.touches.length !== 1) return;

        this.isDragging = true;
        this.lastX = e.touches[0].clientX;
        this.lastY = e.touches[0].clientY;
        this.velocityX = 0;
        this.velocityY = 0;

        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    onTouchMove(e) {
        if (!this.isDragging || e.touches.length !== 1) return;

        const deltaX = (this.lastX - e.touches[0].clientX) * this.options.speed;
        const deltaY = (this.lastY - e.touches[0].clientY) * this.options.speed;

        this.container.scrollLeft += deltaX;
        this.container.scrollTop += deltaY;

        this.velocityX = deltaX;
        this.velocityY = deltaY;

        this.lastX = e.touches[0].clientX;
        this.lastY = e.touches[0].clientY;

        e.preventDefault();
    }

    onTouchEnd() {
        if (!this.isDragging) return;

        this.isDragging = false;

        if (this.options.inertia &&
            (Math.abs(this.velocityX) > this.options.minInertiaSpeed ||
                Math.abs(this.velocityY) > this.options.minInertiaSpeed)) {
            this.animate();
        }
    }

    animate() {
        if (Math.abs(this.velocityX) < 0.1 && Math.abs(this.velocityY) < 0.1) {
            this.velocityX = 0;
            this.velocityY = 0;
            return;
        }

        this.container.scrollLeft += this.velocityX;
        this.container.scrollTop += this.velocityY;

        this.velocityX *= this.options.inertiaFriction;
        this.velocityY *= this.options.inertiaFriction;

        this.animationId = requestAnimationFrame(this.animate);
    }

    destroy() {
        this.container.removeEventListener('mousedown', this.onMouseDown);
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
        this.container.removeEventListener('touchstart', this.onTouchStart);
        this.container.removeEventListener('touchmove', this.onTouchMove);
        this.container.removeEventListener('touchend', this.onTouchEnd);

        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }

        this.container.style.cursor = '';
        this.container.style.userSelect = '';
        this.container.style.touchAction = '';
    }
}

let advancedScroll;
let advancedScroll_1;

function enableAdvanced(elementId) {
    if (advancedScroll) {
        advancedScroll.destroy();
        advancedScroll = null;
        return;
    }

    const container = document.getElementById(elementId);
    advancedScroll = new AdvancedPanScroll(container, {
        speed: 1.2,
        inertia: true,
        inertiaFriction: 0.95
    });
}

function enableAdvanced_1() {
    if (advancedScroll_1) {
        advancedScroll_1.destroy();
        advancedScroll_1 = null;
        return;
    }

    const container = document.getElementsByTagName('html')[0];
    advancedScroll_1 = new AdvancedPanScroll(container, {
        speed: 1.2,
        inertia: true,
        inertiaFriction: 0.95
    });
}