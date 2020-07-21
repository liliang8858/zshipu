// setTimeout(()=>{
//     if($('#editor div.ql-title div.ql-title-box input').length){
//         let dom = '<div class="jianmei"><img src='+chrome.extension.getURL('/assets/logo-transparent.png')+'>简媒一键同步</div>';
//         $('.ql-title').append(dom);
//         $('body').on('click','.jianmei',function(e){
//             let title = $('#editor div.ql-title div.ql-title-box input').val().trim();
//             let content = $('#editor .ql-editor').html().trim();
//             chrome.runtime.sendMessage({
//                 greeting: 'setCopyData',
//                 data: {
//                     title,
//                     content
//                 }
//             }, function (response) {
//                window.open('https://www.8qwe5.com/s/article/edit/1/1')
//             });
//         })
//     }
// },10)