$(function () {
    let loginType = 8;
    let aid = '';
    let acc = '';
    let t = '账号登录' //登陆类型
    // 单页面定时器,专治不刷新
    var spaId = setInterval(function () {
        var path = window.location.pathname
        if (path.indexOf("main/first/") !== -1 || path.indexOf("create/") !== -1) {
            clearInterval(spaId)
            window.location.reload()
        }
    }, 1000)

    if ($.request.queryString['from_ext']) {
        // 界面样式更改
        loginMsg('搜狐号');
        $('body').on('click','.login-more .login-qq', function(e){
            loginType = 2
            sendMessageToBackground({
                shaid: aid,
                ttype: loginType,
                getShAcc: ''
            })
        })
        $('body').on('click','.login-more .login-sina', function(e){
            loginType = 1
            sendMessageToBackground({
                shaid: aid,
                ttype: loginType,
                getShAcc: ''
            })
        })
        $('body').on('click','.login-more .login-weixin', function(e){
            loginType = 3
            sendMessageToBackground({
                shaid: aid,
                ttype: loginType,
                getShAcc: ''
            })
        })
        $('body').on('click','.login-nav span', function(e){
            t = $(this).html();
        })
        
        // 异步样式获取
        let timer = setInterval(()=>{
            console.log('检测登陆按钮');
            // 搜狐是spa，检测登陆按钮是否存在后在绑定事件
            if($('button.login-btn').length){
                console.log('登陆按钮存在');
                clearInterval(timer);
                $('body').on('click','button.login-btn',function () {
                    if(t === '账号登录'){
                        loginType = 8;
                        acc = document.querySelector('.commmon-login-username input').value;
                    }else if(t === '手机登录'){
                        loginType = 7;
                        acc = document.querySelector('.phone-login-username input').value;
                    }
                    sendMessageToBackground({
                        shaid: aid,
                        ttype: loginType,
                        getShAcc: acc
                    })
                })
            }
            // 账号密码enter事件
            $(".commmon-login-password input[type=password]").keydown(function(e){
                if(e.keyCode == 13){
                    loginType = 8;
                    acc = document.querySelector('.commmon-login-username input').value;
                    sendMessageToBackground({
                        shaid: aid,
                        ttype: loginType,
                        getShAcc: acc
                    })
                }
            })
            // 手机验证码enter事件
            $(".phone-login-code input[type=text]").keydown(function(e){
                if(e.keyCode == 13){
                    loginType = 7;
                    acc = document.querySelector('.phone-login-username input').value;
                    sendMessageToBackground({
                        shaid: aid,
                        ttype: loginType,
                        getShAcc: acc
                    })
                }
            })
        },200)
            
        // 封装错误信息盒子
        function errBox(err) {
            aid = err.aid;
            infoMsg(err.notice);
        }

        // 获取错误状态码,分辨位置
        chrome.storage.sync.get('shErrStatus', (res) => {
            console.log(res)
            if (res.shErrStatus === 1) { // 盒子一
                chrome.storage.sync.get('shErrMsgOne', (res) => {
                    errBox(res.shErrMsgOne)
                })
            } else if (res.shErrStatus === 2) { // 盒子二
                chrome.storage.sync.get('shErrMsgTwo', (res) => {
                    errBox(res.shErrMsgTwo)
                })
            } else if (res.shErrStatus === 3) { // 盒子三
                chrome.storage.sync.get('shErrMsgThree', (res) => {
                    errBox(res.shErrMsgThree)
                })
            }
        })
    }
})
