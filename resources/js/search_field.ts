const input = document.querySelector('#search_input') as HTMLInputElement;
const input_wrapper = document.querySelector('.search_input_wrapper') as HTMLDivElement;

console.log(input_wrapper);

input.onfocus = () => {
    input_wrapper.classList.add('active');
}

input.addEventListener('focusout', () => {
    input_wrapper.classList.remove('active');
})