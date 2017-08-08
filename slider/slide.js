/**
 * Created by 云雪 on 2017/8/8.
 */
window.onload = function () {
    var img_list = document.getElementById('img_list');
    var container = document.getElementById('container');
    var origin = document.getElementById('origin').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;

    function stop() {
        clearInterval(timer);
    }

    function originShow() {
        //这里需要清除之前的样式
        for (var i = 0; i < origin.length; i++) {
            if (origin[i].className == 'on') {
                origin[i].className = '';
            }
        }
        origin[index - 1].className = 'on';
    }

    for (var i = 0; i < origin.length; i++) {
        // 这里使用的是立即执行函数，
        (function (i) {
            origin[i].onclick = function () {
                var clickIndex = parseInt(this.getAttribute('index'));
                var offset = 400 * (index - clickIndex);
                change(offset);
                index = clickIndex;
                originShow();
            }
        })(i);
    }
    function change(offset) {
        //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
        //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
        var newLeft = parseInt(img_list.style.left) + offset;
        if (newLeft > 0) {
            newLeft = -1600;
        }
        if (newLeft < -1600) {
            newLeft = 0;
        }
        img_list.style.left = newLeft + 'px';
    }

    prev.onclick = function () {
        index -= 1;
        if (index < 1) {
            index = 5;
        }
        originShow();
        change(400);
    }
    next.onclick = function () {
        index += 1;
        if (index > 5) {
            index = 1;
        }
        originShow();
        change(-400);
    }
    var timer;

    function play() {
        timer = setInterval(function () {
            next.onclick()
        }, 1500)
    }

    container.onmouseover = stop;
    container.onmouseout = play;
    play();
}