const saveBtn = document.querySelector('#save-btn');
const urlInput = document.querySelector('#url-input');
const urlEl = document.querySelector('#url-list');
const clearBtn = document.querySelector('#clear-btn');
const saveTabEl = document.querySelector('#save-tab-btn');

let urlList = JSON.parse(localStorage.getItem('urlList')) || [];

if (urlList.length === 0) {
    urlEl.style.visibility = 'hidden';
} else {
    urlEl.style.visibility = 'visible';
}

let urls = ``;
for (let i = 0; i < urlList.length; i++) {
    urls += `<li><a href="${urlList[i]}" target="_blank"> ${urlList[i]} </a></li>`;
}
urlEl.innerHTML += urls;

saveBtn.addEventListener('click', function() {
    let currenturl = urlInput.value;
    if (!currenturl) {
        return;
    }
    urlEl.style.visibility = 'visible';
    urlList.push(currenturl);
    localStorage.setItem('urlList', JSON.stringify(urlList));
    urlEl.innerHTML += `<li><a href="${currenturl}" target="_blank"> ${currenturl} </a></li>`
    urlInput.value = '';
});

urlInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        let currenturl = urlInput.value;
        if (!currenturl) {
            return;
        }
        urlEl.style.visibility = 'visible';
        urlList.push(currenturl);
        localStorage.setItem('urlList', JSON.stringify(urlList));
        urlEl.innerHTML += `<li><a href="${currenturl}" target="_blank"> ${currenturl} </a></li>`
        urlInput.value = '';
    }
});

clearBtn.addEventListener('dblclick', function() {
    localStorage.clear();
    urlList = [];
    urlEl.innerHTML = '';
    urlEl.style.visibility = 'hidden';
});

saveTabEl.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let currenturl = tabs[0].url;
        if (!currenturl) {
            return;
        }
        urlEl.style.visibility = 'visible';
        urlList.push(currenturl);
        localStorage.setItem('urlList', JSON.stringify(urlList));
        urlEl.innerHTML += `<li><a href="${currenturl}" target="_blank"> ${currenturl} </a></li>`
        urlInput.value = '';
    })
});