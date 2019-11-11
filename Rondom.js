//随机整数
function randomInt(m, n) {
    return Math.floor(Math.random() * (m - n + 1) + n);
}

//随机RGB
function rondomRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'RGB(' + r + ', ' + g + ', ' + b + ')';
}

//随机十六进制颜色
function randomHexColor1() {
    var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    var color = ['#'];
    for (var i = 0; i < 6; i++) {
        var r = Math.floor(Math.random() * arr.length);
        color.push(arr[r]);
    }
    return color.join('');
}


