$(function () {
    // if(document.referrer.indexOf('from_ext=true') !== -1){
        let loginType = 8; 
        let aid = '';
        let ev = document.createEvent("MouseEvents");
        ev.initEvent("click", true, true);
        document.querySelector('.vlognavid').dispatchEvent(ev);
        // $('.vlogboxMore').css('display', 'none')
        // 隐藏中国移动登陆
        $('.vlogboxMore .linkcmcc.linkcmcc_new').hide();
        // wx
        $('.vlogboxMore .linkqq').click(function(){
            loginType = 3
            sendInfo(aid)
        })
        // qq
        $('.vlogboxMore .linkqzone.linkqzone_new').click(function(){
            loginType = 2
            sendInfo(aid)
        })
        // weibo
        $('.vlogboxMore .linksina.linksina_new').click(function(){
            loginType = 1
            sendInfo(aid)
        })
        // 用户名密码登陆
        function sendInfo(aid) {
            var obj = {
                getDfAcc: $('#loginName').val(),
                getDfPwd: $('#loginPwd').val() || '',
                ttype: loginType
            }
            // 解决可以通过用户名登陆问题
            // if (obj.getDfAcc.length < 8 || obj.getDfPwd.length < 6) return
            // if (obj.getDfPwd.length < 6) return

            if (aid) {
                Object.assign(obj, {
                    dfaid: aid
                })
            }
            sendMessageToBackground(obj)
        }
        // 手机验证码登陆
        function sendInfoMobile(aid){
            loginType = 7;
            var obj = {
                getDfAcc: $('#loginname_phone').val(),
                getDfPwd: '',
                ttype: loginType
            }
            // 解决可以通过用户名登陆问题
            // if (obj.getDfAcc.length < 8 || obj.getDfPwd.length < 6) return
            // if (obj.getDfPwd.length < 6) return

            if (aid) {
                Object.assign(obj, {
                    dfaid: aid,
                })
            }
            sendMessageToBackground(obj)
        }

        $('#loginbtn').click(function () {
            loginType = 8;
            sendInfo()
        });

        $('#loginbtn_phone').click(function () {
            sendInfoMobile()
        });
        
        document.querySelector('iframe').ownerDocument.onkeydown = function (e) {
            if (e.keyCode === 13) {
                sendInfo()
            }
        }

        // 封装错误信息盒子
        function errBox(err) {
            aid  = err.aid
            infoMsg(err.notice);
            // $('#loginName').val(err.uname)
            // 提交按钮点击,将账号密码与aid传入bg
            $('#loginbtn').click(function () {
                sendInfo(err.aid)
            });
            $('#loginbtn_phone').click(function () {
                sendInfoMobile(err.aid)
            });
        }

        // 获取错误状态码,分辨位置
        chrome.storage.sync.get('dfErrStatus', (res) => {
            if (res.dfErrStatus === 1) { // 盒子一
                chrome.storage.sync.get('dfErrMsgOne', (res) => {
                    errBox(res.dfErrMsgOne)
                })
            } else if (res.dfErrStatus === 2) { // 盒子二
                chrome.storage.sync.get('dfErrMsgTwo', (res) => {
                    errBox(res.dfErrMsgTwo)
                })
            } else if (res.dfErrStatus === 3) { // 盒子三
                chrome.storage.sync.get('dfErrMsgThree', (res) => {
                    errBox(res.dfErrMsgThree)
                })
            }
        })
    // }
})