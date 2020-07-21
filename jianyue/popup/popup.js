$(function () {
    var baseUrl = 'https://www.8qwe5.com'; // baseUrl
    let accountsData = []; // 当前当台下所有账号数据
    let cookiesArr = []; // cookie
    let userInfo = {};   // 用户信息
    let page = 1; //分页
    let status = 1; // 账号列表 1:正常 2:异常
    let total = 0; // 账号总数
    let accArr = []
    checkPublishIsRunning(); // 在发文中，显示进度条
    /**
     * 解密
     * @param word
     * @returns {*}
     */
    function decrypt(word){
        var key = CryptoJS.enc.Utf8.parse("5055248cb9f84065");
        var decrypt = CryptoJS.AES.decrypt(word, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
        return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    }
    /**
     * 字符换cookie转对象
     *
     */
    function cookieToJson(cookie) {
        let cookieArr = cookie.split(";");
        let obj = {}
        cookieArr.forEach((i) => {
            let arr = i.split("=");
            obj[arr[0]] =arr[1];
        });
        return obj
    }
    // 通过检查简媒官网来判断是否登陆
    chrome.cookies.getAll({
        'url': baseUrl
    }, function (cookies) {
        cookiesArr = cookies.filter(item => {
            if (item.name === 'userId' || item.name === 'userToken') {
               return(item)
            }
        });
        // 未登陆
        if(cookiesArr.length < 2){
            $('#login-wrap').show();
            $('#main-wrap').hide();
            $('#login-wrap .button').click(function () {
                window.open(`${baseUrl}/login/loginview?entrance=personal`)   
            })
        }else{
            // 登陆状态
            $('#login-wrap').hide();//隐藏登陆模板
            // 用户信息
            $.get(`${baseUrl}/s/user/getUserInfoForExt`, function (res) {
                if (res.code === 200) {
                    // 存储用户手机号
                    chrome.storage.local.clear(()=>{
                        chrome.storage.local.set({'userPhone':res.data.phone});  
                    });
                    $('.avatar').attr('src',res.data.avatar);
                    $('.me .username').html(res.data.name);
                    if(res.data.vip == 1){
                        $('.me .user-info .vip img').attr('src','./img/im_members.png');
                    }else if(res.data.vip == 2){
                        $('.me .user-info .vip img').attr('src','./img/im_members2.png');
                    }
                }
            });
            // 账号列表
            renderList(1,1);
            // 新增账号列表
            $.get(`${baseUrl}/s/ext/v2/accounts/authList`,{
                ext_version:chrome.runtime.getManifest().version
            },function(res){
                accArr = res.data || [];
                renderNew();
            }) 
        }
    });
    // 登出
    $('body').on('click', '.change-account', function (e) {
        teaLog('popup:退出账号');
        // alert('popup:退出账号');
        chrome.cookies.getAll({
            'url': baseUrl
        }, function (cookies) {
            for (var i = 0; i < cookies.length; i++) {
                chrome.cookies.remove({
                    url: baseUrl+'' + cookies[i].path,
                    name: cookies[i].name
                })
            }
            window.open(`${baseUrl}/login/loginview?entrance=personal`);
        })
        // 插件重刷新
        window.location.reload()
    })

    // 选中节点内容
    function selectDomContent(element) {
        let text = document.getElementById(element);
        if (document.body.createTextRange) {
            let range = document.body.createTextRange();
            range.moveToElementText(text);
            range.select();
        } else if (window.getSelection) {
            let selection = window.getSelection();
            let range = document.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            console.log("不支持选中功能");
        }
    }
    // 复制文章
    $('body').on('click','#copy-button',function(e){
        let content = "<p><img src='https://www.baidu.com/img/bd_logo1.png?qua=high'/>小伙伴们是否记得2009年由菲尔·罗德、克里斯·米勒执导的迪斯尼电影《天降美食》</p>";
        let dom = $(`<div id="dom" contenteditable>${content}</div>`);
        $('body').append(dom);
        selectDomContent("dom");
        document.execCommand("Copy");
        $('#dom').remove();
    })
    // 使用插件代理
    $('body').on('click','#openProxy-button',function(e){
        let bg = chrome.extension.getBackgroundPage();
        bg.openProxy();
    })
    // 使用系统代理
    $('body').on('click','#closeProxt-button',function(e){
        let bg = chrome.extension.getBackgroundPage();
        bg.closeProxy();
    })
    // 检测安装插件
    // $('body').on('click','.jm_avatar',function(e){
    //     let bg = chrome.extension.getBackgroundPage();
    //     let extensionInstalled = bg.getExtensionInstalled();
    //     alert(extensionInstalled)
    // })
    // nav切换
    $('body').on('click','.nav-item',function(e){
        $(`#main-wrap .content .${$(this).attr('key')}`).show().siblings().hide();
        $(this).addClass('active').siblings().removeClass('active');
    });
    // 正常异常账号切换
    $('body').on('click','#main-wrap .content .all-account .button-wrap p' ,function(e){
        chrome.storage.sync.clear();
        $(this).addClass('active').siblings().removeClass('active');
        status = $(this).attr('status');
        page = 1;
        renderList(page,status);
    })
    // 添加账号元素展示
    $('body').on('click','.add-button',function(e){
        chrome.storage.sync.clear();
        $('#accounts-wrap').show();
        $('#main-wrap').hide();
    });
    // 添加新账号返回
    $('body').on('click','#accounts-wrap .back',function(e){
        $('#accounts-wrap').hide();
        $('#main-wrap').show();
    });
    // 进入官网
    $('body').on('click','.linktoweb',function(e){
        window.open(`${baseUrl}/s/home`);
    })
    // 进入视频站
    $('body').on('click','.linktovideo',function(e){
        window.open(`http://video.8qwe5.com/`);
    })
    // 插件帮助
    $('body').on('click','.linktohelp',function(e){
        window.open(`${baseUrl}/ext_intro/help.htm?t=${new Date().getTime()}`);
    })
    // 升级会员
    $('body').on('click','.upgrade',function(e){
        window.open(`${baseUrl}/s/member/view`);
    })
    // 显示提示窗口
    $('body').on('click','#show',function(e){
        let bg = chrome.extension.getBackgroundPage();
        bg.show();
    })
    // 异常提醒
    $('body').on('click','#abnormal',function(e){
        let bg = chrome.extension.getBackgroundPage();
        bg.abnormal();
    })
    // 进入后台
    $('body').on('click','.normal .linktobg',function(){
        
        let self = $(this);
        let findItem = accountsData.filter((i) => {return i.id === $(this).attr('aid')})
        // 微博判断 是微博return
        if(!findItem[0].ck){
            return;
        }
        teaLog(`popup:进入${findItem[0].plateform_name}后台`);
        let strCk = decrypt(findItem[0].ck);
        let objCk = cookieToJson(strCk);
        let domain = findItem[0].domain;
        let link_url = self.attr('index_url')
        let muDomain = self.attr('muDomain')
        // 以下渠道特殊处理
        if(findItem[0].plateform_name === '今日头条号'){
            domain = 'https://.toutiao.com/'
        }else if(findItem[0].plateform_name === '北京时间'){
            domain = 'https://.btime.com/'
        }else if(findItem[0].plateform_name === '新浪看点'){
            domain = 'https://.sina.com.cn/'
        }else if(findItem[0].plateform_name === '百家号'){
            domain = 'https://baijiahao.baidu.com/'
        }else if(findItem[0].plateform_name === '一点资讯号'){
            domain = 'https://.yidianzixun.com/'
        }else if(findItem[0].plateform_name === '趣头条'){
            domain = 'https://mp.qutoutiao.net/'
        }
        chrome.runtime.sendMessage({
            greeting: 'InToBackground',
            data: {
                domain,
                objCk,
                link_url,
                muDomain
            }
        }, function (response) {})
    })
    // 重新授权
    $('body').on('click','.abnormal .linktobg',function(e){
        teaLog(`popup:${$(this).attr('name')}重新授权`);
        let url = $(this).attr('url');
        let domain = $(this).attr('domain');
        let type = Number($(this).attr('type'));
        let aid = $(this).attr('aid');
        let muDomain = $(this).attr('muDomain')
        let notice = $(this).attr('notice');
        // let loginName = $(this).attr('login_name');
        chrome.runtime.sendMessage({
            greeting: 'addAccount',
            data: {
                domain,
                type,
                url,
                aid,
                muDomain,
                notice
            }
        }, function (response) {})
    })
    // 新增账号
    $('body').on('click','#accounts-wrap section .item',function(e){
        teaLog(`popup:新增${$(this).attr('name')}账号，来自插件`);
        // alert(`popup:新增${$(this).attr('name')}账号`);
        let url = $(this).attr('url');
        let domain = $(this).attr('domain');
        let type = $(this).attr('type');
        let muDomain = $(this).attr('muDomain') == 'null' ? '' : $(this).attr('muDomain');
        chrome.runtime.sendMessage({
            greeting: 'addAccount',
            data: {
                domain,
                type,
                url,
                muDomain
            }
        }, function (response) {})
    });

    // 获取账号列表 pageNo分页 state是否异常 reload是否重新加载
    function renderList(pageNo,state,reload){
        $.get(`${baseUrl}/s/ext/v2/accounts/getAccounts`,{
            pageNo,
            state,
            pageSize:8,
            ext_version:chrome.runtime.getManifest().version
        }, function (res) {
            if(res){
                total = res.data.total
                if(res.data.accounts.length !== 0){
                    accountsData = accountsData.concat(res.data.accounts);
                    $('.total-of-accounts').html(res.data.total);
                    let node = $('.account-list');
                    reload || node.empty();
                    let s = '';
                    res.data.accounts.forEach((item,idx) => {
                        // 过滤空格不然字符串拼接有问题
                        let notice = '';
                        if(item.hasOwnProperty('notice')){
                            notice = item.notice.replace(/ /g,'');
                        }
                        s += "<div class='account-list-item "+(item.state==1 ? "normal":"abnormal")+"'><div class='l-part'>";
                        s += "<img class='account_img' src="+(item.account_img || './img/default_avatar.png')+" title="+item.login_name+">";
                        s += "<div class='user-info'><p class='account_name'>"+item.account_name+"</p>";
                        s += "<p><img class='plateform_img' src="+item.plateform_img+"/>"+item.plateform_name+"</p></div></div>";
                        s += `<div class='r-part'><p class='linktobg' notice=${notice}`;
                        s += " name="+item.plateform_name+" type="+item.account_type+" index_url ="+item.index_url+" login_name="+(item.login_name ? item.login_name : '-')+" aid="+item.id+" domain="+item.domain+" url="+item.platform_login_url+" muDomain="+item.mutiDomain+" >"+(item.state==1 ? "进入后台":"重新授权")+"</p><p>"+(item.state==1 ? "账号正常":"账号过期")+"</p></div></div>";
                    });
                    node.append(s);
                }else{
                    // 暂无数据状态
                    let node = $('.account-list');
                    $('.total-of-accounts').html(res.data.total);
                    node.empty();
                    node.append(`<div class='no-data-wrap'>
                            <img src="../assets/none.png" alt="暂无数据" class='no-data-img'>
                            <p class='no-data-text'>暂无数据</p>
                        </div>`)
                }
            }
        }
    )}
    // 新增账号渲染
    function renderNew(){
        let node = $('#accounts-wrap section');
        node.empty();
        let s = '';
        accArr.forEach((item,idx) => {
            s +=  `<div class='item' name='${item.account_type}' type='${item.id}' url='${item.loginUrl || ""} ' domain='${item.domain}' muDomain='${item.mutiDomain}'>`;
            s +=  "<img src="+item.logo+">"
            s +=  "<p>"+item.account_type+"</p></div>"
        })
        node.append(s);
    }
    // 账号列表滑动底部加载更多
    $('.account-list').scroll(function(){
        let h = $(this).height();
        let sh = $(this)[0].scrollHeight;
        let st =$(this)[0].scrollTop;
        if(h+st>=sh){
            if(total > $('.account-list-item').length){
                page++;
                renderList(page,status,true);
            }
        }
    });
    /**
     * 设置进度
     * @param
     *  t:进度(百分数)
     * 
     *  */
    window.setProgress = function(t){
        t = parseInt(t);
        if(t <= 100){
            $('.progress-title').html(`${t===100?'文章同步完成':t===0?'暂无任务':'任务执行中...'}`);
            $('.progress-num').html(`${t}%`);
            $('.progress-width').css('width',`${t}%`);
        }else{
            $('.progress-title').html('文章同步完成');
            $('.progress-num').html(`100%`);
            $('.progress-width').css('width',`100%`);
        };
        // 3s之后归0
        if(t === 100){
            setTimeout(()=>{
                $('.progress-num').html(`0%`);
                $('.progress-width').css('width',`0%`);
                $('.progress-title').html(`暂无任务`);
            },3000)
        }
    }
    /**
     * 检测是否在发文中，并显示进度条
     * @param word
     * @returns {*}
     */
    function checkPublishIsRunning(){
        // 显示进度条
        let bg = chrome.extension.getBackgroundPage();
        let t = parseInt(bg.getProgress()); //进度条
        if(t !== 0 && t !== 100){
            $('.nav-item[key="progress"]').addClass('active').siblings().removeClass('active');
            $(`#main-wrap .content .progress`).show().siblings().hide();
        }
        $('.progress-title').html(`${t===100?'文章同步完成':t===0?'暂无任务':'文章同步中...'}`);
        $('.progress-num').html(`${t}%`);   
        $('.progress-width').css('width',`${t}%`);
    }
})
