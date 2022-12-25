const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters  = document.querySelectorAll('.percentages-item__counter'),
    lines = document.querySelectorAll('.scale-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

$(document).ready(function(){
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

