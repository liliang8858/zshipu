$(function () {
    // 登陆后获取用户头像以及昵称
    var pname = $('.right-warp div span').text()
    // 阈值
    var count = 0
    // 循环直到获取完整信息后,发送,清除循环
    var timeId = setInterval(function () {
        if (count < 10) {
            pname = $('.right-warp div span').text()
            if (pname) {
                clearInterval(timeId)
                var obj = {
                    atype: 3,
                    plogo: null,
                    pname: pname
                }
                sendMessageToBackground(obj)
                return;
            }
            count++;
        } else {
            clearInterval(timeId)
            var obj = {
                atype: 3,
                plogo: null,
                pname: pname
            }
            sendMessageToBackground(obj)
        }
    }, 500)
})