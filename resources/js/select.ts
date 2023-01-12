import * as $ from "jquery";

$(() => {
    $('#select_button').on('click', () => {
        if($('.select_window').hasClass('show')){
            $('.select_window').removeClass('show');
        } else {
            $('.select_window').addClass('show');
        }
    })
})

$(() => {
    $('#deliver_now').on('click', () => {
        $('.select_text, #text').empty();
        $('<div id="text">Dostarcz teraz</div>').appendTo($('.select_text'));
        $('.select_window').removeClass('show');
    })
})


$(() => {
    $(document).on('click', (event) => {
        if($('.select_window').hasClass('show')){
            if($(event.target).closest('.select_box').length == 0){
                $('.select_window').removeClass('show');
            }
        }
    })
})
/*const target = document.querySelector('.select_box') as HTMLDivElement;

document.addEventListener('click', (event) => {
  const withinBoundaries = event.composedPath().includes(target);

  if (!withinBoundaries) {
    $('.select_window').removeClass('show');
  }
})*/

