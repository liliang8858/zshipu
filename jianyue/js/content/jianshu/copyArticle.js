setTimeout(()=>{
    if($('div.article h1.title').length){
        // 解决图片懒加载
        $('.image-view  img').each(function(){
            $(this).attr('src',$(this).attr('data-original-src'));
        });
        let dom = '<div class="jianmei"><img src='+chrome.extension.getURL('/assets/logo-transparent.png')+'>简媒一键同步</div>';
        $('#fixed-ad-container').append(dom);
        $('body').on('click','.jianmei',function(e){
            let title = $('h1.title').html().trim();
            let content = $('.show-content-free').html().trim();
            chrome.runtime.sendMessage({
                greeting: 'setCopyData',
                data: {
                    title,
                    content
                }
            }, function (response) {
               window.open('https://www.8qwe5.com/s/article/edit/1/1')
            });
        })
    }
},10)