$(function () {
    let appid = ''
    // 解决方案来源：https://www.cnblogs.com/parker-yu/p/9046463.html
    setTimeout(function() {
        location.href = "javascript:document.body.setAttribute('jm-appid', sessionStorage.wId);";
        setTimeout(function() {
            appid = getAppid('大风号')
            chrome.storage.sync.get('url-from-jm',(res)=>{
                if(res['url-from-jm'] === '1' && window.location.href === 'http://zmt.ifeng.com/register/chooseType'){
                    tip('账号添加失败，该账号尚未完成入驻审核，请完成入驻后再进行添加', 1)
                    chrome.storage.sync.set({'url-from-jm':null})
                    return;
                }else if(res['url-from-jm'] === '1'){
                    main();
                }
            })
        }, 500);
    }, 300);

    function main(){
        //  异步获取完整信息后,发送
        setTimeout(function () {
            if(document.querySelector('#btnSwapLogin')){
                let ev = document.createEvent("MouseEvents");
                ev.initEvent("click", true, true);
                document.querySelector('#btnSwapLogin').dispatchEvent(ev);
            }
            sendMessageToBackground({
                atype: 10,
                plogo: $('.avatar').attr('src') || null,
                pname: $('#user_name').text(),
                appid
            })
        }, 1)
        if ($.request.queryString['from_ext']) {
            // 界面样式更改
            loginMsg('大风号')

            $('#btnSwapLogin img').click();

        }
    }
})