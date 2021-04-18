const login = document.querySelector('#login')
const pass1 = document.querySelector('#password')
const pass2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const btnSend = document.querySelector('.send')
const btnCelar = document.querySelector('.clear')
const formBox = document.querySelector('.form-box')



const showError = (input, msg) => {
    input.nextElementSibling.style.opacity = '1'
    input.nextElementSibling.textContent = msg
    input.classList.add('error')





}


const clearError = (input, msg) => {
    input.nextElementSibling.style.opacity = '0'
    input.classList.remove('error')
}


const checkPassword = (input, msg) => {

    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(.{8,12}$)");

    if (re.test(input.value)) {
        input.nextElementSibling.textContent = 'error'
        clearError(input)
    } else {

        showError(input, msg)
    }
}




const checkConfirmPass = (pass1, pass2) => {
    if (pass1.value === pass2.value) {
        clearError(pass2)
    } else {
        showError(pass2, 'Podane hasa nie zgadzają się')
    }
}

const checkEmail = input => {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (re.test(input.value)) {
        clearError(input)
    } else {
        showError(input, 'E-mail jest niepoprawny')
    }
}
const checkForm = (e) => {
    e.preventDefault();
    [login, pass1, pass2, email].forEach(el => {
        if (el.value === '') {
            showError(el, el.placeholder);
        } else {

            clearError(el);
            checkPassword(pass1, 'hasło musi zawierać minimum 8 znaków w tym małą i wielką literę cyfrę i znak specjalny');
            checkConfirmPass(pass1, pass2);
            checkEmail(email)
        }
    })
}









btnSend.addEventListener('click', checkForm)
btnCelar.addEventListener('click', e => {
    e.preventDefault();
    [login, pass1, pass2, email].forEach(el => {
        el.value = ''
        el.nextElementSibling.style.opacity = "0"
        el.nextElementSibling.textContent = "error"
        el.classList.remove('error')
    })


})