$(function () {
    let appid = ''
    let loginType = 0 
    let aid = ''
    // 获取appid
    $.get('https://baijiahao.baidu.com/builder/app/appinfo',function(res){
        try{
            appid = res.data.user.app_id || ''
            checkRegister();
        }catch(e){
            console.log(e);
            checkRegister();
        }
    })
    // 未注册检测
    function checkRegister(){
        if(window.location.href === 'https://baijiahao.baidu.com/builder/app/choosetype'){
            chrome.storage.sync.get('url-from-jm',(res)=>{
                console.log(res)
                if(res['url-from-jm'] === '1'){
                    tip('账号添加失败，该账号尚未完成入驻审核，请完成入驻后再进行添加', 1)
                    chrome.storage.sync.set({'url-from-jm':null})
                    return;
                }
            })
        }else{
            main()
        }
    }
    // 解决方案来源：https://www.cnblogs.com/parker-yu/p/9046463.html
    // setTimeout(function() { 
    //         // location.href = "javascript:document.body.setAttribute('jm-appid', MP.appInfo.appid);";
    //         // setTimeout(function() {
    //         //     appid = getAppid('百家号')
    //         //     main()
    //         // }, 600);
    // }, 400);

    function main(){
        
        // 登陆后获取用户头像以及昵称
        var plogo = $('.mp-header .mp-header-content .mp-header-user .author .avatar .portrait').attr('src')
        var pname = $('.mp-header .mp-header-content .mp-header-user .author .name').text()
        // 阈值
        var count = 0
        // 循环直到获取完整信息后,发送,清除循环
        var timeId = setInterval(function () {
            if (count < 10) {
                plogo = $('.mp-header .mp-header-content .mp-header-user .author .avatar .portrait').attr('src')
                pname = $('.mp-header .mp-header-content .mp-header-user .author .name').text()
                if (plogo && pname) {
                    clearInterval(timeId)
                    var obj = {
                        atype: 8,
                        plogo: plogo,
                        pname: pname,
                        appid
                        // ttype: loginType
                    }
                    sendMessageToBackground(obj)
                    return;
                }
                count++;
            } else {
                clearInterval(timeId)
            }
        }, 500)

        // 登录入口开始
        if ($.request.queryString['from_ext']) {
            var getInput = $('.tang-pass-login')[1]
            var timeId = setInterval(function () {
                getInput = $('.tang-pass-login')[1]
                // 循环等待DOM完成后,执行主体代码
                if (getInput !== undefined) {
                    clearInterval(timeId)
                    // 界面样式更改
                    loginMsg('百家号');
                    let ev = document.createEvent("MouseEvents");
                    ev.initEvent("click", true, true);
                    document.querySelector('.index-btn.index-btn-login.main-login').dispatchEvent(ev);
                    // 进入页面自动打开账密登陆方式
                    $('#pass-login-main').css('display','block')
                    $('#pass-login-main').css('visibility','visible')
                    $('#TANGRAM__PSP_4__sms').css('display','none')
                    $('#TANGRAM__PSP_4__sms').css('visibility','hidden')
                    $('#TANGRAM__PSP_4__qrcode').css('display','none')
                    $('#TANGRAM__PSP_4__qrcode').css('visibility','hidden')
                    // 扫码登陆按钮
                    $('#TANGRAM__PSP_4__footerQrcodeBtn').show();
                    $('#TANGRAM__PSP_4__footerULoginBtn').hide();
                    // $('#TANGRAM__PSP_4__footerQrcodeBtn').hide();
                    // 手机验证码添加账号
                    $('#TANGRAM__PSP_4__smsPhone').blur(function () {
                        loginType = 7;
                        var getMobile = $(this)[0].value
                        if (getMobile.length < 11) return
                        sendMessageToBackground({
                            bjaid: aid,
                            bjMobile: getMobile,
                            ttype: loginType
                        })
                    })
                    // 账密登陆添加账号
                    $('#TANGRAM__PSP_4__submit').click(function () {
                        let getMobile = $('#TANGRAM__PSP_4__userName').val();
                        let pwd = $('#TANGRAM__PSP_4__password').val();
                        loginType = 8;
                        sendMessageToBackground({
                            bjaid: aid,
                            bjMobile: getMobile,
                            bjPwd: pwd,
                            appid,
                            ttype: loginType
                        })
                    })
                    // 扫码登陆
                    $('.tang-pass-footerBarQrcode.pass-link').click(function(){
                        loginType = 9;
                        sendMessageToBackground({
                            bjaid: aid,
                            bjMobile: '',
                            ttype: loginType
                        })
                    })
                    

                    // 封装错误信息盒子
                    function errBox(err) {
                        infoMsg(err.notice);
                        aid =  err.aid
                            $('#TANGRAM__PSP_4__submit').click(function () {
                                // 手机号
                                let getMobile = $('#TANGRAM__PSP_4__userName').val();
                                sendMessageToBackground({
                                    bjaid: err.aid,
                                    bjMobile: getMobile
                                })
                            })
                            // $('#TANGRAM__PSP_4__smsPhone').val(err.uname)
                            // 表单按钮点击时(获取不到submit事件),将手机号与aid传入bg
                            $('#TANGRAM__PSP_4__smsSubmit').click(function () {
                                var mobile = null
                                var form = $(this).parent().parent()
                                var arr = $(form).serializeArray()
                                arr.forEach(item => {
                                    if (item.name === 'username') {
                                        mobile = item.value
                                        return false;
                                    }
                                })
                                sendMessageToBackground({
                                    bjaid: err.aid,
                                    bjMobile: mobile,
                                    appid
                                })
                            })
                            // $('body').on('click','#TANGRAM__PSP_4__footerQrcodeBtn', function(){
                            //     var obj = {
                            //         bjMobile: '',
                            //         bjaid: aid
                            //     }
                            //     sendMessageToBackground(obj)
                            // })
                            // $('body').on('click','#TANGRAM__PSP_4__smsSwitchWrapper', function(){
                            //     var obj = {
                            //         bjMobile: '',
                            //         bjaid: aid
                            //     }
                            //     sendMessageToBackground(obj)
                            // })
                        }
        
                    }

                    // 获取错误状态码,分辨位置
                    chrome.storage.sync.get('bjErrStatus', (res) => {
                        if (res.bjErrStatus === 1) { // 盒子一
                            chrome.storage.sync.get('bjErrMsgOne', (res) => {
                                errBox(res.bjErrMsgOne)
                            })
                        } else if (res.bjErrStatus === 2) { // 盒子二
                            chrome.storage.sync.get('bjErrMsgTwo', (res) => {
                                errBox(res.bjErrMsgTwo)
                            })
                        } else if (res.bjErrStatus === 3) { // 盒子三
                            chrome.storage.sync.get('bjErrMsgThree', (res) => {
                                errBox(res.bjErrMsgThree)
                            })
                        }
                    })
            }, 500)
        }
    }
})