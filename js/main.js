var clientId;
var clientSecret;
var fetchData;
var accessToken;
const searchParams = new URLSearchParams(window.location.search);
var frontdoorUrl;
document.getElementById('connection-btn').addEventListener('click', function() {
      clientId = document.getElementById('client-id').value;
      clientSecret = document.getElementById('client-secret').value;

      console.log('clientId: ' + clientId);
      console.log('clientSecret: ' + clientSecret);

    if(searchParams.has('code')) {
        fetch(
            'https://messenger-dev5-dev-ed.develop.my.salesforce.com/services/oauth2/token',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `grant_type=authorization_code&code=${searchParams.get('code')}&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=https://nrzepa.github.io/liveChatTest`,
            }
        )
            .then((response) => {
                console.log('response: ' + JSON.stringify(response));
                console.log('Status:', response.status);
                return response.json();
            })
            .then((data) => {
                fetchData = data;
                accessToken = fetchData.access_token;
                console.log('Success:', data);
                fetch(
                    'https://messenger-dev5-dev-ed.develop.my.salesforce.com/services/oauth2/lightningoutsingleaccess',
                    {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: `access_token=${accessToken}&lightning_out_app_id=1UsWy000000010vKAA`,
                    }
                )
                    .then((response) => {
                        console.log('Status:', response.status);
                        console.log('response: ' + JSON.stringify(response));
                        return response.json();
                    })
                    .then((data) => {
                        frontdoorUrl = data.frontdoor_uri;
                        const loElem = document.createElement("lightning-out-application");
                        loElem.setAttribute('components', 'c-external-chat');
                        loElem.setAttribute('frontdoor-url', frontdoorUrl);
                        document.body.appendChild(loElem);
                        const chatComponent = document.createElement("c-external-chat");
                        document.body.appendChild(chatComponent);
                        console.log('Success:', data);

                        setTimeout(() => {
                            const iframe = document.querySelector('iframe');
                            if (iframe) {
                                iframe.style.width = '200px';
                                iframe.style.height = '232px';
                                iframe.style.border = 'none'; // optional
                            } else {
                                console.warn('iframe not found yet');
                            }
                        }, 1500);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                        console.log(error.body);
                    });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    });
