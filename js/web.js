$('#scrollToTop').on('click', (e) => {
    $('html, body').animate({
        scrollTop: 0
    }, 800)
})


$('.qa-item').click(function(e) {
    $(this).toggleClass('active');
    $(this).find('.add-icon').toggleClass('d-none');
    $(this).find('.remove-icon').toggleClass('d-block');
    $(this).find('.collapse-content p').toggleClass('show');
});