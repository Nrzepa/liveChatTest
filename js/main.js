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
        chatWindow.classList.add = "open";
        chatWindow.style.display = "block";
    } else {
        chatWindow.classList.remove = "open";
        chatWindow.style.display = "none";
    }
});
