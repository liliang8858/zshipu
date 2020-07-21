// 版本检测
try{
var baseUrl = 'https://www.8qwe5.com';
var version = null;
let stopProxy; // 停止代理时间
let timer; // 检查更新定时器
timer = setInterval(checkUpdate,86400000) // 版本更新提醒 一天检测一次
// 第一次执行background检测一次版本，为了获取后台返回的停止代理时间
checkUpdate();
function checkUpdate(){
    $.get(chrome.extension.getURL('manifest.json'), function(info){
        version = info.version;
        $.get(`${baseUrl}/chrome/version/checkversion`, function (res) {
        if (res.code === 200) {
            // 结束代理时间
            stopProxy = res.data.ext_switch
            // version 当前插件版本
            // res.data.version 服务端插件版本
            if (version.replace(/\./g,"") < res.data.version.replace(/\./g,"")) {
                chrome.browserAction.setBadgeText({
                    text: '新'
                });
                chrome.browserAction.setBadgeBackgroundColor({
                    color: "#fb4646"
                });
                chrome.notifications.create(null, {
                    type: 'basic',
                    iconUrl: '../assets/logo.png',
                    title: '简媒「 + 」',
                    message: '我又升级啦！新版超好用~快点我更新!'
                });
            } else {
                // 清除查看更新定时器
                // clearInterval(timer);
                chrome.browserAction.setBadgeText({
                    text: ''
                });
                chrome.browserAction.setBadgeBackgroundColor({
                    color: [0, 0, 0, 0]
                });
            }
        }
    })
    }, 'json');
}

// 点击通知跳转
chrome.notifications.onClicked.addListener(()=>{
    chrome.tabs.create({url:`${baseUrl}/ext_intro/download.htm`});
})

// 安装或更新hook
chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        let clientInfo = getExplore().split(" ");
        // 埋点统计
        $.post(`${baseUrl}/chrome/statistics/ext`,{
            bi: clientInfo[0],  // 浏览器名称
            bv: clientInfo[1],  // 浏览器版本
            ev: chrome.runtime.getManifest().version //插件版本
        },function(res){
            // console.log(res)
        })
        show();
    }else if(details.reason == "update"){
        show();
    }
});

// 是否安装了本插件
var extensionInstalled = false;

// 待popup调用方法
function getExtensionInstalled(){
    return extensionInstalled
}

// 复制的content和title粘贴到简媒的默认数据
let copyData = {
    title:'',
    content:''
};

