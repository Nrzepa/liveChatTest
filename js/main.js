var chatOpen = false;
var chatRendered = false;
// var chatDiv = null;
// var iframe = null;

function toggleChat() {
    chatOpen = !chatOpen;
}

get chatClasses() {
    return chatOpen ? 'chat-window open' : 'chat-window';
}

var btn = document.querySelector('#openChatButton');
var chatWindow = document.querySelector('.chat-window');
btn.addEventListener('click', function() {
    toggleChat();
    if(!chatRendered) {
        chatRendered = true;
    }
    if (chatOpen) {
        chatWindow.style.display = "block";
    } else {
        chatWindow.style.display = "none";
    }
});
