var chatOpen = false;
var chatRendered = false;

function toggleChat() {
    this.chatOpen = !this.chatOpen;
}

var btn = document.querySelector('#openChatButton');
console.log('btn: ' + btn);
btn.addEventListener('click', function() {
    console.log('this.chatRendered before: ' + chatRendered);
    console.log('this.chatOpen before: ' + chatOpen);
    toggleChat();
    console.log('this.chatRendered after: ' + chatRendered);
    console.log('this.chatOpen after: ' + chatOpen);
    if(chatRendered === false) {
        const chatDiv = document.createElement("div");
        chatDiv.style.height = '235px';
        chatDiv.style.width = '200px';
        chatDiv.style.position = 'fixed';
        chatDiv.style.bottom = '4rem';
        chatDiv.style.right = '1rem';
        document.body.appendChild(chatDiv);
        const iframe = document.createElement("iframe");
        iframe.setAttribute("src", "https://messenger-dev5-dev-ed.develop.my.site.com/test/external-chat");
        iframe.setAttribute("scrolling", "no");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("id", "AutoIframeHeight");
        iframe.setAttribute("width", "100%");
        iframe.setAttribute("height", "100%");
        chatDiv.appendChild(iframe);
    }
    console.log('chatDiv: ' + chatDiv);
    console.log('iframe: ' + iframe);
    chatRendered = true;
    console.log('this.chatRendered final: ' + chatRendered);
});
