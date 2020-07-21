
var baseUrl = 'https://www.8qwe5.com'
var base64Logo = 'data:image/png;base64,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'
var base64Close = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAADWUlEQVRYR82YTU8TURSG3zMV05KYaEQTgZiof6B/AhIj6sYQBVpY2AnGCOhOIeksrO6s0kT5MBEL6EYXRhf+EnZ+LPgwwUUbo4US5pj5ZDqdmd6ZKcZZ33aeec97zn3vJfxnD1k82duPTmLv1zWo0o/yy8KHf8GZzc0MMLg3kej4vDSnfNfeqQPJstJVU3e3QdgBwGBaLi8WxomIDwNMURTp60a9xOAbBCSZkeo6dqqzWLxX04EyuelxMBcBTpqUfwB6PdCfvjM4OLjfTigN5tt6fZaBYQYfN95Hu0w0tbxYmNOBsjenrzKpL8A4Y7+cUCXQ6kBfeqJdUIYye8/APGLB6EBEW2C6pVlFB9IWftmoPyVGxrkQbYSyYJjVEQC6MvpDqEpMK+d6j04oiqLapvaFAqoSaOVSf3oyqlKiMLapLVg/KAJVCFiNAhWkvlOZA8FcjrX+AIwMTNOZ2lakkFCtYLw+0C6Zk8vPfADpUFa9g7pPh9ncK0LlbMOHmZ7xU9sTyDK6V0eIQFkwpHLW3SRamYJK7wsUDIUKkbRyvqdjUusMt7qaMlFgmkztVQLf2QGqMGH5Qs/RKQvKnMBPGJwF44S7tUWaIlAhZ/d5DjQHVD6f51F5uhgHRkghN1TTYANVIFGZmDkuTCggp6e8oEji36yi56DsRkeKlMlpFaGSeY2EZqiDVQxUExGne2ggl1LDgMO8enZBlYjeX+5Ly1G2mrhAjRulESUqILyJmhJCA/lulI66xoEKBRS0a4O1dGkELvPRShc6TwkD+cFonpGIVpnAUFnzlAMqfKcJAQXBWN20trbG2vD0Gglh2r8lkAiM1U3+/hJXSmhzdX910JyJC9UyfoSBEdlmWpUvZEDTh55Q59hnL8ZQrIDmnxbFYRqVqpc4BFSDQu2EiQrVcAzyjqzhlXEHvTDlsw+KhwXjVgqMIa+c3XBQ1G4hwPvzDHTHHf2tTiLaJUMTFLBFlJDLiw8/mZcN93PENMvmZQOMCCHUTUEAARm9BPAYM3caKZF2mOiufdkwpijJ/fXdGohrAO0Q6G3U+CAKOCo/eK6qfJ2AFAPJIymcflV6vG2bOiPnzxLqFyWSNpfmCx9F/zjOutHczBUV3J2ijncLC8rP0Jk6zstFf/sXlBAZUrUAR8YAAAAASUVORK5CYII='

// 登陆
$('body').on('click','.jianmei-login-button',function(e){
    window.open(`${baseUrl}/login/loginview?entrance=personal`);
    $('.jianmei-show').fadeOut(function(){
        $('.jianmei-show').remove();
    });
})
$('body').on('click','.jianmei-close',function(e){
    $('.jianmei-show').fadeOut(function(){
        $('.jianmei-show').remove();
    });
})
$('body').on('click','.jianmei-help',function(e){
    window.open(`${baseUrl}/#/jmExt`);
    $('.jianmei-show').fadeOut(function(){
        $('.jianmei-show').remove();
    });
})

// 获取version
chrome.runtime.sendMessage(
    {greeting: 'getVersion'},
    function(response) {
        if(response){
            var dom = `<div 
                class='jianmei-show' 
                style='width:350px;height:280px;
                background-color:#fff;
                position:fixed;top:10px;right:20px;
                z-index:9999;
                padding:0 83px;
                border-radius:3px;
                border:1px solid #aaa;
                box-shadow:2px 2px 2px #ccc'>
                <img src='${base64Close}' class='jianmei-close' style='position:absolute;
                    top: 12px;
                    right: 15px;
                    width:18px;
                    height:18px;
                    cursor:pointer;
                '/>
                <img src='${base64Logo}'
                    style='width:48px;height:48px;display:block;margin:40px auto 18px;'
                />
                <div style='text-align:center;font-size:16px;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(0,0,0,1);
                line-height:23px;'>阅读助手<span id='version'>v${chrome.runtime.getManifest().version}</span></div>

                <div style='font-size:14px;text-align: center;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(23,31,36,1);
                line-height:20px;'>安装成功</div>

                <div class='jianmei-login-button' style='width:120px;
                height:40px;text-align:center;margin:20px auto;line-height:40px;
                background:linear-gradient(135deg,rgba(45,201,235,1) 0%,rgba(20,210,184,1) 100%);
                border-radius:6px;font-size:16px;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(255,255,255,1);
                cursor: pointer;
                '>登陆 / 注册</div>

                <div>
                    <p class='jianmei-help'
                        style='font-size:14px;
                        font-family:PingFangSC-Regular;
                        text-align:center;
                        font-weight:400;
                        color:rgba(65,94,173,1);
                        cursor: pointer;
                        line-height:20px;'>
                        阅读助手使用帮助
                    </p>

                    
                </div>
            </div>`
          document.getElementsByTagName('body')[0].innerHTML += dom;
          $('.jianmei-show').fadeIn();
        }
    }
  );