"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

//DROPDOWN

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}

//MENU BURGER
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

//SCROLLBY

document.querySelectorAll('a.yakor').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });

        if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
        }
    });
})

//SLIDER

$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		easing: 'ease-out',
		infinite: true,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: true,
		swipe: true,
		touchTreshold: 5,
		touchMove: true,
		waitForAnimate: false,
		centerMode: false,
		variableWidth: false,
		rows: 1,
		slidesPerRow: 1,
		vertical: false,
		verticalSwiping: false,
		fade: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			},

			{
				breakpoint: 682,
				settings: {
					centerMode: false
				}
			}
		],
		mobileFirst: false
	});
});

