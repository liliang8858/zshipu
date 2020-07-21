$(function () {
    let appid = ''
    let loginType = 8; // 网易默认只有账密登陆
    // 解决方案来源：https://www.cnblogs.com/parker-yu/p/9046463.html
    setTimeout(function() {
        location.href = "javascript:document.body.setAttribute('jm-appid', location.hash.split('wemediaId=')[1]);";
        setTimeout(function() {
            appid = getAppid('网易号')
            main()
        }, 500);
    }, 300);

    function main(){
        var plogo = $('.user-photo img').attr('src')
        var pname = $('.user-info-name a').text() || $('#loginUser').text()
        let appid = getAppid('网易号')
        // 阈值
        var count = 0
        // 循环直到获取完整信息后,发送,清除循环
        var timeId = setInterval(function () {
            if (count < 10) {
                plogo = $('.user-photo img').attr('src') || null
                pname = $('.user-info-name a').text() || $('#loginUser').text()
                if (pname) {
                    clearInterval(timeId)
                    var obj = {
                        atype: 1,
                        plogo: plogo,
                        pname: pname,
                        appid,
                        ttype: loginType
                    }
                    sendMessageToBackground(obj)
                }
                count++;
            } else {
                clearInterval(timeId)
            }
        }, 500)
    
        if ($.request.queryString['from_ext']) {
            // 界面样式更改
            loginMsg('网易号') 
        }
    }
    // 封装错误信息盒子
    function errBox(err) {
        if ($.request.queryString['from_ext']){
            infoMsg(err.notice);
        }
    }

    // 获取错误状态码,分辨位置
    chrome.storage.sync.get('wyErrStatus', (res) => {
        if (res.wyErrStatus === 1) { // 盒子一
            chrome.storage.sync.get('wyErrMsgOne', (res) => {
                errBox(res.wyErrMsgOne)
            })
        } else if (res.wyErrStatus === 2) { // 盒子二
            chrome.storage.sync.get('wyErrMsgTwo', (res) => {
                errBox(res.wyErrMsgTwo)
            })
        } else if (res.wyErrStatus === 3) { // 盒子三
            chrome.storage.sync.get('wyErrMsgThree', (res) => {
                 errBox(res.wyErrMsgThree)
            })
        }
    })
})