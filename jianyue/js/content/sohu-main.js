$(function () {
    // 登陆后获取用户头像以及昵称
    var plogo = $('.user-pic').attr('src')
    var pname = $('.user-name').text()
    // 阈值
    var count = 0
    // 获取appid 搜狐号
    let appid = getAppid('搜狐号')
    // console.log(`appid: ${JSON.parse(window.localStorage.currentAccount).id}`)
    // 循环直到获取完整信息后,发送,清除循环
    var timeId = setInterval(function () {
        if (count < 10) {
            plogo = $('.user-pic').attr('src')
            pname = $('.user-name').text()
            if (pname && plogo) {
                clearInterval(timeId)
                var obj = {
                    atype: 3,
                    plogo: plogo,
                    pname: pname,
                    appid: JSON.parse(window.localStorage.currentAccount).id || ''
                }
                sendMessageToBackground(obj)
                return;
            }
            count++;
        } else {
            clearInterval(timeId)
            var obj = {
                atype: 3,
                plogo: plogo,
                pname: pname,
                appid: JSON.parse(window.localStorage.currentAccount).id  || ''
            }
            sendMessageToBackground(obj)
        }
    }, 500)
})
