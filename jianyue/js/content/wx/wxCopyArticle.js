window.onload=function(){
    setTimeout(()=>{
        if($('#js_content')){
            $('.img_loading').each(function(){
                $(this).attr('src',$(this).attr('data-src'));
            });
            // 删除多余部分
            let moveDom = $('.weapp_card.app_context.appmsg_card_context');
            moveDom.remove() && moveDom.remove();
            let dom = '<div class="jianmei"><img src='+chrome.extension.getURL('/assets/logo-transparent.png')+'>简媒一键同步</div>';
            $('.qr_code_pc').append(dom);
            $('body').on('click','.jianmei',function(e){
                let title = $('#activity-name').html().trim();
                let content = $('#js_content').html().trim();
                // 由于storage.local有跨域问题和storage.sync有存储大小如google所说这不是一个货车，改用runtime
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
        }else{}
    },1000)
    
}

