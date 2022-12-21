
$(document).ready(function(){
    $('ul.catalog-tabs').on('click', 'li:not(.catalog__tab__active)', function() {
        $(this)
        .addClass('catalog__tab__active').siblings().removeClass('catalog__tab__active')
        .closest('div.container').find('div.catalog-content').removeClass('catalog-content__active').eq($(this).index()).addClass('catalog-content__active');
});
function toggleSlide(item){
    $(item).each(function(i){
        $(this).on('click',function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content__active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list__active');
        })
    })
}
toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');

// Modal

$('[data-modal=consultation]').on('click',function(){
    $('.overlay,#consultation').fadeIn('slow');

});
$('.modal__close').on('click',function(){
    $('.overlay,#consultation,#order,#thanks').fadeOut('slow');

}); 
$('.catalog-item__btn').each(function(i){
    $(this).on('click',function(){
        $('#order .modal__descrip').text($('.catalog-item__subtittle').eq(i).text());
        $('.overlay,#order').fadeIn('slow');
    })
})
// Validation Forms

function ValidateForms(form){
    $(form).validate({
        rules: {
            name: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Введите ваше имя.",
            phone: "Введите номер телефона с кодом вашей страны.",
            email: {
                required: "Введите вашу Электронную почту.",
                email: "Введите почту формата 'example@gmail.com'."
            }
        }
    });
}
ValidateForms('#order form');
ValidateForms('#consultation-form');
ValidateForms('#consultation form');

// number val

$('input[name=phone]').mask("+38 (999) 999-9999");

$('form').submit(function(e){
    e.preventDefault();
    
  /*   if(!$(this).valid()){
        return;
    } */

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function(){
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn();

        $('form').trigger('reset');
    });
    return false;
});

// page up.svg
$(window).scroll(function(){
    if ($(this).scrollTop()> 1200){
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();

    }
});
$("a[href=#up]").click(function(){
    var _href= $(this).attr("href");
    $("html,body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});
new WOW().init();
});   
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput: false,
    controls: false,
    navPosition: "bottom",
    nav: false,
    speed: 900,
    responsive: {
        320: {
            nav: true
        },
        767: {
            nav: false
        }
    }
    
});
document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev') 
})
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next') 
});