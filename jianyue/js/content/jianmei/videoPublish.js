// 发文
$('body').on('click','#extension-publish',function(){
    chrome.runtime.sendMessage({
        greeting: 'pulish'
    }, function (response) {
        console.log(response)
    })
})
// 添加     
$('body').on('click','#ext-add',function(e){
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
// 授权
$('body').on('click','#ext-auth ',function(){
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
// 后台
$('body').on('click','#ext-tobg',function(e){
    let domain = $(this).attr('domain');
    // // 以下渠道特殊处理
    // if(domain === 'https://toutiao.com'){// 头条
    //     domain = 'https://.toutiao.com/'
    // }else if(domain === 'https://sina.com.cn'){ // 新浪看点
    //   domain = 'https://.sina.com.cn/'
    // }else if(domain === 'https://www.btime.com'){ //北京时间
    //   domain = 'https://.btime.com/'
    // }
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