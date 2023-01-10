const input = document.querySelector('.text') as HTMLInputElement;
const input_wrapper = document.querySelector('.input_wrapper') as HTMLDivElement;

console.log(input_wrapper);

input.onfocus = () => {
    input_wrapper.classList.add('active');
}
