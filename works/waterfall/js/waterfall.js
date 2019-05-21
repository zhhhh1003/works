/**
 * Created by cuijn on 2016/9/7.
 */

window.onload = function () {
    waterfall();
}

function waterfall() {
    var boxes = document.getElementsByClassName('box');
    var heightArr = [];
    var colCount = Math.floor(document.documentElement.clientWidth / boxes[0].offsetWidth);
    for (var i = 0; i < boxes.length; i++) {
        if (i < colCount) {
            //第一行
            heightArr.push(boxes[i].offsetHeight);
        } else {
            //从第二行开始的所有图片

            //1. 找到最小的那一列
            var minIndex = minInArray(heightArr);

            //2. 找到top和left
            var top = heightArr[minIndex];
            var left = boxes[minIndex].offsetLeft;

            //3. 设置图片的left和top
            boxes[i].style.position = 'absolute';
            boxes[i].style.left = left + 'px';
            boxes[i].style.top = top + 'px';

            //4. 更新最小高度的那一列的值
            heightArr[minIndex] += boxes[i].offsetHeight;
        }
    }
}

function minInArray(array) {
    var min = array[0];
    var minIndex = 0;

    for (var i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }
    }

    return minIndex;
}

