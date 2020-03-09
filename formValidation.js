function validateForm() {
    event.preventDefault();
    // Grab the username & password fields
    const usernameField = document.forms['form']['username'].value;
    const passwordField = document.forms['form']['password'].value;

    if (usernameField.length < 5) {
        return alert('Username must be at least 5 characters');
    } else if (passwordField.length < 10) {
        return alert('Password must be at least 10 characters');
    }

    return alert(
        `Success: \n username: ${usernameField} \n password: ${passwordField}`
    );
}
