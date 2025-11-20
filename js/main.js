var chatOpen = false;
var chatRendered = false;
// var chatDiv = null;
// var iframe = null;

function toggleChat() {
    chatOpen = !chatOpen;
}

var btn = document.querySelector('#openChatButton');
var chatWindow = document.querySelector('.chat-window');
btn.addEventListener('click', function() {
    toggleChat();
    if(!chatRendered) {
        chatRendered = true;
    }
    if (chatOpen) {
        // chatWindow.className = "chat-window open";
        chatWindow.classList.add("open");
    } else {
        // chatWindow.className = "chat-window";
        chatWindow.classList.remove("open");
    }
});
