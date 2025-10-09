fetch(
	'https://beyond-connect-uat.my.salesforce.com/services/oauth2/lightningoutsingleaccess',
	{
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: 'access_token=00Dd1000006nBdB!AQEAQEi9IVSaodCcGJAWv2QLEv9gFLL3wyH1MYUCIJ.ooqWOopR5YYgsA3TvnD9K60fQsAooVyu1wcsq5ht9zEKbMDDrfs.L, lightning_out_app_id=1Usd100000004rdCAA',
	}
)
	.then((response) => {
		console.log('Status:', response.status);
		return response.json();
	})
	.then((data) => {
		console.log('Success:', data);
	})
	.catch((error) => {
		console.error('Error:', error);
	});
