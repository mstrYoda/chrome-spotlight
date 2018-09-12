function search() {
    alert(searchTextElement.textContent)
}

window.addEventListener('load', function load(event) {
    document.getElementById('searchText').onkeypress = function() {
        searchValue = document.getElementById('searchText').value;

        if(searchValue != null && searchValue.length > 5) {
            
            src = "https://www.google.com.tr/search?q="+ searchValue +"&oq=chrome+extension&aqs=chrome.0.69i59l4j69i60l2.2559j0j9&sourceid=chrome&ie=UTF-8";
            
            //chrome.tabs.create({url: src});
            chrome.windows.create({'url': src, 'type': 'popup'});
        }
    };
});