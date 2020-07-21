// tea统计声明
(function(win, export_obj) {
    win['TeaAnalyticsObject'] = export_obj;
    if (!win[export_obj]) {
        function _collect() {
            _collect.q.push(arguments);
        }
        _collect.q = _collect.q || [];
        win[export_obj] = _collect;
    }
    win[export_obj].l = +new Date();
})(window, 'collectEvent');

//  tea统计初始化
window.collectEvent('init', {
    app_id: 157362, // 简媒web应用
    channel: 'cn',
});

/**
 * @param {String}  msg    错误信息
 * @param {String}  url    出错文件
 * @param {Number}  row    行号
 * @param {Number}  col    列号
 * @param {Object}  err    错误详细信息
 */
window.onerror = function (msg, location, row, col, errObj) {
    // errObj.stack: 错误类型 + 错误信息 + 定位文件 + 行 + 列
    teaLog('onError',errObj.stack);
};

/** background全局上报方法
 * @param {String}  ref             来源
 * @param {String}  errorMsg        错误信息
 * @param {String}  user            用户手机号
 * @param {String}  time            时间戳
 */
function teaLog(ref,errorMsg){
    window.collectEvent('config', {
        log: false, 
        evtParams: {}
    });
    chrome.storage.local.get('userPhone',(res)=>{
        let year = new Date().getFullYear();
        let month = (new Date().getMonth() + 1) < 10 ? `0${new Date().getMonth() + 1}` : new Date().getMonth() + 1;
        let day = new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate();
        let hour = new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours();
        let min = new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes();
        let se = new Date().getSeconds() < 10 ? `0${new Date().getSeconds()}` : new Date().getSeconds();
        let time = `${year}-${month}-${day} ${hour}:${min}:${se}`;
        let obj = {
            all:{
                ref: ref,
                errorMsg: errorMsg || '正常信息',
                user: res.userPhone,
                time: time,
                timeStamp: new Date().getTime(),
                version: chrome.runtime.getManifest().version
            },
            ref: ref,
            errorMsg: errorMsg || '正常信息',
            user: res.userPhone,
            time: time,
            timeStamp: new Date().getTime(),
            version: chrome.runtime.getManifest().version
        };
        // console.log(obj)
        window.collectEvent('ext_log', {
            ...obj
        })
        window.collectEvent('send');
    })
}
