$('.icon-menu').click(function(event) {
	$(this).toggleClass('active');
	$('.header__menu').toggleClass('active');
	$('body').toggleClass('lock');
});

function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

const menu = document.querySelector('.fall-menu'),
      link = document.querySelector('.menu__link--f');

link.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    e.preventDefault();
});

document.addEventListener("click", (e) => {
    if (!e.target.closest('.menu__link--f')) {
        menu.classList.remove('active');
    }
});
