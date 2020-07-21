$(function () {
    let appid = ''
    let loginType = 8; // 默认为账密登陆
    let aid = ''
    // 解决方案来源：https://www.cnblogs.com/parker-yu/p/9046463.html
    setTimeout(function() {
        // if(window.hasOwnProperty('yidianuser')&& window.yidianuser.hasOwnProperty('uid')){
            location.href = "javascript:document.body.setAttribute('jm-appid', window.yidianuser.uid);";
            setTimeout(function() {
                appid = getAppid('一点号')
                main()
            }, 500);
        // }else{
        //     main()
        // }
    }, 300);
    function main(){
        // 登陆后获取用户头像以及昵称
        var plogo = $('.avatar').attr('src') || null
        var pname = $('.user-name').text() || $('.user-name span').text()
        if (pname) {
            sendMessageToBackground({
                atype: 4,
                plogo: plogo,
                pname: pname,
                appid
            })
        }
        if ($.request.queryString['from_ext']) {
            $('body').on('click','button.mp-btn-primary',function(){
                if($('input[name=userMobile]').css('display')){
                    let acc = $('input[name=userMobile]').val();
                    loginType = 7;
                    sendMessageToBackground({
                        ydaid: aid,
                        getYdAcc: acc,
                        getYdPwd: '',
                        appid,
                        ttype: loginType
                    })
                }else if($('input[name=username]').css('display')){
                    let acc = $('input[name=username]').val();
                    loginType = 8;
                    sendMessageToBackground({
                        ydaid: aid,
                        getYdAcc: acc,
                        getYdPwd: '',
                        appid,
                        ttype: loginType
                    })
                }else{
                    let acc = $('input[name=username]').val();
                    loginType = 8;
                    sendMessageToBackground({
                        ydaid: aid,
                        getYdAcc: acc,
                        getYdPwd: '',
                        appid,
                        ttype: loginType
                    })
                }
            })
            $('body').on('click','.login-type .login-type-item.qq',function(){
                loginType = 2
                // 设置从简媒跳转过来跳转，在www.yidianzixun.com获取
                chrome.storage.sync.set({"yiidan_from": 'jm'})
                sendMessageToBackground({
                    ydaid: aid,
                    getYdAcc: '',
                    getYdPwd: '',
                    appid,
                    ttype: loginType
                })
            })
            // 界面样式更改
            loginMsg('一点号')
            // 脚本触发页面click事件
            var clickElement = document.querySelectorAll('.show-login')[0]
            // var clickElement = document.querySelectorAll('.mp-btn')[0]
            var clickEvent = document.createEvent("HTMLEvents");
            clickEvent.initEvent("click", true, true);
            clickElement.dispatchEvent(clickEvent);
            setTimeout(function () {
                $('.login-type .login-type-item.xiaomi').hide();
                $('.login-type .login-type-item.weibo').hide();
                $('body').on('click','button[type=submit]',function () {
                    let acc = document.querySelectorAll('input')[0].value;
                    var getYdPwd = $('input[name=password]').val()
                    sendMessageToBackground({
                        getYdAcc: acc || '',
                        getYdPwd: getYdPwd,
                        appid,
                        ttype:loginType
                    })
                });

            }, 100)

            // 封装错误信息盒子
            function errBox(err) {
                infoMsg(err.notice);
                aid = err.aid
                // 按钮点击时,将账号密码与aid传入bg
                $('button[type=submit]').click(function () {
                    var getYdAcc = $('input[name=username]').val()
                    var getYdPwd = $('input[name=password]').val()
                    // if (getYdAcc.length <= 8 || getYdPwd.length < 8) return;
                    sendMessageToBackground({
                        ydaid: err.aid,
                        getYdAcc: getYdAcc,
                        getYdPwd: getYdPwd,
                        appid,
                        ttype: loginType
                    })
                });
            }
            // 获取错误状态码,分辨位置
            chrome.storage.sync.get('ydErrStatus', (res) => {
                if (res.ydErrStatus === 1) { // 盒子一
                    chrome.storage.sync.get('ydErrMsgOne', (res) => {
                        errBox(res.ydErrMsgOne)
                    })
                } else if (res.ydErrStatus === 2) { // 盒子二
                    chrome.storage.sync.get('ydErrMsgTwo', (res) => {
                        errBox(res.ydErrMsgTwo)
                    })
                } else if (res.ydErrStatus === 3) { // 盒子三
                    chrome.storage.sync.get('ydErrMsgThree', (res) => {
                        errBox(res.ydErrMsgThree)
                    })
                }
            })
        }
    }
})
