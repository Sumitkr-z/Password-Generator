const lengthInput = document.querySelector('#length-number');
const upper = document.querySelector('#uppercase');
const lower = document.querySelector('#lowercase');
const number = document.querySelector('#numbers');
const symbol = document.querySelector('#symbols');
const passDisplay = document.querySelector('#pass-input');
const generateBtn = document.querySelector('#generate');
const copyButton = document.getElementById('copy');

const uppercaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseStr = 'abcdefghijklmnopqrstuvwxyz';
const numberStr = '0123456789';
const symbolStr = '!@#$%^&*()_+';


generateBtn.addEventListener('click', () => {
    passDisplay.value= '';

    let str='';
    if(upper.checked) str+=uppercaseStr;
    if(lower.checked) str+=lowercaseStr;
    if(number.checked) str+=numberStr;
    if(symbol.checked) str+=symbolStr;

    let password = '';

    for(let i = 0; i<lengthInput.value; i++) {
        let index = Math.floor(Math.random() * str.length);
    password += str[index];
    }
    passDisplay.value = password;
})
copyButton.addEventListener('click', () => {
    if (passDisplay.value === '') {
        alert('Generate a password first!');
        return;
    }else{
        const newele = document.createElement('textarea');
        newele.value = passDisplay.value;
        document.body.appendChild(newele);
        newele.select();
        document.execCommand('copy');
        alert('Password Copied to Clipboard!');
        newele.remove();
    }
});


