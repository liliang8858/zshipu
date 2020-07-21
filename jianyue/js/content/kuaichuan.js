$(function () {
    let appid = '';
    let loginType = 8;
    let aid = '';
    // 解决方案来源：https://www.cnblogs.com/parker-yu/p/9046463.html
    $.get('http://kuaichuan.360.cn/user/detail',function(res){
        console.log(res)
        try{
            appid = res.data.user_info.id || ''
            main();
        }catch(e){
            console.log(e);
            main();
        }
    })
    // setTimeout(function() {
    //     location.href = "javascript:document.body.setAttribute('jm-appid', user.qid);";
    //     setTimeout(function() {
    //         appid = getAppid('快传号')
    //         main()
    //     }, 500);
    // }, 300);
    function main(){
        // 登陆后获取用户头像以及昵称
        var plogo = $('.userimg__image').attr('src')
        var pname = $('.username').text()
        // 阈值
        var count = 0

        // 循环直到获取完整信息后,发送,清除循环
        var timeId = setInterval(function () {
            if (count < 10) {
                plogo = $('.userimg__image').attr('src')
                pname = $('.username').text()
                if (plogo && pname) {
                    clearInterval(timeId)
                    var obj = {
                        atype: 25,
                        plogo: plogo,
                        pname: pname.trim(),
                        appid
                    }
                    sendMessageToBackground(obj)
                    return;
                }
                count++;
            } else {
                clearInterval(timeId)
            }
        }, 500)

        if ($.request.queryString['from_ext']) {
            // weibo
            $('body').on('click','i[data-third="sina"]',function(){
                loginType = 1
                sendMessageToBackground({
                    getKcAcc: '',
                    ttype: loginType,
                    kcaid: aid,
                })
            })
            // 手机验证码/账密切换按钮
            $('body').on('click','.quc-tab-item-inner',function(){
                // let acc = '';
                if($(this).html() === '短信登录'){
                    // alert('短信登录')
                    // acc = $('.quc-input inpt[name=mobile]').val();
                    loginType = 7
                }else if($(this).html() === '360帐号登录'){
                    // alert('360帐号登录')
                    // acc = $('.quc-input inpt[name=userName]').val();
                    loginType = 8
                }
            })
            $('body').on('click','.quc-button',function(){
                let acc = document.querySelector('.quc-input input').value;
                sendMessageToBackground({
                    getKcAcc: acc,
                    ttype: loginType,
                    kcaid: aid,
                })
            })
            // qq
            $('body').on('click','i[data-third="tencent"]',function(){
                loginType = 2
                sendMessageToBackground({
                    getKcAcc: '',
                    ttype: loginType,
                    kcaid: aid,
                })
            })
            // wx
            $('body').on('click','i[data-third="weixin"]',function(){
                loginType = 3
                sendMessageToBackground({
                    getKcAcc: '',
                    ttype: loginType,
                    kcaid: aid,
                })
            })
            // 界面样式更改
            loginMsg('快传号')

            // 样式阈值
            var styleCount = 0
            var styleId = setInterval(function () {
                if (styleCount < 10) {

                    // 循环获取页面元素
                    var clickElement = document.querySelectorAll('header > div div:nth-child(2) a')[1]

                    if (clickElement !== undefined) {

                        clearInterval(styleId)

                        // 脚本触发页面click事件
                        var clickEvent = document.createEvent("HTMLEvents");
                        clickEvent.initEvent("click", true, true);
                        clickElement.dispatchEvent(clickEvent);
                        // 修改样式
                        document.getElementsByClassName('quc-tab-item-inner')[1].dispatchEvent(clickEvent)
                        // $('.quc-panel-hd').css('display', 'none')
                        // $('.quc-third').css('display', 'none')
                        // $('.quc-left').css('display', 'none')

                        // $('.quc-form').submit(function (e) {
                        //     alert(222)
                        //     var getKcAcc = null
                        //     // var getKcPwd = null
                        //     var arr = $(this).serializeArray()
                        //     arr.forEach(item => {
                        //         if (item.name === 'userName') {
                        //             getKcAcc = item.value
                        //         } else if (item.name === 'mobile') {
                        //             getKcAcc = item.value
                        //         }
                        //     })
                        //     sendMessageToBackground({
                        //         getKcAcc: getKcAcc,
                        //         getKcPwd: '',
                        //         ttype: loginType
                        //     })
                        // });

                        // 封装错误信息盒子
                        function errBox(err) {
                            aid = err.aid
                            infoMsg(err.notice);
                            // $('input[name=userName]').val(err.uname)
                            // 表单提交时,将账号密码与aid传入bg
                            // $('.quc-form').submit(function () {
                            //     var getKcAcc = null
                            //     var getKcPwd = null
                            //     var arr = $(this).serializeArray()
                            //     arr.forEach(item => {
                            //         if (item.name === 'userName') {
                            //             getKcAcc = item.value
                            //         } else if (item.name === 'password') {
                            //             getKcPwd = item.value
                            //         }
                            //     })
                            //     sendMessageToBackground({
                            //         kcaid: err.aid,
                            //         getKcAcc: getKcAcc,
                            //         getKcPwd: getKcPwd,
                            //         appid,
                            //         type: err.type,
                            //         ttype : loginType
                            //     })
                            // });

                        }

                        // 获取错误状态码,分辨位置
                        chrome.storage.sync.get('kcErrStatus', (res) => {
                            if (res.kcErrStatus === 1) { // 盒子一
                                chrome.storage.sync.get('kcErrMsgOne', (res) => {
                                    errBox(res.kcErrMsgOne)
                                })
                            } else if (res.kcErrStatus === 2) { // 盒子二
                                chrome.storage.sync.get('kcErrMsgTwo', (res) => {
                                    errBox(res.kcErrMsgTwo)
                                })
                            } else if (res.kcErrStatus === 3) { // 盒子三
                                chrome.storage.sync.get('kcErrMsgThree', (res) => {
                                    errBox(res.kcErrMsgThree)
                                })
                            }
                        })

                    }
                    styleCount++;
                } else {
                    clearInterval(styleId)
                }
            }, 500)
        }
    }
})