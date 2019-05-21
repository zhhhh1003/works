/**
 * Created by cuijn on 2016/9/7.
 */

//返回true，加载数据，更新页面
function needLoad() {
    var boxes = document.getElementsByClassName('box');
    var lastBox = boxes[boxes.length - 1];
    var offsetTop = lastBox.offsetTop;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var clientHeight = document.documentElement.clientHeight;

    return (offsetTop < scrollTop + clientHeight) ? true : false;
}

window.onscroll = function () {
    if (needLoad()) {
        //加载数据
        loadData();
    }
}

function loadData() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var imgs = JSON.parse(xhr.responseText);
                for (var i = 0; i < imgs.length; i++) {
                    var box = document.createElement('div');
                    box.className = 'box';
                    var pic = document.createElement('div');
                    pic.className = 'pic';
                    var img = document.createElement('img');
                    img.src = imgs[i].src;

                    box.appendChild(pic);
                    pic.appendChild(img);

                    document.getElementById('container').appendChild(box);
                }

                waterfall();
            }
        }
    }
    xhr.open('get', 'assets/imgs.json');
    xhr.send(null);
}
