const form = document.querySelector('form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirm = document.querySelector('#password2')
const formControl = document.querySelector('.form-control')


//invalid input
function showError(target, message) {
    const formControl = target.parentElement
    const errorMessage = target.nextElementSibling
    formControl.classList.add('error')
    errorMessage.innerText = message

}

//valid input
function showSuccess(target, message) {
    const formControl = target.parentElement
    formControl.classList.add('success')
}

//check if email is valid
function validEmailCheck(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!username.value) {
        showError(username, "Username is required")
    } else {
        showSuccess(username, "");
    }
    if (!email.value) {
        showError(email, "Email is required")
    } else {
        showSuccess(email, "");
    }
    if (!password.value) {
        showError(password, "Username is required")
    } else {
        showSuccess(password, "");
    }
    if (!username.value) {
        showError(username, "Username is required")
    } else {
        showSuccess(username, "");
    }
})


