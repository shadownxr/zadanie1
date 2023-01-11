const menu_button = document.querySelector("#menu_button") as HTMLButtonElement;
const menu_background = document.querySelector(".menu_background") as HTMLDivElement;
const left_menu = document.querySelector(".left_menu") as HTMLDivElement;

menu_button.onclick = () => {
    menu_background.classList.add("active");
    left_menu.classList.add("active");
}

menu_background.onclick = () => {
    menu_background.classList.remove("active");
    left_menu.classList.remove("active");
}
