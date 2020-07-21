$(function () {
    let timer;
    let aid = '';
    let loginType = 8; // 默认账密登陆
    let appid = '';
    // 解决方案来源：https://www.cnblogs.com/parker-yu/p/9046463.html
    setTimeout(function() {
        location.href = "javascript:document.body.setAttribute('jm-appid', WBAD.uid);";
        setTimeout(function() {
            appid = getAppid('微博')
            console.log(appid)
            main()
        }, 500);
    },300);
    function main(){
        if ($.request.queryString['from_ext']) {
            loginMsg('微博');
            // 删除第三方登陆 
            setInterval(()=>{   
                $('.info_list.other_login.clearfix').hide();
            },400);
            $('body').on('click','.login_btn a',function(e){
                let acc = $('#loginname').val();
                let mobile = $('.phone input').val()
                sendMessageToBackground({
                    wbAcc: loginType == 7 ? mobile : acc,
                    ttype: loginType 
                })
            })
            $('body').on('click','.info_header a',function(){
                if($(this).attr('node-type') === 'normal_tab'){
                    // 账密登陆
                    loginType = 8;
                    console.log('账密登陆');
                }else if($(this).attr('node-type') === 'qrcode_tab'){
                    // 扫码登陆
                    loginType = 9;
                    console.log('扫码登陆');
                    sendMessageToBackground({
                        wbAcc:'',
                        ttype: loginType
                    })
                }else if($(this).attr('node-type') === 'message_tab'){
                    // 短信登陆
                    loginType = 7;
                    console.log('短信登陆');
                }
            })
            $(".W_login_form input").keydown(function(e){
                if(e.keyCode == 13){
                    loginType = 8;
                    let acc = $('#loginname').val();
                    let mobile = $('.phone input').val()
                    sendMessageToBackground({
                        wbAcc: loginType === 0 ? mobile : acc,
                        ttype: loginType 
                    })
                }
            })
        }
        chrome.storage.sync.get('url-from-jm',(res)=>{
            if(res['url-from-jm'] === '1'){
                timer = setInterval(()=>{
                    console.log('获取头像的名字');
                    // let appid = location.pathname.replace(/[^0-9]/ig,"");
                    let pers = document.querySelectorAll('.WB_innerwrap .nameBox a')[0] && $('.headpic img').attr('src');
                    let conm = $(".photo_wrap img").attr('src') && $(".photo_wrap img").attr('src');
                    console.log(pers,conm)
                    if(pers || conm){
                        let name;
                        let avatar;
                        if(pers){
                            name = $('.WB_innerwrap .nameBox a')[0].innerHTML;
                            avatar = $('.headpic img').attr('src');
                        }else if(conm){
                            name = $(".pf_username h1").html();
                            avatar = $(".photo_wrap img").attr('src');
                        }    
                        console.log(name);
                        console.log(avatar);
                        console.log(appid);
                        clearInterval(timer);
                        if(name && avatar && appid){
                            let obj = {
                                aid: aid || '',
                                atype: 7,
                                plogo: avatar,
                                pname: name,
                                appid
                            }
                            sendMessageToBackground(obj)
                            chrome.storage.sync.set({'url-from-jm':null})
                            $('.plugin-title').hide();
                            return;
                        }
                    }
                },100) 
            }
        })
        // 设置aid
        function errBox(r){
            if(r.hasOwnProperty('wbErrInfo')){
                aid = r.wbErrInfo.aid
            }
            console.log(r)
            if ($.request.queryString['from_ext'] && !($.request.queryString['wvr'])) {
                infoMsg(r.wbErrInfo.notice);
            }
            
        }
    
        // 重新授权获取异常信息
        chrome.storage.sync.get('wbErrInfo', (res) => {
            console.log(res);
            errBox(res);
        })
    }
    
})


