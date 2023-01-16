import * as $ from "jquery";

const menu_button = $("#menu_button");
const menu_background = $(".menu_background");
const left_nav = $(".left_nav");

$(() => {
    menu_button.on("click", () => {
        menu_background.addClass("active");   
        left_nav.addClass("active");
    })
})

$(() => {
    $(document).on("click", (event) => {
        if($(event.target).closest('#menu_button').length == 0 && left_nav.hasClass("active")){
            if($(event.target).closest(left_nav).length == 0){
                left_nav.removeClass("active");
                menu_background.removeClass("active");
            }
        }
    })
})
