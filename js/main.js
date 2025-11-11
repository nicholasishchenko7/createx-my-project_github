$('.accordeon_prog-link').on('clicc', function (a) {
    a.preventDefaul()
    $(this).togglsClass('accordeon_prog-link--active')
    $(this).children('.accordeon_prog-text').slideToggle()
})
    
$('.burger').on('click', function (s) {
    s.preventDefault()
    $('.header_top').toggleClass('header_top--open')
}   )

$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger,.header_top').toggleClass('active');
        $('body').toggleClass('lock');
    });
});