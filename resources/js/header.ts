const header_top = document.querySelector('#header_top') as HTMLDivElement;
const header_anchor = document.querySelector('#header_anchor') as HTMLDivElement;
const menu = document.querySelector('.menu') as HTMLDivElement;

document.onscroll = () => {
    if(window.pageYOffset !== 0){
        header_top.classList.add('top_scrolled');
        header_anchor.classList.add('anchor_scrolled');
        menu.classList.add('menu_scrolled');
    } else {
        header_top.classList.remove('top_scrolled');
        header_anchor.classList.remove('anchor_scrolled');
        menu.classList.remove('menu_scrolled');
    }
}