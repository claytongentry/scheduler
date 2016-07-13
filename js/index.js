$(document).ready(function() {
  $('.add-todo').slick({
    arrows: false,
    dots: true,
  });
});

$('.add-todo-deadline').click(function() {
  $('.add-todo-deadline').removeClass('active')
  $(this).addClass('active')
})

/*********************
-- Advance Activity --
*********************/
$(document).keypress(function(e) {
  if (e.which == 13) next()
})

// $('.add-todo-deadline').click(function() {
//   next()
// })

function next() {
  $('.add-todo').slick('slickNext')
}