if (document.location.pathname.match(/^\/login/)) {
	var $btnLogin = $('.btn-ldap-login');
	if ($btnLogin.length) {
		$('#login_password + .btn-login:not(.btn-ldap-login)').addClass('hide').prop('disabled', true).attr('type', 'button').remove();
		$btnLogin.addClass('btn-primary').attr('type', 'submit');

		$(".form-login").on("submit", (e) => {
			e.preventDefault();
			e.stopImmediatePropagation();
			$(".btn-ldap-login").click();
		});
	}
}