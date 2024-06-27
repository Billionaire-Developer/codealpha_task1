let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.value;
        if (value === 'C') {
            screen.value = '0';
        } else if (value === '=') {
            let result = Math.value(screen.value);
            screen.value = result;
        } else {
            screen.value += value;
        }
    });
});