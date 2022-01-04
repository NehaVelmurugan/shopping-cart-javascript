const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phonno = document.getElementById('Phonno');
const Address = document.getElementById('Address');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const PhonnoValue = Phonno.value.trim();
    const AddressValue = Address.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    }
    else if (usernameValue.length < 3) {
        setError(username, 'username must be at least 3 characters.')
    }
    else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(PhonnoValue === '') {
        setError(Phonno, 'Phonno is required');
    } else if (PhonnoValue.length < 8 ) {
        setError(Phonno, 'Phonno must be at least 10 numbers.')
    } else {
        setSuccess(Phonno);
    }

    if(AddressValue === '') {
        setError(Address, 'Provide valid address');
    } else {
        setSuccess(Address);
    }

};
