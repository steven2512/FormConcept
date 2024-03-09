const form = document.querySelector('form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')
const formControl = document.querySelector('.form-control')

//return the label of the field
function fieldLabel(input) {
    let label = input.previousElementSibling
    return label.innerText
}



//invalid input
function showError(target, message) {
    const formControl = target.parentElement
    const errorMessage = target.nextElementSibling
    formControl.className = "form-control error"
    errorMessage.innerText = message

}

//valid input
function showSuccess(target) {
    const formControl = target.parentElement
    formControl.className = "form-control success"
}

//check if email is valid
function emailCheck(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email.value)) {
        showError(email, `Email is invalid`);
    } else {
        showSuccess(email)
    }
};

//check if passwords match
function passCheck(input1, input2) {
    if (input1.value !== input2.value) {
        showError(password2, 'Passwords do not match')
    }
}


function validCheck(targetArr) {
    for (let target of targetArr) {
        if (!target.value.trim()) {
            showError(target, `${fieldLabel(target)} is required`);

        } else {
            showSuccess(target)
        }
    }
}

function lengthCheck(target, min, max) {
    if (target.value.length < min) {
        showError(target, `${fieldLabel(target)} must be at least ${min} characters`);
    } else if (target.value.length > max) {
        showError(target, `${fieldLabel(target)} is at most ${max} characters`);
    } else {
        showSuccess(target);
    }
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    validCheck([username, email, password, password2]);
    lengthCheck(username, 5, 15)
    lengthCheck(password, 6, 15)
    emailCheck(email)
    passCheck(password, password2)
})


