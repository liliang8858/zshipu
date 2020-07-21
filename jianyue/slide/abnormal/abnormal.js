var base64Logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAoCAYAAAA2cfJIAAAX+UlEQVR4Xu1caXgb1bl+z2jxHjsxsQNJnH1f7KQJlATJlhRiyy07gbKUFgql9GG93FsKtIUul5SWQu4DD4VS6AIUCnQBimWHSLLlJEASIGQB20kcx9ns7F5lW9J89zlnFo1k2bLjhB99Ov5hSXPOmZnzvd97vu0Mg3osrzua1dEeeVAGKwaTi4iQDpD444fynwAGEPH/yu/aOYLMTynt+IeYfvybbGivflbbiasQdUsSthKoxpJuWV0/e3aH3uE/H87aDAgRFG06tjRM4TfBMEkVRpywoQiVVEAYBKdBQAeHIsx+/ZkKJh0gYiw+rtpWfNaAhn2MsVWNi+ZvPmtP/p+BxQwwrvltHfJ2kmmSrvEGDTayABeWov1Rve+v6QQWFaTKCf0BIcY1MInGMLwl7w/QPmt6yoJ/VyYo8VeuiMj0KmN0SGJp7mqHo2UomFz5WVVG8HikigGzJGa6udpR+q9k/Yq9lTfLoDVg2Dhn1NhLf7dkSUjrw+ZvanmMgAcVQRoJn2IoPUarVXqPB4dgCAM49CVh0CXEwAQquPi1+B+T2OqmRYUPJXvAZOdL/P5zItTzOiOMhlm6OlBcujdZn0Tn3R9WjOrqYr8HMN0M6xU+l2vf6YzD+9h9nkoiKhX9JdxX6yhfM5Sx7D7PlUT0N0V9saHWWX5Rsn42n6cORLN4OzNDid9ZXmMAQOsGmeRlXLsVllc1XNN2fU2P2gGKeIw2gLL+x9sHut0QQ+9qbwOTaCyi9JdVhgGI0cZ9ixYtT/aAyc7bfJ4/g+ibym2wfwRc7iuT9Ul03u6rfJFIvkWZfPZardN9/emMIwDg9XxEoPPVsX5Q63T/eihj2f2e20mm55RbwA5zakpZsn6hYN8mgM7j7UwSVlU7yt8yAOBwFwHpMROvG3uyQucxa79i0DHG4tZ6g+BUg09osbG/uGsStoSCGNU4FGMZ+qufCdTdvHhxRrIHHOy8LVB5PsL0IUjhJjB8zBh7OumYhI6MifSeZ0Z5L2/r8FV9JUyRTUJfFSB9wMBeGGwcmaF9XN6Ed9+cP78vvp3dW7GNgAX8dwm4u8ZVnvSe7F7PGwRalfTekzRgjD0fcLq/J55j3qbDqjlm1GpVuxOu+dGFwmj4xSwH/TwGRdRR1tA+G4EQaxNorLBv8WIVKqf32HZfhZcIztPpzRh7I+B0Xys01uepIqKVwx6HsZdrne6btH6riExHqyttskyvEDBeAROekSRTVeKx5VP+krIN13zwQWpL8FT3sK+fqANDsNZZni6uPfejgwr3GwVkdPW0dTmBO8g1eWKKGcXZ6ZiQYkaexSwu1xoK40BvH2raO7Gvt8+wNBhcSKNXoTJD1MCMuo3Ni78yIgDYfBUnwNf+0zkY21PrdE9XAXCIiM4d9jCM7ax1uudr/Wxez8sA3TiccRikNQFX2X12n+c9IiofTt+E8mfsTwGn+9sKADYdVNRdX/M1X171//tZ6krbS0dn4LZzczAzLWXQ+6kP9uD51uN4+0RbDMiMy4MWU4h6AhoDAc2LRgYAu9/zCGT6MQGmYU6cDAn3a8aZ3V/xAGT873DGYUCEJOnOWkeZWLNVIDUT0cRh3Ytq7D1KJHmrPXdDxlMqc3wBs+WqpGNFwl4NvIxJ3wo4y/6s9WFzNh1QZ1u1vFV9k0ld/+M0f0aaBb+akoe56YrgudZu7erB58FetPaFxJo/1mLGvLQUFGWkCVuBHzu7g/ivpgPY1dPbL6ikuY0CFHFs0LxoyYgYgA9X4vdnmtIiui0R6u7bSoRx4lKSdK8lzfx6/CSa0iKdawtLu4y/cxcMnRDjBHvlb4HoV4rysD1pKdKy+DFSUnI7312yJIa2bf6KeyHjcQDWpIJTpHzSxEy3VDtK/ykA5K+4gWS8opxinwZc7sXJxrF5K7i3UsDbmSTJXe0oq4wFgErHif18IWbxV5yTjien5CHTJCEoy3ip5RReOXoKx8MRPdJnjATmmiXcNHYMbsnPRZokoSMSwT1798Pf3h7jMQzmLu5fvHTEAIifIJvXc1CziiVIt9S4yv6QbBL7jeGv/B5k+bfq7w21rnLhZg3l4HZAi99zVFuaGJOuzZgov6317dwPLwjC+2GS9N8BR9lvtHOxAMAXJiYlNQojoPc1BugPgM0HiFvgmrXeL9SrumYXZqXixZnnwsQYtnb24K7GQ2gJRXRwDNgfhHyLCc9OLUBRRjrCRLhpdyM+6OwUz2R0FTXwCI9APD1h/6LzzzwAfJ4dIJrHLyGZ2JU1Je5/DEVwxjZ2f9W1JEcEczCwzQGXW3HphnjYfZ4OIspUnlP6eq2z7D2tq81XsX4oABjipWKaJWCA/boXEHXNtPCsovkTrGb8be545JhNWHeyE/fsbUGfAI3iCkaFqOYK+gWKCFaJ4ZkpBViRPQonw2FcUteAg6G+mGxDrFehwONMAYDTt0bpxdVVbjkSeUqS8IUpJeVOJlF4uJMZkiJWdMrPEDBXspgeSqdwdYXNfYwxQ5JkkEFt3gruXoplQDKZVtaUlL6va7nXs5FAFyZjgOHeM2/fDwCzN+1TnHU9EtjfHXxuej4cORn4orsX19bvF/SvHMbcgPpdi+IZw8Eqi6RJDG/NnI656WlY19aGWxsbY1xDjX2MBuKBxReMmAHsfs/PSaYfMbBNGQVk72o2LQfkdwg0ohhDPwEwnOTxAYlJD1Q7SncMJiCbzyNrsYn46JwxSCQxdn+N0/2kDg6DDXAGARCf4YuGZ7+SmYK/zBoPmQhf/7wZu3sUrY0HwHkWE46EQwiJU6oHoQZ9eHtndhZ2Brsx2mTGe7NnQmIMVzU0YEtXp2oPxGYItcXhwKKRA8Dm8xwB0VhFA3ChTLiLCKcdxUs28QysV5LoRmPEzdinxO83R+SgHo+XTGxZTYn7AwMDfEwgYdxxIzXgKPu/xABgn1tAlya7nxBYIBoJjDMCZ2/ep+XlAB7B06Jyqn6vmZqH8jFZ+PuxdjywrzU2y6cKemaaFRVzp2JTRxeu29XUL4V8w9gx+MXECfC3tePmxkY8UVCAq3PH4N2TJ3Bn095oVjAm5qDA7OCir46YAWxez3GAxvCJMjPzRRGE5xHh+WQTN6LzwnpPm5soyXPJli3pp9qO6B6GSTIvrXas3BIFwMBRQruv8noi+VWlLdtW63IXJrtPu7eCu3pa0Kk04Cpfq/VhGgAS5fMtDPiwcIqw+q+ta8YnXT0q8cdqqzM7A7+bJrwM3LSrCes7uIGn2AMWADXzZmOc1YJt3d24tL4BSzPS8ebMmcIrKNr+GcLgbNjffuD9DxSNHAB2X8WrisazQ5kZNMfz1fJ2h6/qAplk5abPwEHCIJLPJ+A+LVwsMTxS4yz/WfzwJX5/TkQOntR+t1pYodfu3qZ9t3kr6gHMFN8l6Q5jHEGEtkPyR0L8jIUJ7HITY3sGegQZKNSMVd7GAkz3ucr19mzW5iYenI9qtiGfvyQrFX+ZNQEnwhFc+NkeLqZowYchn+/KztQB8ElXN66q5+MrAr3pnFz8dKIAHz7r6sKlDfXC1vxkwUKMMZtx1a46bO7sMOQGtKyksowcXHThiBmAu11HairPzzRl1r1ns+kTfwbk3m8Iu6/iT9zRUQX0TsDpviy+0coNVXnBnginU3GYJNOcakdpnfbdqLEmiV1X7XDrcYoSvz81Qj3N2pI2nGdgjDXVOMqmGg1VNmtzo7pqRyt/tMDMJWMy8Zsp47C5oxvXN+yPCeka8/mu7CwdAIIFdu9FbXuHsPwD82Yj38J5IAoAjoC3ps/E0sxM3NW0B2+f4tHaqOA1k5S7gQeLlo0YAPaa9+cgEr4TgDfgdP89ftJW1L5fEAqFryaweQRSbnaAgwFBRrSVSWmvVTscp+Kb2b2eHxJotfJ7Yoou8VdMiMjYr/W1Wq3TvLYVjVEAeE4RKFuMAMRQNv+txO/5RkSm14YjfL6+M8BtpH8x/kwVAFqWzpjPvzU/Bw9MGIv3TnTgnr2HBigJUwy8F6YVCEORG3efdnXhivrduDnvHDwyYTzaIxGMMplUBqgTwn568hRcNjoXPz/YjBeOtujxxvicxBkBgNfzCYEW8dCs1WqZus52cbM+2T7PpQR6BYSs4UwoY+ywCdIVfmepoGOD8HQAMGB7wFW+MH5cV+26qX19fToNmyRMrHaUH+DtVu3YYW1pbRYZSH7E2wfa7yX+yjKZ5F8TYa625CS6fxGOZtgqSdJ9NSVltfFtBAC09T8+CPTtvGw8NDEPnpMduHvvoRgtNVYG8SXghWmTsaM7iHSJYWpqKr7buFcYfnkWC55uacFd48YpANilAGBNwWRcOeYcPHn4AJ5qPagqTFw9AAiHipaPnAG8Ro0yFQdcpQF+wYvXrz2vty+8kwg5wxG+1pYBuzIKsEBLGfPfjQwwEABK/FWzI3LkC22ctFRT/trlpUf4d85GvX0hvdAknh3i75OHuYFgDiNTfpgiuiFptWBeJIL2rKy8E/HhaOMYbObmPSIAH1sPoBh5XxudiTVTz8PHnd24pn4fbhw7Grfkj8EPmg5iS5cS4ubg+droHDw9ZSI+7OjEG8dP4MnJBSJWwMO/1e3teLa1BW/MmInWUB/O37lN1AP45szHtNQ0PHKgCS8db1VrC6JJKb4McUY5vOiiswaAYm/lbTLk3wkqZOwAMfqNJEsx8f/4CSdQLjF6SGMMBtPygKt043AYwBaoXIyQ/LHWJyc7L0MTUonfUxKRyR9lgLTR2lJz6fr1WW3hrotkmfrlESTCGBnySzo4mXQDAQmehXrGpWYH3ly2LCiee+aWPQPUAxCKMlPx5qxJaA9HsHRbAx4Ynyfi+vz77Y3N+IiHcxnwq4IJuDp3NF47dhwP798P39w5mJyiJIuubKjH7p4gPpq/UADii2C3iCIWpitRUFfdNjT0dCulZHFFp/z8oaKzBwC7t/IpgnyvmAiJPRpwuH86FCaw+yreIoLIwjGG7wSc5frED4UB7N6qZYTIBu1aAadb0gyzYm/FHTLwrEqJh2pdbsWCBmDzebaCKKnbl+wZGJg/4HKLGgk2Y/Ou2HQwF4RaD2AC4aPCGSIEfGNDEz7rDuIP0ydhSWa60Ni6YA8yTSZMTLEKbb2svgHbg0GUZWfjt1Mmo6qtDbfv3SPGu31sPn543nhhI/CjR5ax+lAzXjzGayENpedxtQmHi2xnjQHs3oqnCeDGIY/nPxhwuX+ZbPL4+ahbyat5pO/WuMr0yqChAMDhW7s8TOH1Bi23VDscIhxt93l+T0TfUe9JL19btXFjWktPW5de2TSUGx2gDQPrCrjcQgPZjC0qAPSofGx494lJ43B5bg48J9tx59794LGBu8/Nww3njEG2WUmx7+3pxepDh7C2LZrzz5QkdBL376OlXpOsVkxKSRFg2R7sQhiEjkhoQBeQA+dw4ZcEAMZeJbAhJoXoXhCJYszTAYAr4FnYF6LPogBgU6od7iYVAHuJaLIYm0kP1DjLlJSzSAV7VkPGHQk9FQZeeZ+my5whGFO4qZ1g6AXYaq0GkU3f3BBTEaQqqC64uWkpeHv2FJH4uaJuj2ABDhEJhDyrBafCYfRwQat/8fn8mAAPEealp+O63LFYkJaOhw82YVt3J3j+RKk6VtjHWJxyuMj+pTDA6SrU6QDAFqg8FyGZu1XqI5tcAVepz+GrKA4TqrXf43MEg90jN2h7esOqNQ2kZFty1i25mGvkoAebvqVBWX4NhZzxJWJrJo/HJWOy0dTbi8vr9qAtEh5yPt84Vq7JjIpZ83CeNQWeU8dxa1ODuLJxH4GeWVSXoZai4n87AAht9nqOcYNS1fSHa5xlj9m8Fe8C+LqKio6cUXnjBrLglQol9mMAvnxn2RWnNryfPxAAiIgV+z1/JOAKifCwsQCVTd9SL0yvwfL5uWYT3pk9TYRzuaV/W2MTOmVeC5A8ny/aEGGU2YSXpszABZmjcDwcgrNuK45HQsrqr4eBFe/DmGxqKSr5cgDAWD0DBgypGtWICEWGgpJh2wAqAHg28hJBegwtJuAbYTC/tsYz4LmAq/yOROorkkkUbNcon+c3zFa+EidmgBJ/1fyIHNmujtU3ypo1TouI6gCIDwcrjaO5/oUZafjrjKlIkSTsCvbgjr17sadXKe/STLhE+Xx+ltP9c5OnoyAlFcdCIVzf+Dl2Brt0zTcKPBqLUK7fUvjlAODLNAIVAFQ5CRGvQcC8dFxz72Qzkxb6nWU7EwMgRqA8xz/DYpG6BwKA66N1uX1doaM6uBi7SouIsmlbvlBtAFXgg+TzF2ek4fmpk3GOxYIIEV4/fhx/PHoEDT08SRTdOKoxSmFaOm4am4fLcnJhlSQc7OvFNxo/R2NPMCp8MiwBWjWyYazWIsdZYwCbz/MkiHjyhnsBPw243I8mWzOF8HyevxGR2FwSX1I2FC9Au4bd5/krEV0Tf83BtJ+3LfF7bozI9LLCHqyzxlE2auWG988dzAawez3RFLOBXXQAGK31RPl8bS0fb7HglwUTcdGoaOR0X28vdnR3oTUUglliKLCmYEpKCialpOrPtr6jDfc178bhsFZPEOv6GcvAouwDtBaeRQD4K2+FLKsuHDsEhmekhMGTqIhksFxGdL9eTGKRLqi1l/ENI+IYDgDcuypSuvZjPRGWGEFgkkyXDLbnz+6teIKA+1UAbAw43cuTGYE2X8XjIPxA7bM74HTPEJ85Ayi1eNFdulFST7ypUzxoVia+l5+PCzIzRZ1gooOv/Rs62/HSsRZUtZ2IWvt6tVC0sMRI/dqmUX4fRwpdZ40BXB+uy+/rCn2u1QoMRftj2jC2c86osYuMmy2HAwC7t2IlMfwzxn1TtLpHYrjZmAU0Xtfm89RqbiiY9NtaZ9n3kwGguLrqYjkS0esALEiZzPc2smkff66QvpGKxdVi3wWQaNMGF1qOSYItKwsTrFbkW6wwMeBEOIz6nm5s7upAS4hvDInbVazvP1Svo6Wg43YV8/FbFzrPGgD41W2+yq8xole17NswQNBstbBLjHl8ZTzPgyB6TBln4IINXtgBopcIlHhjBWPECD8JuNy/MN6TvaZqCkXkPdp6LkG6qcZV9nIyAPBAUmuw7aR2PSaxWwMO94ts6sc71XoANQJoqAcwJoe00u3YcjDFZ4/d6xebz9fcOmPtf5Ti1a1hMVvO+VkeV1DAcaRwxVkFAL+Kc6N3fKi3dxUjacFQ0sHE2KeZafJfeGFJPGDsPs8rRHSDIn/mrXW6V8S3MdKxdo6XfzNZ7iPgKePmE8bw5/y8gtu0/YV2r+dRAj0ihgfrtWab87m/nwwAgrVjtsmx12td7uvY1I938IRBejQfr+zPH/Q9AFq41vgiiAHy+UKMxo2fhjeI9N9yHstEjKG7deGKERdu2gfIBg5D2wdsypeRSDB0sQykgLCIiLjrpm0g7WdYGsvJFSEiAobvB5zlIiklGAn0ul4yLtpIjwdcZT9UGWY3iKapANBDxUMCgLFWgbGjtU53Hpv2yY4NMkFsD9f9caMnEOejJ6oEjnrusdpvzDJGS8cNfr4KpAH7S9h4ZMGKEW8PP1sAUP3x3SBMikcI9+0lljYnvmjE5vP8T3RHEU5KkulaY0k4H8fhqyyMgP5FRBPiBW33ejo1A5QxdlnA6X6Ht+HvLujsZqf40sBLxTImUqYxTc3blPjXFkXk8KcKObFwft7EDDb1k+2PEdGDCmUl0FatAtiwjgthxhVwDqu/xhx8udF3JSmUry8xTDDR6tYFK0b8ggjjTiAzMy3xO0v1VOxIWEAxIvsSvNmDtUsm6ep4wSpC8I+LUM8fuOabie4x1ucZ70WtVXiSiM2Bhd1cay/7ROlfdblM8moQratxuu82lndx+4MBt4Do+YCr/IlEz1bsq/gJgX0TYD/newTZrLq6rL7u8HaiyCR9Y0h0f37c/v5Ea7bBWBQgitI4T/pEw7yKcBMvL0ZWUPpLEtuXY0ldUD/7ohG/LEqkWBkeZ8Bap8N9zaOMRd9YNRIEKJT9LEC3Ki/fwB4CNlstlh8ZS7xGeImz2l2Q8NRPdywlirwpE02Kvv3L4KfHeARGTTXsDxggn6+/HSzOrojRdgMTCJBIbJ/EsKpl/or/vCTqrIpfT8QCnAl6u4MPEkMxCEUEWbxAINYdjC4RsW/+GDifP5A7GetViGBkN69dYww1OZbU1WdC88/y3P1bDP//6YeO/qPfLywAAAAASUVORK5CYII="
var baseUrl = 'https://www.8qwe5.com/';
var dom = `<div id='jianmei-abnormal' class='jianmei-abnormal'>
    <div class='jianmei-header'>
        <div>账号授权通知</div>
        <div>小简提醒：账号授权过期无法发布文章，请重新授权</div>
    </div>
    <div class='jianmei-list'>

        

    </div>
    <div class='jianmei-footer'>
        <div><img src="${base64Logo}"></div>
        <div class='jianmei-close'>关闭</div>
    </div>
</div>`;
$('#jianmei-abnormal').remove();
let version = chrome.runtime.getManifest().version
// 大于2.0.6版本才在主站显示异常列表提醒
if(version.replace(/\./g,"") >= 206){
    $('body').append(dom);
    $('#jianmei-abnormal').fadeIn(1000);
}


