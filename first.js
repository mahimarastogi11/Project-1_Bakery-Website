const incrementButtons = document.querySelectorAll('.increment');
const decrementButtons = document.querySelectorAll('.decrement');
const inputFields = document.querySelectorAll('input[type="number"]');

incrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        inputFields[index].value++;
    });
});

decrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (inputFields[index].value > 1) {
            inputFields[index].value--;
        }
    });
});