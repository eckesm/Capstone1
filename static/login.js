async function login(email_address, password) {
	data = {
		email_address : email_address,
		password      : password
	};
	const response = await axios.post('/login', data);

	status = response['data']['status'];
	message = response['data']['message'];
	// redirect_url = response['data']['redirect_url'];
	if (status == 'success') {
		access_token = response['data']['access_token'];
		localStorage.setItem('access_token', access_token);

		redirect_url=$('#next').val()
        if (redirect_url){
		    window.location.href = redirect_url;
        } else {
		    window.location.href = '/';
        }
	}
	else {
		// Submit form in order to trigger form validation responses.
		$('#login_form').submit();
	}
}

$('#login_button').on('click', function(e) {
	e.preventDefault();
	login($('#email_address').val(), $('#password').val());
});
