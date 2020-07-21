$(function () {
    let logintype = 0;
    let aid = '';
    // 判断是否从插件进入
    // if(document.referrer === 'https://mp.dayu.com/?from_ext=true'){
        $('#historyUserlist').remove();
        $('#suggestHistoryUserlist').remove();
        $('#submit_btn').click(function(){
            if($('#login_name').attr('maxlength') === '100'){
                logintype = 8;
            }else if($('#login_name').attr('maxlength') === '11'){
                logintype = 7;
            }
            let acc = $('#login_name').val();
            sendMessageToBackground({
                dyaid:aid,
                getUcAcc: acc,
                ttype: logintype // 手机号账密 logintype 为0
            })
        })
        // $('#login_name').blur(function () {
        //     if($(this).attr('maxlength') === '100'){
        //         logintype = 8;
        //     }else if($(this).attr('maxlength') === '11'){
        //         logintype = 7;
        //     }
        //     var getUcAcc = $(this).val()
        //     if (getUcAcc.length < 8) return;
        //     sendMessageToBackground({
        //         getUcAcc: getUcAcc,
        //         ttype: logintype // 手机号账密 logintype 为0
        //     })
        // })
        // $('#password').blur(function () {
        //     var getUcPwd = $(this).val()
        //     var reg = '^(?=.*[0-9])(?=.*[a-zA-Z])(.{6,20})$'
        //     if (getUcPwd.match(reg) === null) return;
        //     sendMessageToBackground({
        //         getUcPwd: getUcPwd
        //     })
        // })
    // }
    // 封装错误信息盒子
    function errBox(err) {
        aid = err.aid
        // $('#login_name').val(err.uname)
        // 提交按钮点击,将账号密码与aid传入bg
        // $('#submit_btn').click(function () {
        //     var dyErrAcc = $('#login_name').val()
        //     var dyErrPwd = $('#password').val()
        //     sendMessageToBackground({
        //         dyaid: err.aid,
        //         getUcAcc: dyErrAcc,
        //         getUcPwd: dyErrPwd,
        //         ttype: 0 // 点击登陆按钮只有账号密码和手机号验证情况
        //     })
        // })
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
})