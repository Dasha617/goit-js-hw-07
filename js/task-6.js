const validationInputRef = document.querySelector('#validation-input');


const dataLengthStr = validationInputRef.attributes['data-length'].value;
const dataLength = parseInt(dataLengthStr);


validationInputRef.addEventListener('blur', addRemoveClassOnInput)

function addRemoveClassOnInput() {
const inputValueLength = validationInputRef.value.length;
    
       
    if (inputValueLength === dataLength) {
        validationInputRef.classList.add('valid')
        validationInputRef.classList.remove('invalid')
    } else {
        validationInputRef.classList.remove('valid')
        validationInputRef.classList.add('invalid')
    }
}