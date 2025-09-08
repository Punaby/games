// renderer.js
const webview = document.getElementById('web-view');
const urlInput = document.getElementById('url-input');
const goBtn = document.getElementById('go-btn');
const backBtn = document.getElementById('back-btn');
const forwardBtn = document.getElementById('forward-btn');

goBtn.addEventListener('click', () => {
  let url = urlInput.value;
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }
  webview.loadURL(url);
});

backBtn.addEventListener('click', () => {
  if (webview.canGoBack()) {
    webview.goBack();
  }
});

forwardBtn.addEventListener('click', () => {
  if (webview.canGoForward()) {
    webview.goForward();
  }
});

webview.addEventListener('did-finish-load', () => {
  urlInput.value = webview.getURL();
});
