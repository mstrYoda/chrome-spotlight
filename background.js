chrome.runtime.onMessage.addListener((resp, sender, senResp)=>{
    if(resp.msg = 'sayac_sifirla'){
        adet = 0;
        chrome.browserAction.setBadgeText({text: "0"});
        veriler = [];
        chrome.storage.sync.set({'veriler': veriler}, function() {
          console.log('veriler sifirlandi');
        });
    }
});

chrome.commands.onCommand.addListener(function(command) {
    chrome.windows.create(
        {
            'url': 'search.html', 
            'type': 'popup', 
            'height': 200, 
            'width':200
        }, function(window) {
        console.log("girdi");
    });
});