var objInfo = {
    // 头条用户第三方手机号
    userMobile: null,
    // 头条异常用户id
    errAid: '',
    // 百家用户第三方手机号
    bjMobile: null,
    // 百家异常用户id
    bjErrAid: '',
    // 新浪用户第三方账号
    xlAcc: null,
    // 新浪用户第三方密码
    xlPwd: null,
    // 新浪异常用户id
    xlErrAid: '',
    // 大鱼用户第三方账号
    dyAcc: null,
    // 大鱼用户第三方密码
    dyPwd: null,
    // 大鱼异常用户id
    dyErrAid: '',
    // 快船用户第三方账号
    kcAcc: null,
    // 快船用户第三方密码
    kcPwd: null,
    // 快船异常用户id
    kcErrAid: '',
    // 搜狐用户第三方账号
    shAcc: null,
    // 搜狐用户第三方密码
    shPwd: null,
    // 搜狐异常用户id
    shErrAid: '',
    // 时间号用户第三方账号
    btimeAcc: null,
    // 时间号用户第三方密码
    btimePwd: null,
    // 时间号异常用户id
    btimeErrAid: '',
    // 企鹅号用户第三方账号
    qqAcc: null,
    // 企鹅号用户第三方密码
    qqPwd: null,
    // 企鹅号异常用户id
    qqErrAid: '',
    // 网易号用户第三方账号
    wyAcc: null,
    // 网易号用户第三方密码
    wyPwd: null,
    // 网易号异常用户id
    wyErrAid: '',
    // 一点号用户第三方账号
    ydAcc: null,
    // 一点号用户第三方密码
    ydPwd: null,
    // 一点号异常用户id
    ydErrAid: '',
    // 大风号用户第三方账号
    dfAcc: null,
    // 大风号用户第三方密码
    dfPwd: null,
    // 大风号异常用户id
    dfErrAid: '',
    // 趣头条账号
    qttAcc: '',
    // 微博账号
    wbAcc: ''
}
// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request.greeting)
    teaLog(`bgmessage:${JSON.stringify(request.greeting)}`);
    // 进入后台
    if(request.greeting == 'InToBackground'){
        let domain = request.data.domain; // 域名
        let objCk = request.data.objCk; // 对象cookie
        let tempUrl = request.data.link_url; // 进入url
        let muDomain = request.data.muDomain ? request.data.muDomain.split(',') : [domain]; // 要清除多个域cookie为数组
        // console.log(domain);
        // console.log(tempUrl);
        // console.log(muDomain);
        // console.log(objCk);
        (async function (){
            for(let item of muDomain){
                await clearCookie(item);
            }
            // 设置cookie并打开进入第三方登陆页
            // console.log(domain)
            setCookie(domain,objCk).then(()=>{
                window.open(tempUrl)
            })
        })()
    }
    // 添加授权账号
    if(request.greeting == 'addAccount'){
        let domain = request.data.domain; // 域名
        let type = request.data.type // 渠道类型
        let url = request.data.url // 渠道登陆页
        let muDomain = request.data.muDomain ? request.data.muDomain.split(',') : ''// 要清除多个域cookie为数组
        // console.log(domain)
        // console.log(type)
        // console.log(url)
        // console.log(muDomain)
        // 授权判断
        if(request.data.hasOwnProperty('aid')){
            // 保存异常账号信息
            saveErr(Number(type),{
                "aid":request.data.aid,
                "notice":request.data.notice,
                "uname":''
            })
            publishArticle();//获取task任务
        }
        // 清除cookie
        if(muDomain){   
            // let temp = muDomain.split(','); // 字符串数组转换成数组
            (async ()=>{
                for(let item of muDomain){
                    await clearCookie(item)
                }
                setTimeout(()=>{
                    // 设置插件标示
                    chrome.storage.sync.set({
                        'url-from-jm':'1'
                    },function(){
                        window.open(url)
                    })
                },300)
            })()
        }else{
            clearCookie(domain).then(()=>{
                setTimeout(()=>{
                    // 设置插件标示
                    chrome.storage.sync.set({
                        'url-from-jm':'1'
                    },function(){
                        window.open(url)
                    })
                },300) 
            })
        }
    }
    // 前端任务开始
    if(request.greeting == 'pulish'){
        publishArticle()
        sendResponse('background执行发文方法成功')
    }
    // 存储要粘贴的数据
    if(request.greeting == 'setCopyData'){
        copyData.title = request.data.title
        copyData.content = request.data.content
        sendResponse('设置成功')
    }
    // 获取要粘贴的数据
    if(request.greeting == 'getCopyData'){
        sendResponse({
           ...copyData
        })
    }
    // 删除赋值内容
    if(request.greeting == 'RemoveCopyData'){
        copyData = {
            title:'',
            content:''
        };
        sendResponse('删除成功')
    }
    // 出现异常列表
    if(request.greeting == 'getErrList'){
        getErrList()
    }
    // 跳转到扩展程序
    if(request.greeting == 'linkToextesion'){
        // 打开代理用于更新，一段时间后关闭代理
        setProxy('pac_script');
        // 打开程序扩展页面
        setTimeout(()=>{
            chrome.tabs.create({ url: "chrome://extensions/" },()=>{
                console.log(`opened proxy. turn-off time:after ${stopProxy}s  - ${new Date().getHours()}H${new Date().getMinutes()}`);
            });
        },200)
        // 关闭代理 stopProxy为后台设置的开启时间
        setTimeout(function(){
            setProxy('system');
            console.log(`closed proxy  - ${new Date().getHours()}H${new Date().getMinutes()}M`)
        },stopProxy * 1000)
    }
    // 获取异常状态列表
    if(request.greeting == 'getErrorList'){
        $.get(`${baseUrl}/s/ext/v2/accounts/getAccounts`,{
            pageNo:request.page,
            state:2,
            ext_version:chrome.runtime.getManifest().version
        }, function (res) {
            if(res.code == 200){
                sendResponse({
                    errorList:res.data.accounts
                });
            }
        })
    }
    // 获取版本号
    if(request.greeting == 'getVersion'){
        $.get(chrome.extension.getURL('manifest.json'), function(info){
            sendResponse({
                version:info.version
            });
        }, 'json');
    }
    // 判断是否安装插件
    if(request.greeting === 'installed'){
        extensionInstalled = true
    }else if(request.greeting === 'noInstalled'){
        extensionInstalled = false
    }
    //  获取添加头条用户第三方手机号
    if (request.greeting.hasOwnProperty("ttAcc")) {
        objInfo.userMobile = request.greeting.ttAcc
    }
    // 获取添加百家用户第三方手机号
    if (request.greeting.hasOwnProperty("bjMobile")) {
        objInfo.bjMobile = request.greeting.bjMobile
    }
    // 获取添加新浪用户第三方密码
    if (request.greeting.hasOwnProperty("bjPwd")) {
        objInfo.bjPwd = request.greeting.bjPwd
    }
    // 获取添加新浪用户第三方账号
    if (request.greeting.hasOwnProperty("getXlAcc")) {
        objInfo.xlAcc = request.greeting.getXlAcc
    }
    // 获取添加新浪用户第三方密码
    if (request.greeting.hasOwnProperty("getXlPwd")) {
        objInfo.xlPwd = request.greeting.getXlPwd
    }
    // 获取添加大鱼用户第三方账号
    if (request.greeting.hasOwnProperty("getUcAcc")) {
        objInfo.dyAcc = request.greeting.getUcAcc
        console.log(objInfo)
    }
    // 获取添加大鱼用户第三方密码
    if (request.greeting.hasOwnProperty("getUcPwd")) {
        objInfo.dyPwd = request.greeting.getUcPwd
    }
    // 获取添加快传用户第三方账号
    if (request.greeting.hasOwnProperty("getKcAcc")) {
        objInfo.kcAcc = request.greeting.getKcAcc
    }
    // 获取添加快传用户第三方密码
    if (request.greeting.hasOwnProperty("getKcPwd")) {
        objInfo.kcPwd = request.greeting.getKcPwd
    }
    // 获取添加搜狐用户第三方账号
    if (request.greeting.hasOwnProperty("getShAcc")) {
        objInfo.shAcc = request.greeting.getShAcc
    }
    // 获取添加搜狐用户第三方密码
    if (request.greeting.hasOwnProperty("getShPwd")) {
        objInfo.shPwd = request.greeting.getShPwd
    }
    // 获取添加时间号用户第三方账号
    if (request.greeting.hasOwnProperty("getBjAcc")) {
        objInfo.btimeAcc = request.greeting.getBjAcc
    }
    // 获取添加时间号用户第三方密码
    if (request.greeting.hasOwnProperty("getBjPwd")) {
        objInfo.btimePwd = request.greeting.getBjPwd
    }
    // 获取添加企鹅号用户第三方账号
    if (request.greeting.hasOwnProperty("getQqAcc")) {
        objInfo.qqAcc = request.greeting.getQqAcc
    }
    // 获取添加企鹅号用户第三方密码
    if (request.greeting.hasOwnProperty("getQqPwd")) {
        objInfo.qqPwd = request.greeting.getQqPwd
    }
    // 增加所有渠道第三方登录类型
    if (request.greeting.hasOwnProperty("ttype")) {
        objInfo.ttype = request.greeting.ttype
    }
    // 获取添加网易号用户第三方密码
    if (request.greeting.hasOwnProperty("getWyAcc") && request.greeting.hasOwnProperty("getWyPwd")) {
        objInfo.wyAcc = request.greeting.getWyAcc
        objInfo.wyPwd = request.greeting.getWyPwd
    }
    // 获取添加一点号用户第三方密码
    if (request.greeting.hasOwnProperty("getYdAcc")) {
        objInfo.ydAcc = request.greeting.getYdAcc
        // objInfo.ydPwd = request.greeting.getYdPwd
    }
    // 获取添加大风号用户第三方密码
    if (request.greeting.hasOwnProperty("getDfAcc") && request.greeting.hasOwnProperty("getDfPwd")) {
        objInfo.dfAcc = request.greeting.getDfAcc
        objInfo.dfPwd = request.greeting.getDfPwd
    }
    // 获取添加趣头条号用户第三方账号
    if (request.greeting.hasOwnProperty("qttAcc")) {
        objInfo.qttAcc = request.greeting.qttAcc
    }
    // 获取添加微博用户第三方账号
    if (request.greeting.hasOwnProperty("wbAcc")) {
        objInfo.wbAcc = request.greeting.wbAcc
    }
    // 更新微博账号信息---插件进入
    if (objInfo.wbAcc !== null) {
        // 获取aid
        if (request.greeting.hasOwnProperty("aid")) {
            objInfo.errAid = request.greeting.aid
        }
        if (request.greeting.atype === 7) { 
            // ajax对象
            var postObj = {}
            // 获取账号信息
            console.log(request.greeting)
            for (const key in request.greeting) {
                postObj[key] = request.greeting[key]
            }
            postObj.ttype = objInfo.ttype
            objInfo.ttype = ''
            chrome.cookies.getAll({
                url: 'https://.weibo.com/*'
            }, function (cookies) {
                postAjax(cookies, postObj, objInfo, objInfo.wbAcc, null, objInfo.errAid, sendResponse)
            });
        }
    }
    // 更新趣头条账号信息---插件进入
    if (objInfo.qttAcc !== null) {
        // 获取aid
        if (request.greeting.hasOwnProperty("aid")) {
            objInfo.errAid = request.greeting.aid
        }
        if (request.greeting.atype === 23) { // 趣头条
            // ajax对象
            var postObj = {}
            // 获取账号信息
            console.log(request.greeting)
            for (const key in request.greeting) {
                postObj[key] = request.greeting[key]
            }
            chrome.cookies.getAll({
                url: 'https://mp.qutoutiao.net/**'
            }, function (cookies) {
                // chrome.cookies.getAll({
                //     url: 'https://sso.toutiao.com/**'
                // }, function (cookies2) {
                    // let cookies = cookies1.concat(cookies2)
                    postAjax(cookies, postObj, objInfo, objInfo.qttAcc, null, objInfo.errAid, sendResponse)
                // });
            });
        }
    }
    // 更新头条账号信息---插件进入
    if (objInfo.ttAcc !== null) {
        // 获取aid
        if (request.greeting.hasOwnProperty("aid")) {
            objInfo.errAid = request.greeting.aid
        }
        if (request.greeting.atype === 6) { // 头条
            // ajax对象
            var postObj = {}
            // 获取账号信息
            for (const key in request.greeting) {
                postObj[key] = request.greeting[key]
            }
            postObj.ttype = objInfo.ttype
            objInfo.ttype = ''
            // 获取头条域全部cookies(sso和mp)
            chrome.cookies.getAll({
                url: 'https://mp.toutiao.com/**'
            }, function (cookies1) {
                chrome.cookies.getAll({
                    url: 'https://sso.toutiao.com/**'
                }, function (cookies2) {
                    let cookies = cookies1.concat(cookies2)
                    postAjax(cookies, postObj, objInfo, objInfo.userMobile, null, objInfo.errAid, sendResponse)
                });
            });
        }
    }

    // 更新百家账号信息---插件进入
    if (objInfo.bjMobile !== null) {
        if (request.greeting.hasOwnProperty("bjaid")) {
            objInfo.bjErrAid = request.greeting.bjaid
        }
        if (request.greeting.atype === 8) { // 百家号
            // ajax对象
            var bjPostObj = {}
            // 获取账号信息
            for (const key in request.greeting) {
                bjPostObj[key] = request.greeting[key]
            }
            bjPostObj.ttype = objInfo.ttype
            objInfo.ttype = ''
            // 获取百家域全部cookies
            chrome.cookies.getAll({
                    url: 'https://*.baidu.com/**'
                },
                function (cookies) {
                    postAjax(cookies, bjPostObj, objInfo, objInfo.bjMobile, objInfo.bjPwd || null, objInfo.bjErrAid, sendResponse)
                }
            );
        }
    }

    // 更新新浪账号信息---插件进入   (ttype 特殊处理)
    if (objInfo.xlAcc !== null) {
        if (request.greeting.hasOwnProperty("xlaid")) {
            objInfo.xlErrAid = request.greeting.xlaid
        }
        if (request.greeting.atype === 9) { // 新浪号
            // ajax对象
            var xlPostObj = {}
            // 获取账号信息
            for (const key in request.greeting) {
                xlPostObj[key] = request.greeting[key]
            }
            xlPostObj.ttype = objInfo.ttype
            objInfo.ttype = ''
            // 获取新浪域全部cookies
            chrome.cookies.getAll({
                    url: 'http://mp.sina.com.cn/**'
                },
                function (cookies1) {
                    // console.log(cookies1)
                    chrome.cookies.getAll({
                        url: 'http://sina.com.cn/**'
                    },
                    function (cookies2) {
                        // console.log(cookies2)
                        // let cookies = cookies1.concat(cookies2)
                        chrome.cookies.getAll({
                            url: 'http://passport.sina.cn/**'
                        },
                        function (cookies3) {
                            // console.log(cookies2)
                            let cookies = cookies1.concat(cookies2).concat(cookies3)
                            // console.log(cookies)
                            postAjax(cookies, xlPostObj, objInfo, objInfo.xlAcc, objInfo.xlPwd, objInfo.xlErrAid, sendResponse)
                        });
                    });
                }
            );
        }
    }

    // 更新大鱼账号信息---插件进入
    if (objInfo.dyAcc !== null) {
        if (request.greeting.hasOwnProperty("dyaid")) {
            objInfo.dyErrAid = request.greeting.dyaid
        }
        if (request.greeting.atype === 5) { // 大鱼号
            // ajax对象
            var dyPostObj = {}
            // 获取账号信息
            for (const key in request.greeting) {
                dyPostObj[key] = request.greeting[key]
            }
            dyPostObj.ttype = objInfo.ttype;
            objInfo.ttype = ''
            // 获取大鱼域全部cookies
            chrome.cookies.getAll({
                url: 'https://mp.dayu.com/**'
            },
            function (cookies) {
                postAjax(cookies, dyPostObj, objInfo, objInfo.dyAcc, objInfo.dyPwd, objInfo.dyErrAid, sendResponse)
            });
        }
    }

    // 更新快传账号信息---插件进入 (特殊处理kcPostobj)
    if (objInfo.kcAcc !== null) {
        if (request.greeting.hasOwnProperty("kcaid")) {
            objInfo.kcErrAid = request.greeting.kcaid
        }
        if (request.greeting.atype === 25) { // 快传号
            // ajax对象
            var kcPostObj = {}
            // 获取账号信息
            for (const key in request.greeting) {
                kcPostObj[key] = request.greeting[key]
            }
            kcPostObj.ttype = objInfo.ttype;
            objInfo.ttype = ''
            // 获取快传域全部cookies
            chrome.cookies.getAll({
                    url: 'http://kuaichuan.360.cn/**'
                },
                function (cookies) {
                    postAjax(cookies, kcPostObj, objInfo, objInfo.kcAcc, objInfo.kcPwd, objInfo.kcErrAid, sendResponse)
                }
            );
        }
    }

    // 更新搜狐账号信息---插件进入  (sohu号 postajax 第二个参数不是objInfo需要特殊处理ttype)
    if (objInfo.shAcc !== null) {
        if (request.greeting.hasOwnProperty("shaid")) {
            objInfo.shErrAid = request.greeting.shaid
        }
        if (request.greeting.atype === 3) { // 搜狐号
            // ajax对象
            var shPostObj = {}
            // 获取账号信息
            for (const key in request.greeting) {
                shPostObj[key] = request.greeting[key]
            }
            shPostObj.ttype = objInfo.ttype
            objInfo.ttype = ''
            // 获取搜狐域全部cookies
            chrome.cookies.getAll({
                    url: 'https://mp.sohu.com/**'
                },
                function (cookies) {
                    postAjax(cookies, shPostObj, objInfo, objInfo.shAcc, objInfo.shPwd, objInfo.shErrAid, sendResponse)
                }
            );
        }
    }

    // 更新时间号账号信息---插件进入 (ttype 特殊处理)
    if (objInfo.btimeAcc !== null) {
        if (request.greeting.hasOwnProperty("btimeaid")) {
            objInfo.btimeErrAid = request.greeting.btimeaid
        }
        if (request.greeting.atype === 12) { // 时间号
            // ajax对象
            var btimePostObj = {}
            // 获取账号信息
            for (const key in request.greeting) {
                btimePostObj[key] = request.greeting[key]
            }
            btimePostObj.ttype = objInfo.ttype
            objInfo.ttype = '';
            // 获取时间域全部cookies
            chrome.cookies.getAll({
                    url: 'https://www.btime.com'
                },
                function (cookies) {
                    postAjax(cookies, btimePostObj, objInfo, objInfo.btimeAcc, objInfo.btimePwd, objInfo.btimeErrAid, sendResponse)
                }
            );
        }
    }

    // 更新企鹅号账号信息---插件进入
    if (objInfo.getQqAcc !== null) {
        if (request.greeting.hasOwnProperty("qqaid")) {
            objInfo.qqErrAid = request.greeting.qqaid
        }
        if (request.greeting.atype === 2) { // 企鹅号
            // ajax对象
            var qqPostObj = {}
            // 获取账号信息
            for (const key in request.greeting) {
                qqPostObj[key] = request.greeting[key]
            }
            // 获取企鹅域全部cookies
            chrome.cookies.getAll({
                    url: 'https://om.qq.com'
                },
                function (cookies) {
                    postAjax(cookies, qqPostObj, objInfo, objInfo.qqAcc, objInfo.qqPwd, objInfo.qqErrAid, sendResponse)
                }
            );
        }
    }

    // 更新网易号账号信息---插件进入
    if (objInfo.wyAcc !== null && objInfo.wyPwd !== null) {
        if (request.greeting.hasOwnProperty("wyaid")) {
            objInfo.wyErrAid = request.greeting.wyaid
        }
        if (request.greeting.atype === 1) { // 网易号
            // ajax对象
            var wyPostObj = {}
            // 获取账号信息
            for (const key in request.greeting) {
                wyPostObj[key] = request.greeting[key]
            }
            setTimeout( function(){
                // 获取网易域全部cookies
            chrome.cookies.getAll({
                    url: 'http://mp.163.com'
                },
                function (cookies) {
                    postAjax(cookies, wyPostObj, objInfo, objInfo.wyAcc, objInfo.wyPwd, objInfo.wyErrAid, sendResponse)
                }
            );
            }, 2000 );

        }
    }

    // 更新一点号账号信息---插件进入
    if (objInfo.ydAcc !== null) {
        if (request.greeting.hasOwnProperty("ydaid")) {
            objInfo.ydErrAid = request.greeting.ydaid
        }
        if (request.greeting.atype === 4) { // 一点号
            // ajax对象
            var ydPostObj = {}
            // 获取账号信息
            for (const key in request.greeting) {
                ydPostObj[key] = request.greeting[key]
            }
            ydPostObj.ttype = objInfo.ttype
            objInfo.ttype = ''
            // 获取一点域全部cookies
            chrome.cookies.getAll({
                    url: 'https://mp.yidianzixun.com'
                },
                function (cookies) {
                    postAjax(cookies, ydPostObj, objInfo, objInfo.ydAcc, objInfo.ydPwd, objInfo.ydErrAid, sendResponse)
                }
            );
        }
    }

    // 更新凤凰号账号信息---插件进入 (大风号 postajax 第二个参数不是objInfo需要特殊处理ttype)
    if (objInfo.dfAcc !== null && objInfo.dfPwd !== null) {
        if (request.greeting.hasOwnProperty("dfaid")) {
            objInfo.dfErrAid = request.greeting.dfaid
        }
        if (request.greeting.atype === 10) { // 凤凰号
            // ajax对象
            var dfPostObj = {}
            // 获取账号信息
            for (const key in request.greeting) {
                dfPostObj[key] = request.greeting[key]
            }
            dfPostObj.ttype = objInfo.ttype;
            objInfo.ttype = '';
            // 获取凤凰域全部cookies
            chrome.cookies.getAll({
                    url: 'http://zmt.ifeng.com'
                },
                function (cookies) {
                    postAjax(cookies, dfPostObj, objInfo, objInfo.dfAcc, objInfo.dfPwd, objInfo.dfErrAid, sendResponse)
                }
            );
        }
    }
    return true;
})

