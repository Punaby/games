const urlInput = document.getElementById('url-input');
const goBtn = document.getElementById('go-btn');
const webFrame = document.getElementById('web-frame');

goBtn.addEventListener('click', () => {
    let url = urlInput.value.trim();
    if (url) {
        // Ensure the URL has a protocol
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }
        webFrame.src = url;
    }
});
