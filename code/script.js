const buttons = document.querySelectorAll('.btn-q');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';

        if (answer.style.display === 'block') {
            button.style.backgroundColor = '#FFAB07';
        } else {
            button.style.backgroundColor = 'white';
        }
    });
});
