// console.log($('#extension_id'))
$('#extension_id').click(function(){
    chrome.runtime.sendMessage({
        greeting: 'pulish'
    }, function (response) {
        console.log(response)
    }
    )
})