// 先获取代理类型再设置代理
// 代理开关
// fixed_servers 为指定代理服务器
// direct 为不使用代理
// system 为使用系统代理
// 参考https://developers.chrome.com/extensions/proxy
function setProxy(mode){
    // var config = {
    //     mode: 'system',
    //     pacScript: {
    //         data: pac
    //     }
    // }
    // chrome.proxy.settings.set({value: config, scope: 'regular'}, function(){});
    // chrome.proxy.onProxyError.addListener(function(errDetail){console.log(errDetail)})
}

// 第一次安装或者升级提示
function show(){
    let url= '.8qwe5.';
    chrome.tabs.query(
        { currentWindow: true, active: true },
        function (tabArray) {
            if(tabArray[0].url.indexOf(url) !== -1){
                let cookiesArr = [];
                chrome.cookies.getAll({
                    'url': baseUrl
                }, function (cookies) {
                    cookiesArr = cookies.filter(item => {
                        if (item.name === 'userId' || item.name === 'userToken') {
                           return(item)
                        }
                    });
                    if(cookiesArr.length < 2){
                        chrome.tabs.executeScript(tabArray[0].id, {
                            file: "slide/installed-nologin.js",
                            allFrames: false
                        });
                    }else{
                        chrome.tabs.executeScript(tabArray[0].id, {
                            file: "slide/installed-logined.js",
                            allFrames: false
                        });
                    }
                })
            }
        }
    )
}

