// err list show
chrome.runtime.sendMessage({
    greeting: 'getErrList'
}, function (response) {})
// 执行发文
chrome.runtime.sendMessage({
    greeting: 'pulish'
}, function (response) {
    console.log(response)
})

