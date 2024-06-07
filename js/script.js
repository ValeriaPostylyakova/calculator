const value = document.querySelector('.calc__value');
const buttonNumber = Array.from(document.querySelectorAll('.calc__btn'));


buttonNumber.map((buttons) => {
    buttons.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'AC':
                value.innerText = '0';
                break;
            case '=':
                try {
                    value.innerText = eval(value.innerText);
                }catch(err) {
                    value.innerText = 'Error';
                }
               break;
            case '%':
                const pross = value.innerText + '/100';
                value.innerText = eval(pross); 
                break;
            case '+/-':
                value.innerText = '-';
                break;
            default:
                if(value.innerText === '0' && e.target.innerText !== '.') {
                    value.innerText = e.target.innerText;
                } else {
                    value.innerText += e.target.innerText;
                }
        }
    })
})




