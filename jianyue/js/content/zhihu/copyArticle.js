// setTimeout(()=>{
//     if($('header.Post-Header h1.Post-Title').length){
//          // 解决图片懒加载
//          $('.figure img').each(function(){
//             $(this).attr('src',$(this).attr('data-original'));
//         });
//         let dom = '<div class="jianmei"><img src='+chrome.extension.getURL('/assets/logo-transparent.png')+'>简媒一键同步</div>';
//         $('.ColumnPageHeader-Button button').first().before(dom);
//         $('body').on('click','.jianmei',function(e){
//             let title = $('header.Post-Header h1.Post-Title').html().trim();
//             let content = $('.Post-RichTextContainer .RichText').html().trim();
//             chrome.runtime.sendMessage({
//                 greeting: 'setCopyData',
//                 data: {
//                     title,
//                     content
//                 }
//             }, function (response) {
//                 window.open('https://www.8qwe5.com/s/article/edit/1/1')
//             });
//         })
//     }
// },10)