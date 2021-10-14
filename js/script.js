
const nameRef = document.querySelector('input#name.error-border');
nameRef.focus();

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
    console.log(totalCost)
    costAct.textContent = `Total: $${totalCost}`
});


