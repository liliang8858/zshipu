   $(function(){ 
    //get wxdata 
    chrome.runtime.sendMessage({
        greeting: 'getCopyData'
    }, function (response) {
        if(response.title){
            setTimeout(()=>{
                // 设置title
                var ev = new Event('input', { bubbles: true});
                ev.simulated = true;
                var element = document.querySelector('input');
                element.value = response.title;
                element.dispatchEvent(ev);
                // 设置content
                let dom = $(`<div id="dom" contenteditable style='position:absolute;left:-9999px;'>${response.content}</div>`)
                $('body').append(dom);
                selectDomContent("dom");
                document.execCommand("Copy");
                let bodyDom = document.getElementById("ueditor_0").contentWindow.document.getElementsByTagName("body")[0];
                bodyDom.focus();
                document.getElementById("ueditor_0").contentWindow.document.execCommand('Paste');
                // 粘贴后删除保存的数据
                chrome.runtime.sendMessage({
                    greeting: 'RemoveCopyData'
                }, function (response) {
                    console.log(response)
                })
            },1000)
        }else{} 
    })
    // select all
    function selectDomContent(element) {
        let text = document.getElementById(element);
        if (document.body.createTextRange) {
            let range = document.body.createTextRange();
            range.moveToElementText(text);
            range.select();
        } else if (window.getSelection) {
            let selection = window.getSelection();
            let range = document.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            console.log("不支持选中功能");
        }
    }
});