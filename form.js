const form = document.querySelector('form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')
const formControl = document.querySelector('.form-control')


//invalid input
function showError(target, message) {
    const formControl = target.parentElement
    const errorMessage = target.nextElementSibling
    formControl.classList.add('error')
    errorMessage.innerText = message

}

//valid input
function showSuccess(target) {
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

function validCheck(targetArr) {
    for (let target of targetArr) {
        if (!target.value.trim()) {
            let label = target.previousElementSibling;
            showError(target, `${label.innerText} is required`);
        }
        else {
            showSuccess(target)
        }
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    validCheck([username, email, password, password2]);

})


