$(function () {
    let loginType = 0;
    // 登陆后获取用户头像以及昵称
    var plogo = $('#userNick img').attr('src')
    var pname = $('.name').text()
    if(document.referrer.indexOf('https://om.qq.com/userAuth/omWxLoginCallback') !== -1){
        loginType = 3; // wx
    }else if(document.referrer.indexOf('https://om.qq.com/User/QHLCallBack') !== -1){
        loginType = 2; // qq
    }else{

    }
    if(window.location.href === 'https://om.qq.com/userReg/mediaType'){
        chrome.storage.sync.get('url-from-jm',(res)=>{
            if(res['url-from-jm'] === '1'){
                tip('账号添加失败，该账号尚未完成入驻审核，请完成入驻后再进行添加', 1)
                chrome.storage.sync.set({'url-from-jm':null})
                return;
            }
        })
    }else{
        chrome.storage.sync.get('url-from-jm',(res)=>{
            console.log(res)
            if(res['url-from-jm'] === '1'){
                // let jsonCookie = cookieToJson(document.cookie)
                // 获取appid 企鹅号
                let appid = getAppid('企鹅号');
                // 获取错误状态码,分辨位置
                chrome.storage.sync.get('qqErrStatus', (res) => {
                    console.log(res)
                    if (res.qqErrStatus === 1) { // 盒子一
                        chrome.storage.sync.get('qqErrMsgOne', (res) => {
                            errBox(res.qqErrMsgOne)
                        })
                    } else if (res.qqErrStatus === 2) { // 盒子二
                        chrome.storage.sync.get('qqErrMsgTwo', (res) => {
                            errBox(res.qqErrMsgTwo)
                        })
                    } else if (res.qqErrStatus === 3) { // 盒子三
                        chrome.storage.sync.get('qqErrMsgThree', (res) => {
                            errBox(res.qqErrMsgThree)
                        })
                    }else{
                        //添加账号
                        sendMessageToBackground({
                            getQqAcc: ''
                        })
                        if (plogo && pname) {
                            var obj = {
                                atype: 2,
                                plogo: plogo,
                                pname: pname,
                                ttype:loginType,
                                appid
                            }
                            sendMessageToBackground(obj)
                        }
                    }
                }) 
                // 封装错误信息盒子
                function errBox(err) {
                    if ($.request.queryString['from_ext']){
                        infoMsg(err.notice);
                    }
                    sendMessageToBackground({
                        qqaid: err.aid,
                        getQqAcc: '',
                        ttype:loginType
                    })
                    if (plogo && pname) {
                        var obj = {
                            atype: 2,
                            plogo: plogo,
                            pname: pname,
                            ttype:loginType,
                            appid
                        }
                        sendMessageToBackground(obj)
                    }
                }   
            }
        })
    }
})