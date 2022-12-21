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