import * as $ from "jquery";

const top_nav_button = $("#top_nav_button");
const left_nav_background = $(".left_nav_background");
const left_nav = $(".left_nav");

$(() => {
    top_nav_button.on("click", () => {
        left_nav_background.addClass("active");   
        left_nav.addClass("active");
    })
})

$(() => {
    $(document).on("click", (event) => {
        if($(event.target).closest('#top_nav_button').length == 0 && left_nav.hasClass("active")){
            if($(event.target).closest(left_nav).length == 0){
                left_nav.removeClass("active");
                left_nav_background.removeClass("active");
            }
        }
    })
})
