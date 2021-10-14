
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

const designEl = document.querySelector('select#design');
const colorEl = document.querySelector('select#color');
const colorOpt = colorEl.children;

colorEl.disabled = true;
designEl.addEventListener('change', (e) => {
    colorEl.disabled = false;
//get the index of the selected design option, find a way to remove attributes
    const index = e.target.selectedIndex
    console.log(index)
    
    for (let i = 1; i < colorOpt.length; i++) {
        const selectedDesign = e.target;
        const themeOption = colorOpt[i].getAttribute('data-theme');
        // console.log('sel:',selectedDesign.value, i)
         console.log('opt:',themeOption, i);
        
        if (selectedDesign.value === themeOption) {
            colorOpt[i].hidden = false;
            selectedDesign.children[index].setAttribute('selected', true);
        } else {
            colorOpt[i].hidden = true;
        }
    }
});

//console.log('design',designEl,'color',colorEl,colorOpt);