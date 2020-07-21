$(function () {
    let loginType = 0; // 账密登陆 验证码登陆
    let appid = ""
    let aid = ''
    // 解决方案来源：https://www.cnblogs.com/parker-yu/p/9046463.html
    setTimeout(function() {
        location.href = "javascript:document.body.setAttribute('jm-appid', globalConfig.utoken);";
        setTimeout(function() {
            appid = getAppid('大鱼号')
            if(window.location.href === 'https://mp.dayu.com/register.html'){
                chrome.storage.sync.get('url-from-jm',(res)=>{
                    if(res['url-from-jm'] === '1'){
                        tip('账号添加失败，该账号尚未完成入驻审核，请完成入驻后再进行添加', 1)
                        chrome.storage.sync.set({'url-from-jm':null})
                        return;
                    }
                })
            }else{
                main()
            }
        }, 500);
    }, 300);
    function main(){
        var count = 0
        // 登陆后获取用户头像以及昵称,循环直到获取完整信息后,发送,清除循环
        var timeId = setInterval(function () {
            if (count < 100) {
                var plogo = $('.header-user img').attr('src')
                var pname = $('.header-info .name').text()
                if (plogo && pname && appid) {
                    clearInterval(timeId)
                    var obj = {
                        atype: 5,
                        plogo: plogo,
                        pname: pname.trim(),
                        appid: appid
                    }
                    sendMessageToBackground(obj)
                    return;
                }
                count++;
            } else {
                clearInterval(timeId)
            }
        }, 500)
    
    
        // 判断是否从插件跳入,监听表单提交,获得用户账号密码
        if ($.request.queryString['from_ext']) {
            // 界面样式更改
            loginMsg('大鱼号')
            // 样式阈值
            var styleCount = 0
            var styleId = setInterval(function () {
                if (styleCount < 10) {
                    $('body').on('click','.loginPage-login_yt',function(e){
                        loginType = 5
                        sendMessageToBackground({
                            dyaid: aid,
                            getUcAcc: '',
                            ttype: loginType
                        })
                    })
                    // $('.loginPage-login_tab').eq(1).css('display', 'none')
                    // $('.loginPage-login_yt-container').css('display', 'none')
                    // $('.loginPage-login_register').css('display', 'none')
                    if ($('.loginPage-login_register')) {
                        clearInterval(styleId)
                        return
                    }
                    styleCount++;
                } else {
                    clearInterval(styleId)
                }
            }, 500)
            // 封装错误信息盒子
            function errBox(err) {
                aid = err.aid;
                infoMsg(err.notice);
                // $('#login_name').val(err.uname)
                // 提交按钮点击,将账号密码与aid传入bg
                $('.loginPage-login_yt').click(function () {
                    sendMessageToBackground({
                        dyaid: err.aid,
                        getUcAcc: '',
                    })
                })
            }

            // 获取错误状态码,分辨位置
            chrome.storage.sync.get('dyErrStatus', (res) => {
                if (res.dyErrStatus === 1) { // 盒子一
                    chrome.storage.sync.get('dyErrMsgOne', (res) => {
                        errBox(res.dyErrMsgOne)
                    })
                } else if (res.dyErrStatus === 2) { // 盒子二
                    chrome.storage.sync.get('dyErrMsgTwo', (res) => {
                        errBox(res.dyErrMsgTwo)
                    })
                } else if (res.dyErrStatus === 3) { // 盒子三
                    chrome.storage.sync.get('dyErrMsgThree', (res) => {
                        errBox(res.dyErrMsgThree)
                    })
                }
            })
        }
    }

    
    
})