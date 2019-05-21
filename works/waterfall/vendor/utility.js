/**
 * Created by cuijn on 2016/9/5.
 */

var utility = utility || {};    //单例模式的一种实现方式

utility.cookie = {
    set: function (name, value, expires) {
        var cookieStr = name + '=' + value;
        var now = new Date();
        now.setDate(now.getDate() + expires);
        cookieStr += ';expires=' + now;

        document.cookie = cookieStr;
    },
    get: function (name) {
        var cookies = document.cookie.split('; ');
        var key, val;
        for (var i = 0; i < cookies.length; i++) {
            var key_value = cookies[i].split('=');
            key = key_value[0];
            val = key_value[1];
            if (key === name) {
                return val;
            }
        }
        return '';
    },
    remove: function (name) {
        utility.cookie.set(name, '', -1);
    }
}

utility.style = {
    randomColor: function (el) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        el.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'

    }
}

utility.ajax = {
    get: function () {

    },
    post: function () {

    }
}