// 异常账号提醒
function abnormal() {
    chrome.tabs.query(
        { currentWindow: true, active: true },
        function (tabArray) {
            if(tabArray[0]){
                let url= '.8qwe5.';
                if(tabArray[0].url.indexOf(url) !== -1){
                    chrome.tabs.insertCSS(tabArray[0].id, {
                        file: "slide/abnormal/abnormal.css",
                        allFrames: false
                    });
                    chrome.tabs.executeScript(tabArray[0].id, {
                        file: "slide/abnormal/abnormal.js",
                        allFrames: false
                    });
                }
            }
        }
    );
}

// 获取当前选项卡ID
function getCurrentTabId(callback){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        if(callback) callback(tabs.length ? tabs[0].id: null);
    });
}

// 同contentScript交互
function sendMessageToContentScript(message, callback){
    getCurrentTabId((tabId) =>{
        chrome.tabs.sendMessage(tabId, message, function(response){
            if(callback) callback(response);
        });
    });
}

// 获取异常账号列表
function getErrList(){
    $.get(`${baseUrl}/s/ext/v2/accounts/getAccounts`,{
        pageNo:1,
        state:2
    }, function (res) {
        if(res.hasOwnProperty('data')){
            if(res.data.accounts.length){
                abnormal();
            }
        }
    })
}

