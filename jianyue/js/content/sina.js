$(function () {
    let appid = ''
    let loginType = 8;
    // 解决方案来源：https://www.cnblogs.com/parker-yu/p/9046463.html
    setTimeout(function() {
        location.href = "javascript:document.body.setAttribute('jm-appid', mConfig.id);";
        setTimeout(function() {
            appid = getAppid('新浪看点')
            main()
        }, 500);
    }, 300);

    function main(){
        // 扫码
        $('.page1_login_nav a').eq(1).click(function(){
            loginType = 9;
            sendMessageToBackground({
                getXlAcc: '',
                ttype: loginType
            })
        })
        // 登陆后获取用户头像以及昵称
        var plogo = $('.img_width').attr('src');
        var pname = $('.user_box_a_s').text().trim();
        if (plogo && pname) {
            var obj = {
                atype: 9,
                plogo: plogo,
                pname: pname,
                appid
            }
            sendMessageToBackground(obj)
            return;
        }

        // 判断是否从插件跳入,监听表单提交,获得用户账号密码
        if ($.request.queryString['from_ext']) {
            $('.page1_login_li.error').css('display', 'none')
            // 界面样式更改
            loginMsg('新浪看点号')

            $('.page1_con_h1').addClass('active1')
            $('.page1_con_h2').addClass('active1')
            $('.page1_con_h3').addClass('active1')
            $('.page1_login').removeClass('active1')
            $('.record_s').css('display', 'none')
            $('.tip').css('display', 'none')
            $('.login_btn').click(function () {
                var acc = $('.user_id .login_ipt').val();
                // var pwd = $('.user_pas .login_ipt').val();
                sendMessageToBackground({
                    getXlAcc: acc,
                    appid,
                    ttype: loginType
                })
            })
            $(".page1_login_li input").keydown(function(e){
                if(e.keyCode == 13){
                    var acc = $('.user_id .login_ipt').val();
                    sendMessageToBackground({
                        getXlAcc: acc,
                        appid,
                        ttype: loginType
                    })
                }
            })

            // 封装错误信息盒子
            function errBox(err) {
                $('body').attr('aid',err.aid)
                $('body').attr('aname',err.uname)
                infoMsg(err.notice);
                // $('.user_id .login_ipt').val(err.uname)
                // 脚本触发页面change事件
                var inputElement = document.querySelector(".user_id .login_ipt");
                var changeEvent = document.createEvent("HTMLEvents");
                changeEvent.initEvent("change", true, true);
                inputElement.dispatchEvent(changeEvent);

                // 表单提交时,将手机号与aid传入bg
                $('.login_btn').click(function () {
                    var xlErrAcc = $('.user_id .login_ipt').val()
                    var xlErrPwd = $('.user_pas .login_ipt').val()
                    sendMessageToBackground({
                        xlaid: err.aid,
                        getXlAcc: xlErrAcc,
                        getXlPwd: xlErrPwd,
                        appid,
                        ttype: loginType
                    })
                })
                // 验证码登陆
                $('.page1_login_nav a').eq(1).click(function(){
                    sendMessageToBackground({
                        xlaid: err.aid,
                        getXlAcc: '',
                        ttype: loginType
                    })
                })
            }

            // 获取错误状态码,分辨位置
            chrome.storage.sync.get('xlErrStatus', (res) => {
                if (res.xlErrStatus === 1) { // 盒子一
                    chrome.storage.sync.get('xlErrMsgOne', (res) => {
                        errBox(res.xlErrMsgOne)
                        
                    })
                } else if (res.xlErrStatus === 2) { // 盒子二
                    chrome.storage.sync.get('xlErrMsgTwo', (res) => {
                        errBox(res.xlErrMsgTwo)
                    })
                } else if (res.xlErrStatus === 3) { // 盒子三
                    chrome.storage.sync.get('xlErrMsgThree', (res) => {
                        errBox(res.xlErrMsgThree)
                    })
                }
            })
        }
    }
})