$(function () {
    let appid = ''
    let loginType = 8;
    // 解决方案来源：https://www.cnblogs.com/parker-yu/p/9046463.html
    setTimeout(function() {
        location.href = "javascript:document.body.setAttribute('jm-appid', pageInfo.uid);";
        setTimeout(function() {
            appid = getAppid('北京时间')
            main()
        }, 500);
    }, 300);
    
    function main(){
        if ($.request.queryString['from_ext']) {
            $('.other-login').hide()
            // $('body').on('click','li.other-wx',function(){
            //     loginType = 3
            //     sendMessageToBackground({
            //         getBjAcc: '',
            //         ttype: loginType
            //     })
            // })
            // $('body').on('click','li.other-wb',function(){
            //     loginType = 1
            //     sendMessageToBackground({
            //         getBjAcc: '',
            //         ttype: loginType
            //     })
            // })
            // $('body').on('click','li.other-qq',function(){
            //     loginType = 2;
            //     sendMessageToBackground({
            //         getBjAcc: '',
            //         ttype: loginType
            //     })
            // })
            // 界面样式更改
            loginMsg('时间号')
            
            $('#login-btn').click(function () {
                var getBjAcc = $('.formItem input[name=user_name]').val()
                var getBjPwd = $('.formItem input[type=password]').val()
                if (getBjAcc.length < 8 || getBjPwd.length < 6) return;
                sendMessageToBackground({
                    getBjAcc: getBjAcc,
                    getBjPwd: getBjPwd,
                    ttype: loginType
                })
            })
            // 封装错误信息盒子
            function errBox(err) {
                infoMsg(err.notice);
                $('.formItem input[name=user_name]').val(err.uname)
                // 点击按钮时,将账号密码与aid传入bg
                $('#login-btn').click(function () {
                    var getBjAcc = $('.formItem input[name=user_name]').val()
                    var getBjPwd = $('.formItem input[type=password]').val()
                    if (getBjAcc.length < 8 || getBjPwd.length < 6) return;
                    sendMessageToBackground({
                        btimeaid: err.aid,
                        getBjAcc: getBjAcc,
                        getBjPwd: getBjPwd
                    })
                });
            }
            // 获取错误状态码,分辨位置
            chrome.storage.sync.get('btimeErrStatus', (res) => {
                if (res.btimeErrStatus === 1) { // 盒子一
                    chrome.storage.sync.get('btimeErrMsgOne', (res) => {
                        errBox(res.btimeErrMsgOne)
                    })
                } else if (res.btimeErrStatus === 2) { // 盒子二
                    chrome.storage.sync.get('btimeErrMsgTwo', (res) => {
                        errBox(res.btimeErrMsgTwo)
                    })
                } else if (res.btimeErrStatus === 3) { // 盒子三
                    chrome.storage.sync.get('btimeErrMsgThree', (res) => {
                        errBox(res.btimeErrMsgThree)
                    })
                }
            })
        } else {
            // 登陆后获取用户头像以及昵称
            var plogo = $('#userImg').attr('src')
            var pname = $('#userTextLiSpan').text() || $('.user-info-pic').text()
            // 阈值
            var count = 0
            // 循环直到获取完整信息后,发送,清除循环
            var timeId = setInterval(function () {
                if (count < 10) {
                    plogo = $('#userImg').attr('src') || null
                    pname = $('#userTextLiSpan').text() || $('.user-info-pic').text()
                    if (pname) {
                        clearInterval(timeId)
                        var obj = {
                            atype: 12,
                            plogo: plogo,
                            pname: pname,
                            appid
                        }
                        sendMessageToBackground(obj)
                    }
                    count++;
                } else {
                    clearInterval(timeId)
                }
            }, 500)
        }
    }
   
})