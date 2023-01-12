import * as $ from 'jquery';

const plan_later = $('#plan_later');
const select_window = $('.select_window');
const dialog_window = $('.dialog_window'); 
const close_button = $('.close_button');
const accept_button = $('.accept_button');
const cancel_button = $('.cancel_button');
const select_date = $('#date');
const select_hour = $('#hour');

$(() => {
    plan_later.on('click', () => {
        select_window.removeClass('show');
        dialog_window.addClass('show');
    })
})

$(() => {
    close_button.on('click', () => {
        dialog_window.removeClass('show');
    });
})

$(() => {
    cancel_button.on('click', () => {
        $('.select_text, #text').empty();
        $('<div id="text">Dostarcz teraz</div>').appendTo($('.select_text'));
        dialog_window.removeClass('show');
        dialog_window.removeClass('show');
    });
})

$(() => {
    accept_button.on('click', () => {
        let date = select_date.val();
        let hour = select_hour.val();
        $('.select_text, #text').empty();
        $('<div id="text">'+ date + ' ' + hour +'</div>').appendTo($('.select_text'));
        dialog_window.removeClass('show');
    })
})

$(() => {
    $(document).on('click', (event) => {
        if($(event.target).closest('.select_box').length == 0 && dialog_window.hasClass('show')){
            if($(event.target).closest('.dialog_focus').length == 0){
                dialog_window.removeClass('show');
            }
        }
    })
})