// extension卸载生命周期
chrome.runtime.onSuspend.addListener(function() {
    // 做一些简单的清理任务。
});

// 获取浏览器版本信息function getExplore(){
function getExplore(){
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
    (s = ua.match(/msie ([\d\.]+)/)) ? Sys.ie = s[1] :
    (s = ua.match(/edge\/([\d\.]+)/)) ? Sys.edge = s[1] :
    (s = ua.match(/firefox\/([\d\.]+)/)) ? Sys.firefox = s[1] :
    (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? Sys.opera = s[1] :
    (s = ua.match(/chrome\/([\d\.]+)/)) ? Sys.chrome = s[1] :
    (s = ua.match(/version\/([\d\.]+).*safari/)) ? Sys.safari = s[1] : 0;
    // 根据关系进行判断
    if (Sys.ie) return ('IE ' + Sys.ie);
    if (Sys.edge) return ('EDGE ' + Sys.edge);
    if (Sys.firefox) return ('Firefox ' + Sys.firefox);
    if (Sys.chrome) return ('Chrome ' + Sys.chrome);
    if (Sys.opera) return ('Opera ' + Sys.opera);
    if (Sys.safari) return ('Safari ' + Sys.safari);
    return 'Unkonwn Unkonwn';
}
chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
        if (details.type === 'xmlhttprequest') {
            var exists = false;
            for (var i = 0; i < details.requestHeaders.length; ++i) {
                // console.log(details.requestHeaders[i]);
                if (details.requestHeaders[i].name === 'Referer') {
                    exists = true;
                    details.requestHeaders[i].value = 'http://www.baidu.com';
                    break;
                }
            }
            if (!exists) {
             details.requestHeaders.push({ name: 'Referer', value: 'http://kuaichuan.360.cn/'});
            }
            return { requestHeaders: details.requestHeaders };
        }
    },
    {urls: ['http://kuaichuan.360.cn/*']},
    ["blocking", "requestHeaders"]
);
}catch(e){
    teaLog('background中catch',e);
}