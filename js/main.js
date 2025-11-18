// var chatOpen = false;
// var chatRendered = false;
// var chatDiv = null;
// var iframe = null;

// function toggleChat() {
//     chatOpen = !chatOpen;
// }

// var btn = document.querySelector('#openChatButton');
// console.log('btn: ' + btn);
// btn.addEventListener('click', function() {
//     console.log('this.chatRendered before: ' + chatRendered);
//     console.log('this.chatOpen before: ' + chatOpen);
//     toggleChat();
//     console.log('this.chatRendered after: ' + chatRendered);
//     console.log('this.chatOpen after: ' + chatOpen);
//     if(!chatRendered) {
//         chatDiv = document.createElement("div");
//         chatDiv.style.height = '270px';
//         chatDiv.style.width = '220px';
//         chatDiv.style.position = 'fixed';
//         chatDiv.style.bottom = '4rem';
//         chatDiv.style.right = '1rem';
//         chatDiv.style.backgroundColor = 'white';
//         document.body.appendChild(chatDiv);
        
//         iframe = document.createElement("iframe");
//         iframe.setAttribute("src", "https://messenger-dev5-dev-ed.develop.my.site.com/test/external-chat");
//         iframe.setAttribute("scrolling", "no");
//         iframe.setAttribute("frameborder", "0");
//         iframe.setAttribute("id", "AutoIframeHeight");
//         iframe.setAttribute("width", "100%");
//         iframe.setAttribute("height", "100%");
//         chatDiv.appendChild(iframe);
        
//         chatRendered = true;
//     }
//     console.log('chatDiv: ' + chatDiv);
//     console.log('iframe: ' + iframe);
//     console.log('this.chatRendered final: ' + chatRendered);
//     if (chatOpen) {
//         chatDiv.style.display = "block";
//     } else {
//         chatDiv.style.display = "none";
//     }
// });
