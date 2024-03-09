const form = document.querySelector('form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirm = document.querySelector('#password2')
const formControl = document.querySelector('.form-control')

function showError(target, message) {
    const formControl = target.parentElement
    formControl.classList.add('error')
}

function showSuccess(object, message) {
    const formControl = target.parentElement
    formControl.classList.add('success')
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!username.value) {
        showError(username, "Username is required")
    } else {
        showSuccess(username);
    }
})


