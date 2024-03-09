const form = document.querySelector('form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirm = document.querySelector('#password2')
const formControl = document.querySelector('.form-control')

function showError(target, message) {
    const formControl = target.parentElement
    const errorMessage = target.nextElementSibling
    formControl.classList.add('error')
    errorMessage.innerText = message

}

function showSuccess(object, message) {
    const formControl = target.parentElement
    const errorMessage = target.nextElementSibling
    formControl.classList.add('success')
    errorMessage.innerText = message
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!username.value) {
        showError(username, "Username is required")
    } else {
        showSuccess(username);
    }
})


