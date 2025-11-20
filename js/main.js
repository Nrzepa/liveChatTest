var chatOpen = false;
var chatRendered = false;
// var chatDiv = null;
// var iframe = null;

function toggleChat() {
    chatOpen = !chatOpen;
}

var btn = document.querySelector('#openChatButton');
var chatWindow = document.querySelector('#chatWindow');
btn.addEventListener('click', function() {
    toggleChat();
    if(!chatRendered) {
        chatRendered = true;
    }
    if (chatOpen) {
        chatWindow.style.class = "chat-window open";
        // chatWindow.style.display = "block";
    } else {
        chatWindow.style.class = "chat-window";
        // chatWindow.style.display = "none";
    }
});