var page = 1
getList(page);
// 获取异常账号列表
function getList(page){
    chrome.runtime.sendMessage(
        {greeting: 'getErrorList',page:page},
        function(response) {
            if(response){
                let node = $('.jianmei-list');
                // node.empty();
                let s = '';
                response.errorList.forEach((item,idx) => {
                    console.log(item)
                    let notice = '';
                    if(item.hasOwnProperty('notice')){
                        notice = item.notice.replace(/ /g,'');
                    }  
                    s += "<div class='account-list-item abnormal'><div class='l-part'>";
                    s += "<img class='account_img' src="+item.account_img+" alt=''>";
                    s += "<div class='user-info'><p class='account_name'>"+item.account_name+"</p>";
                    s += "<p><img class='plateform_img' src="+item.plateform_img+"/>"+item.plateform_name+"</p></div></div>";
                    s += "<div class='r-part'><p class='linktobg' notice="+notice+" aid= "+item.id+" domain="+item.domain+" type="+item.account_type+" login_name="+(item.login_name ? item.login_name : '-')+" url="+item.platform_login_url+" mudomain="+item.mutiDomain+">重新授权</p><p>账号过期</p></div></div>";
                });
                node.append(s); 
            } 
        }
    );
}

// 关闭按钮
$('body').on('click','#jianmei-abnormal .jianmei-close',function(e){
    $('.jianmei-abnormal').fadeOut(function(){
        $('.jianmei-abnormal').remove();
    });
})
// 重新授权
$('body').on('click','#jianmei-abnormal .linktobg',function(e){
    let url = $(this).attr('url');
    let domain = $(this).attr('domain');
    let aid = $(this).attr('aid');
    let type = Number($(this).attr('type'));
    let loginName = $(this).attr('login_name') == "-" ? "" : $(this).attr('login_name'); 
    let muDomain =  $(this).attr('mudomain');
    let notice = $(this).attr('notice');
    chrome.runtime.sendMessage(
        {
            greeting: 'addAccount',
            data:{
                aid,
                domain,
                url,
                type,
                muDomain,
                notice
                // "uname":loginName,
            }
        },
        function(response) {
    
        }
    );
})
// 滑动到底部
$('.jianmei-list').scroll(function(){
    let h = $(this).height();
    let sh = $(this)[0].scrollHeight;
    let st =$(this)[0].scrollTop;
    if(h+st>=sh){
        page++;
        getList(page);
    }
});



