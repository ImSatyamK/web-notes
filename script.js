const saveBtn = document.querySelector('#save-btn');
const urlInput = document.querySelector('#url-input');
const urlEl = document.querySelector('#url-list');
const clearBtn = document.querySelector('#clear-btn');

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
    let url = urlInput.value;
    if (!url) {
        return;
    }
    urlEl.style.visibility = 'visible';
    urlList.push(url);
    localStorage.setItem('urlList', JSON.stringify(urlList));
    urlEl.innerHTML += `<li><a href="${url}" target="_blank"> ${url} </a></li>`
    urlInput.value = '';
});

urlInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        let url = urlInput.value;
        if (!url) {
            return;
        }
        urlEl.style.visibility = 'visible';
        urlList.push(url);
        localStorage.setItem('urlList', JSON.stringify(urlList));
        urlEl.innerHTML += `<li><a href="${url}" target="_blank"> ${url} </a></li>`
        urlInput.value = '';
    }
});

clearBtn.addEventListener('click', function() {
    localStorage.clear();
    urlList = [];
    urlEl.innerHTML = '';
    urlEl.style.visibility = 'hidden';
});