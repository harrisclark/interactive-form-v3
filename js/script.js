
const nameInput = document.querySelector('input#name.error-border');
nameInput.focus();

const selectJobRole = document.querySelector('select#title');
const otherJobRole = document.querySelector('input#other-job-role');
otherJobRole.style.display = 'none';

selectJobRole.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        otherJobRole.style.display = '';
    } else {
        otherJobRole.style.display = 'none';
    }
});

const designEl = document.querySelector('#design');
const colorEl = document.querySelector('#color');
const colorOpt = colorEl.children;

colorEl.disabled = true;

//availabe colors are displayed based upon selected design
designEl.addEventListener('change', (e) => {
    colorEl.disabled = false;
    for (let i = 0; i < colorOpt.length; i++) {
        const selectedDesign = e.target;
        const themeOption = colorOpt[i].getAttribute('data-theme');
        // console.log('sel:',selectedDesign.value, i)
         //console.log('opt:',themeOption, i);
        
        if (selectedDesign.value === themeOption) {
            colorOpt[i].hidden = false;
            colorOpt[i].setAttribute('selected', true);
        } else {
            colorOpt[i].hidden = true;
            colorOpt[i].removeAttribute('selected');
        }
    }
});

const registerAct = document.querySelector('#activities-box');
const costAct = document.querySelector('#activities-cost');
let totalCost = 0;

registerAct.addEventListener('change', (e) => {
    const dataCost = parseInt(e.target.getAttribute('data-cost'))
    //console.log(dataCost)
    if (e.target.checked) {
        totalCost += dataCost;
    } else {
        totalCost -= dataCost;
    }
    costAct.textContent = `Total: $${totalCost}`;
});

const payment = document.getElementById('payment');
const credit = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');


paypal.hidden = true;
bitcoin.hidden = true;

payment.children[1].setAttribute('selected', true);
payment.addEventListener('change', (e) => {
    const selectedPayment = e.target.value;
    if (selectedPayment === 'paypal') {
        credit.hidden = true;
        paypal.hidden = false;
        bitcoin.hidden = true;
    } else if (selectedPayment === 'bitcoin') {
        credit.hidden = true;
        paypal.hidden = true;
        bitcoin.hidden = false;
    } else {
        credit.hidden = false;
        paypal.hidden = true;
        bitcoin.hidden = true;
    }
});

//variables for form validation. Will also be working with 'const nameInput' and 'const registerAct'
const email = document.querySelector('#email');
const cardNumber = document.querySelector('#cc-num');
const zipCode = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    //regular expressions for user input validation
    const regexName = /^[a-z]+((\s)?([a-z])*){2} ?$/ig
    const regexEmail = /^[^@]+@[^@.]+\.[a-z]+$/ig
    const regexCard = /^(\d{4})[-| ]?(\d{3,4})[-| ]?(\d{3,4})[-| ]?(\d{3,4})$/g
    const regexZip = /^\d{5}$/g
    const regexCvv = /^\d{3}$/g
    function invalidFormEntry(regex, input) {
        if (regex.test(input.value) === false) {
            e.preventDefault();
            input.parentElement.classList.add('not-valid');
        } else {
            input.style.border = '';
            input.parentElement.classList.remove('not-valid');
        }
    }
    //call 'invalidFormEntry' for each input field so they are all validated on every 'submit'
    invalidFormEntry(regexName, nameInput)
    invalidFormEntry(regexEmail, email)
    invalidFormEntry(regexCard, cardNumber)
    invalidFormEntry(regexZip, zipCode)
    invalidFormEntry(regexCvv, cvv)

    //prevent 'submit' if no activities are selected
    if (totalCost === 0) {
        e.preventDefault();
        registerAct.parentElement.classList.add('not-valid');
    } else {
        registerAct.parentElement.classList.remove('not-valid');
    }
});


const checkboxes = document.querySelectorAll('[type="checkbox"]')
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('focus', (e) => {
        e.target.parentElement.classList.add('focus');
    });
    checkboxes[i].addEventListener('blur', (e) => {
        e.target.parentElement.classList.remove('focus');
    });
}