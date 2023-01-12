import * as $ from "jquery";

const menu_button = $("#menu_button");
const menu_background = $(".menu_background");
const left_menu = $(".left_menu");

$(() => {
    menu_button.on("click", () => {
        menu_background.addClass("active");   
        left_menu.addClass("active");
    })
})

$(() => {
    $(document).on("click", (event) => {
        if($(event.target).closest('#menu_button').length == 0 && left_menu.hasClass("active")){
            if($(event.target).closest(left_menu).length == 0){
                left_menu.removeClass("active");
                menu_background.removeClass("active");
            }
        }
    })
})
