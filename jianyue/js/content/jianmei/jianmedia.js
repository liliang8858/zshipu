// 增加安装插件标识
document.documentElement.setAttribute('extension-installed', "1");
document.documentElement.setAttribute('version', chrome.runtime.getManifest().version);
document.documentElement.setAttribute('taskVersion', chrome.runtime.getManifest().version);
// if($('html').attr('version')){
//     let oldVersion = $('html').attr('version').split('.').join('');
//     let curVersion = chrome.runtime.getManifest().version.split('.').join('');
//     console.log(oldVersion)
//     console.log(curVersion)
//     if(curVersion > oldVersion){
//         document.documentElement.setAttribute('version', chrome.runtime.getManifest().version);
//     }
// }else{
//     document.documentElement.setAttribute('version', chrome.runtime.getManifest().version);
// }
// 通过是否存在dom元素来判断是否在download.htm页面
if($('div.button')){
    $('body').on('click',"div.button",function(e){
        chrome.runtime.sendMessage({
            greeting: 'linkToextesion'
        }, function (response) {
           console.log(response)
        });
    })
}
