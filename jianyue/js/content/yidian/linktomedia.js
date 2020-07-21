// 一点号第三方登陆跳转到首页，在跳到自媒体首页
chrome.storage.sync.get('yiidan_from', (res) => {
    console.log(res.yiidan_from)
    // 是从简媒第三方登陆过来的,s跳转到mp.yidianzixun.com
    if(res.yiidan_from === 'jm'){
        // 删除session
        chrome.storage.sync.remove('yiidan_from', function(r) {
            console.log(r)
        })
        window.location.href = 'https://mp.yidianzixun.com/#/Home';
        // let ev = document.createEvent("MouseEvents");
        // ev.initEvent("click", true, true);
        // document.querySelector('.link.link-y dhao').dispatchEvent(ev);
    }
})