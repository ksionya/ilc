//Табы
 $('.tab-menu li').on('click', function () {
     $(this).toggleClass('active').siblings().removeClass('active');
     $(this).closest('.tab').children('.tab-content').children('.tab-item').hide().removeClass('open').eq($(this).index()).show().addClass('open')
 } )


// Табы
$('.tab-menu li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');


})
//Бургер
$('.burger').on('click', function () {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
})





