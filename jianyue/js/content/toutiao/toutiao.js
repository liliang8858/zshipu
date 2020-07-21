$(function () {
    let loginType = 0 // 手机号和账密登陆
    // 登陆后获取用户头像以及昵称
    var plogo = $('.head').attr('src') || $('.garr-header .new_user_avatar img').attr('src')
    var pname = $('.name span').text() || $('.garr-header .new_user_name span').text()
    // 阈值
    var count = 0

    // 循环直到获取完整信息后,发送,清除循环
    var timeId = setInterval(function () {
        if (count < 50) {
            plogo = $('.head').attr('src') || $('.garr-header .new_user_avatar img').attr('src')
            pname = $('.name span').text() || $('.garr-header .new_user_name span').text()
            // console.log(plogo && pname)
            console.log(plogo,pname)
            if (plogo && pname) {
                clearInterval(timeId)
                $.get('https://mp.toutiao.com/mp/agw/media/get_media_info',function(res){
                    console.log(res)
                    appid = JSON.parse(res).data.media.id;
                    console.log(appid);
                    // let appid = getAppid('头条号')
                    var obj = {
                        atype: 6,
                        plogo: plogo,
                        pname: pname,
                        appid,  
                        // ttype: loginType
                    }
                    sendMessageToBackground(obj)
                    return;
                })
            }
            count++;
        } else {
            clearInterval(timeId)
        }
    }, 500)
    // 判断是否从插件跳入,监听表单提交,获得用户手机号
    if ($.request.queryString['from_ext']) {
        //  第三方登录
        // $('.footer-login-type.platform-login img.login-type-icon').click(function(e){
        //     let type = $(this).next().html();
        //     if(type === 'QQ'){
        //         loginType = 2
        //     }else if(type === '微信'){
        //         loginType = 3
        //     }
        // })
        loginMsg('头条号')
        // 隐藏账密手机号之外登陆方式   页面加载完成注入时，按钮没有生成改用注入css方法隐藏
        // $('#login-platform-footer .footer-login-type').hide();
        // $('#login-platform-footer .footer-login-type#login-type-account').show();
        // 监听手机输入框失去焦点,将账号传入bg
        
        $('body').on('click','#bytedance-login-submit',function(){
          var getMobile = document.getElementById("user-mobile").value;
          let getAcc = document.getElementById("user-name").value;
          let temp = '';
          if($('#login-mobile-box').css('display') === 'block'){
            temp = getMobile;
            loginType = 7;
          }else{
            temp = getAcc; 
            loginType = 8;
          }
          sendMessageToBackground({
              ttAcc: temp,
              ttype: loginType
          })
        })
        // eval(`$('body').on('click','#bytedance-login-submit',function(){
        //     var getMobile = document.getElementById("user-mobile").value;
        //     let getAcc = document.getElementById("user-name").value;
        //     sendMessageToBackground({
        //         getMobile: getMobile || getAcc,
        //         ttype: loginType
        //     })
        //   })`)
        // $('#bytedance-login-submit').click(function () {
        //   console.log(2)
        //
        // })
        // $('#user-name').blur(function () {
        //   console.log(3)
        //     var ttAcc = document.getElementById("user-name").value;
        //     console.log(getMobile,loginType)
        //     sendMessageToBackground({
        //         getMobile: ttAcc,
        //         ttype: loginType
        //     })
        // })


        // 封装错误信息盒子
        function errBox(err) {
            infoMsg(err.notice);
            // $('#user-name').val(err.uname)
            // 表单提交时,将手机号与aid传入bg
            $('form').submit(function () {
                var mobile = document.getElementById("user-name").value;
                sendMessageToBackground({
                    aid: err.aid,
                    getMobile: mobile,
                    ttype: loginType
                })
            })
        }

        // 获取错误状态码,分辨位置
        chrome.storage.sync.get('errStatus', (res) => {
            if (res.errStatus === 1) { // 盒子一
                chrome.storage.sync.get('ttErrMsgOne', (res) => {
                    errBox(res.ttErrMsgOne)
                })
            } else if (res.errStatus === 2) { // 盒子二
                chrome.storage.sync.get('ttErrMsgTwo', (res) => {
                    errBox(res.ttErrMsgTwo)
                })
            } else if (res.errStatus === 3) { // 盒子三
                chrome.storage.sync.get('ttErrMsgThree', (res) => {
                    errBox(res.ttErrMsgThree)
                })
            }
        })
    }
    setTimeout(()=>{
        if($('.share-box').length){
            let dom = '<div class="jianmei"><img src='+chrome.extension.getURL('/assets/logo-transparent.png')+'>简媒一键同步</div>';
            $('.share-box').append(dom);
            $('.share-qrcode').css('z-index',21);
            $('body').on('click','.jianmei',function(e){
                let title = $('.article-title').html().trim();
                let content = $('.article-content').html().trim();
                // 由于storage.local有跨域问题和storage.sync有存储大小如google所说这不是一个货车，改用runtime
                chrome.runtime.sendMessage({
                    greeting: 'setCopyData',
                    data: {
                        title,
                        content
                    }
                }, function (response) {
                   window.open('https://www.8qwe5.com/s/article/edit/1/1')
                });
            })
        }else{}
    },10)
})
