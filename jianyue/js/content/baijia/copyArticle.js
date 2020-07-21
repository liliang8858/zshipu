// setTimeout(()=>{
//     if($('#article div.article-title h2').length){
//         let dom = '<div class="jianmei"><img src='+chrome.extension.getURL('/assets/logo-transparent.png')+'>简媒一键同步</div>';
//         $('#header_wrap .header_menu .index').before(dom);
//         $('body').on('click','.jianmei',function(e){
//             let title = $('#article div.article-title h2').html().trim();
//             let content = $('#article .article-content').html().trim();
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