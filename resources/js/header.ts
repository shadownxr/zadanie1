import * as $ from 'jquery';

const header_top = document.querySelector('#header_top') as HTMLDivElement;
const header_anchor = document.querySelector('#header_anchor') as HTMLDivElement;
const menu = document.querySelector('.menu') as HTMLDivElement;
const input_box = document.querySelector('#header_input_box') as HTMLDivElement;
const search_section = document.querySelector('.search_section') as HTMLDivElement;

$(() => {
    if(window.pageYOffset !== 0){
        header_top.classList.add('top_scrolled');
        header_anchor.classList.add('anchor_scrolled');
        menu.classList.add('menu_scrolled');

        if(($('.search_section').offset().top + $('.search_section').height()) < (window.pageYOffset + menu.offsetHeight)){
            input_box.classList.remove('hidden');
            input_box.classList.add('shown');
            $('.text').addClass('shown');
        }
    }

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

        if(($('.search_section').offset().top + $('.search_section').height()) < (window.pageYOffset + menu.offsetHeight)){
            input_box.classList.remove('hidden');
            input_box.classList.add('shown');
            $('.text').addClass('shown');
        }

        if(($('.search_section').offset().top + $('.search_section').height()) > (window.pageYOffset + menu.offsetHeight)){
            input_box.classList.remove('shown');
            input_box.classList.add('hidden');
            $('.text').removeClass('shown');
        }

        /*if(!$('.search_section').is(':visible')){
            input_box.classList.remove('hidden');
            input_box.classList.add('shown');
        } else {
            input_box.classList.add('hidden');
            input_box.classList.remove('shown');
        }*/
    }
})