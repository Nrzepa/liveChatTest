var clientId;
var clientSecret;
var fetchData;
var accessToken;
document.getElementById('connection-btn').addEventListener('click', function() {
      clientId = document.getElementById('client-id').value;
      clientSecret = document.getElementById('client-secret').value;

      console.log('clientId: ' + clientId);
      console.log('clientSecret: ' + clientSecret);

      fetch(
        'https://beyond-connect-uat.my.salesforce.com/services/oauth2/token',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
        }
    )
        .then((response) => {
            console.log('response: ' + JSON.stringify(response));
            console.log('Status:', response.status);
            return response.json();
        })
        .then((data) => {
            fetchData = data;
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

      console.log('fetchData:', fetchData);
    //   console.log('fetchData[access_token]:', fetchData[access_token]);
    //   accessToken = fetchData[access_token];
    //   console.log('accessToken:', accessToken);

    //   fetch(
    //     'https://beyond-connect-uat.salesforce.com/services/oauth2/lightningoutsingleaccess',
    //     {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded',
    //             'Accept': 'application/json',
    //         },
    //         body: `access_token=${accessToken}, lightning_out_app_id=1Usd100000004rdCAA`,
    //     }
    // )
    //     .then((response) => {
    //         console.log('Status:', response.status);
    //         return response.json();
    //     })
    //     .then((data) => {
    //         console.log('Success:', data);
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //         console.log(error.body);
    //     });
    });
