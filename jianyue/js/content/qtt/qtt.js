let timer; // 用户信息获取定时器
let aid;
let loginType = 8;//默认账密登陆
if ($.request.queryString['from_ext']) {
    loginMsg('趣头条');
    $('body').on('click','#submit-login',function(e){
        let acc = $('.el-form-item__content input').val()
        sendMessageToBackground({
            qttAcc:acc
        }) 
    })
}
// 此页面在html文档加载完成后获取头条和用户名为空，可能是某个接口响应后才去设置，故使用循环获取
// setTimeout(function(){
    chrome.storage.sync.get('url-from-jm',(res)=>{
        if(res['url-from-jm'] === '1'){
            timer = setInterval(()=>{
                // try{
                    let appid = getAppid('趣头条');
                    let avatar = '';
                    let name = '';
                    if(document.querySelector('.avatar')){
                        avatar = document.querySelector('.avatar').getAttribute('src') || '';
                    }
                    if(document.querySelector('.right-name')){
                        name = document.querySelector('.right-name').innerText;
                    }
                    if(appid && avatar && name){
                        console.log('获取信息成功')
                        clearInterval(timer);
                        var obj = {
                            aid:aid ||  '',
                            atype: 23,
                            plogo: avatar,
                            pname: name,
                            appid,
                            ttype: loginType
                        }
                        sendMessageToBackground(obj)
                        
                        chrome.storage.sync.set({'url-from-jm':null})
                        // 隐藏登陆提示
                        $('.plugin-title').hide();
                        // 隐藏授权账号提示
                        $('#jm-infoMsg').hide();
                        return;
                    }
                // }catch(e){
                //     clearInterval(timer);
                //     console.log(e)
                // }
            },200)  
        }
    })
// 设置aid
function errBox(r){
    aid = r.aid
    if ($.request.queryString['from_ext']) {
        infoMsg(r.notice);
    }
}

// 获取错误状态码,分辨位置
chrome.storage.sync.get('qttErrStatus', (res) => {
    
    if (res.qttErrStatus === 1) { // 盒子一
        chrome.storage.sync.get('qttErrMsgOne', (res) => {
            errBox(res.qttErrMsgOne)
        })
    } else if (res.qttErrStatus === 2) { // 盒子二
        chrome.storage.sync.get('qttErrMsgTwo', (res) => {
            errBox(res.qttErrMsgTwo)
        })
    } else if (res.qttErrStatus === 3) { // 盒子三
        chrome.storage.sync.get('qttErrMsgThree', (res) => {
            errBox(res.qttErrMsgThree)
        })
    }
})
