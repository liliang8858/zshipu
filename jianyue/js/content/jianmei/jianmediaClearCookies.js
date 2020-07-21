// 用于添加、授权账号匹配cookie域
const domainKey = {
    "1":'http://mp.163.com',
    "2":"https://om.qq.com",
    "3":"https://mp.sohu.com",
    "4":"https://mp.yidianzixun.com",
    "5":"https://mp.dayu.com",
    "6":"https://toutiao.com",
    "7":'https://login.sina.com.cn/sso/logout.php?entry=miniblog&r=https%3A%2F%2Fweibo.com',
    "8":"https://baijiahao.baidu.com",
    "9":"https://sina.com.cn",
    "10":"http://zmt.ifeng.com",
    "12":"https://www.btime.com",
    "25":"http://kuaichuan.360.cn",
    "23":'https://mp.qutoutiao.net'
}
// 用于添加账号匹配url
const addUrlKey =  {
    "网易号":'http://mp.163.com/login.html?from_ext=true',
    "企鹅号":'https://om.qq.com/userAuth/index?from_ext=true',
    "搜狐号":'https://mp.sohu.com/mpfe/v3/login?from_ext=true',
    "一点号":'https://mp.yidianzixun.com/?from_ext=true',
    "大鱼号":'https://mp.dayu.com/?from_ext=true',
    "头条号":"https://sso.toutiao.com/login/?service=https://mp.toutiao.com/sso_confirm/?redirect_url=JTJGbmV3X2FydGljbGUlMkY=&from_ext=true",
    "百家号":'https://baijiahao.baidu.com/builder/author/register/index?from_ext=true',
    "新浪看点":'http://mp.sina.com.cn/?from_ext=true',
    "大风号":'http://zmt.ifeng.com/login?from_ext=true',
    "北京时间":'https://user.btime.com/viewShow?gate=login&jump=http%3A%2F%2Fmp.btime.com%2Findex.php%3Fro%3Dlogin%26ra%3Dindex&from_ext=true',
    "快传号":'http://kuaichuan.360.cn/#/login?from_ext=true',
    "新浪微博":'https://api.weibo.com/oauth2/authorize?client_id=1100539964&amp;redirect_uri=https://www.8qwe5.com/weibo_redirect&amp;state=C7172B86183AACE31B9A8648A241F5F5',
    "凤凰号":'http://zmt.ifeng.com/login?from_ext=true',
    "趣头条":'https://mp.qutoutiao.net/login?backUrl=https%3A%2F%2Fmp.qutoutiao.net%2Fpage%2Ffirst-page&from_ext=true'
}
// 用于重新授权匹配url
const authUrlKey = {
    "1":"http://mp.163.com/login.html?from_ext=true",
    "2":'https://om.qq.com/userAuth/index?from_ext=true',
    "3":'https://mp.sohu.com/mpfe/v3/login?from_ext=true',
    "4":'https://mp.yidianzixun.com/?from_ext=true',
    "5":'https://mp.dayu.com/?from_ext=true',
    "6":'https://sso.toutiao.com/login/?service=https://mp.toutiao.com/sso_confirm/?redirect_url=JTJGbmV3X2FydGljbGUlMkY=&from_ext=true',
    "8":'https://baijiahao.baidu.com/builder/author/register/index?from_ext=true',
    "9":'http://mp.sina.com.cn/?from_ext=true',
    "10":'http://zmt.ifeng.com/login?from_ext=true',
    "12":'https://user.btime.com/viewShow?gate=login&jump=http%3A%2F%2Fmp.btime.com%2Findex.php%3Fro%3Dlogin%26ra%3Dindex&from_ext=true',
    "25":'http://kuaichuan.360.cn/#/login?from_ext=true',
    "7":'https://login.sina.com.cn/sso/logout.php?entry=miniblog&r=https%3A%2F%2Fweibo.com',
    "凤凰号":'http://zmt.ifeng.com/login?from_ext=true',
    "23":'https://mp.qutoutiao.net/login?backUrl=https%3A%2F%2Fmp.qutoutiao.net%2Fpage%2Ffirst-page&from_ext=true'
}

// v3添加账号
$('body').on('click','.graphicAccountList .listInnerBox a',function(e){
    chrome.storage.sync.clear();
    let type = $(this).attr('type');
    let name = $(this).children('.listInnerBox-left').children('span').html();
    let url = $(this).attr('loginurl');
    let domain = $(this).attr('domain')
    let muDomain = $(this).attr('muDomain');
    chrome.runtime.sendMessage({
        greeting: 'addAccount',
        data: {
            domain,
            type,
            url,
            muDomain
        }
    }, function (response) {})
})

// v3授权账号
$('body').on('click','.right.reauthorization#auth',function(e){
    let aid = $(this).attr('aid');
    let type = $(this).attr('name');
    let domain = $(this).attr('domain');
    let url = $(this).attr('url');
    let muDomain = $(this).attr('mudomain');
    let notice = $(this).attr('notice');
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

// v3进入后台
$('body').on('click','#linkToBackground',function(e){
  let domain = $(this).attr('domain');
  // 以下渠道特殊处理
  if(domain === 'https://toutiao.com'){// 头条
      domain = 'https://.toutiao.com/'
  }else if(domain === 'https://sina.com.cn'){ // 新浪看点
    domain = 'https://.sina.com.cn/'
  }else if(domain === 'https://www.btime.com'){ //北京时间
    domain = 'https://.btime.com/'
  }
  let ck = $(this).attr('ck');
  let link_url = $(this).attr('index_url');
  let strCk = decrypt(ck);
  let objCk = cookieToJson(strCk);
  let muDomain = $(this).attr('mudomain');
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
// v3进入草稿后台
$('body').on('click','#linkToDraft',function(e){
    let domain = $(this).attr('domain');
    // 以下渠道特殊处理
    if(domain === 'https://toutiao.com'){// 头条
        domain = 'https://.toutiao.com/'
    }else if(domain === 'https://sina.com.cn'){ // 新浪看点
      domain = 'https://.sina.com.cn/'
    }else if(domain === 'https://www.btime.com'){ //北京时间
      domain = 'https://.btime.com/'
    }
    let ck = $(this).attr('ck');
    let link_url = $(this).attr('indexUrl');
    let strCk = decrypt(ck);
    let objCk = cookieToJson(strCk);
    let muDomain = $(this).attr('mutidomain');
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
