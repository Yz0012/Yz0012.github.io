//未经审核 标记为20251227_0
const scrollContainer2 = document.getElementById('body-sidebar-lis-o-1');

// 为容器2添加带有延迟的隐藏/显示滚动条效果
let scrollbarTimeout;

scrollContainer2.addEventListener('mouseenter', function () {
  clearTimeout(scrollbarTimeout);
  this.classList.remove('hide-scrollbar');
});

scrollContainer2.addEventListener('mouseleave', function () {
  // 延迟300毫秒再隐藏滚动条，防止意外移出
  scrollbarTimeout = setTimeout(() => {
    this.classList.add('hide-scrollbar');
  }, 300);
});

// 初始化容器2为隐藏滚动条状态
scrollContainer2.classList.add('hide-scrollbar');

// 通用函数：为任何元素添加鼠标移出隐藏滚动条功能
function addScrollbarHideEffect(element, hideDelay = 0) {
    let timeoutId;

    element.addEventListener('mouseenter', function () {
        clearTimeout(timeoutId);
        this.classList.remove('hide-scrollbar');
    });

    element.addEventListener('mouseleave', function () {
        if (hideDelay > 0) {
            timeoutId = setTimeout(() => {
                this.classList.add('hide-scrollbar');
            }, hideDelay);
        } else {
            this.classList.add('hide-scrollbar');
        }
    });

    // 初始化状态
    element.classList.add('hide-scrollbar');

    // 返回一个函数，用于手动控制滚动条显示/隐藏
    return {
        showScrollbar: function () {
            clearTimeout(timeoutId);
            element.classList.remove('hide-scrollbar');
        },
        hideScrollbar: function () {
            element.classList.add('hide-scrollbar');
        },
        toggleScrollbar: function () {
            element.classList.toggle('hide-scrollbar');
        }
    };
}

addScrollbarHideEffect(scrollContainer2, 300);