let burger = $('.burger');
let nov = $ ('.header__nav');
let button = $('.product__content-btn');
let overlay = $('.overlay');
let close = $('.popup__close,.popup__close-btn');
let second = $('.second');
let form = $('.popup__form');
let thanks= $('.popup__thanks');

button.on('click',function () {
overlay.fadeIn('slow');
    form.fadeIn('slow');
    thanks.fadeOut('slow')
});
$(overlay).click(function (e) {
    if ($(e.target).closest('.popup').length) {

        return;
    }
    $('.overlay').fadeOut();
});
second.on('click',function (e) {
    e.preventDefault();
overlay.fadeOut('slow');
    form.fadeOut('slow');
    overlay.fadeIn('slow');
    thanks.fadeIn('slow');
});
burger.on('click', function () {
    nov.toggleClass('active');
    burger.toggleClass('active');
});
close.on('click', function () {
overlay.fadeOut('slow');
    form.fadeOut('slow');
});




