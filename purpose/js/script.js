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

//MAGIC SCROLL

var tl = new TimelineMax({ onUpdate: updatePercentage });
var tl1 = new TimelineMax({ onUpdate: updatePercentage });
var tl2 = new TimelineMax({ onUpdate: updatePercentage });
var tl3 = new TimelineMax({ onUpdate: updatePercentage });
const controller = new ScrollMagic.Controller();

tl.from(".purpose-title", 1, { x: 50, opacity: 0 });
tl.from(".purpose-line", 1, { width: 0 }, "=-.5");

const scene = new ScrollMagic.Scene({
    triggerElement: "#purpose",
    triggerHook: "onEnter",
    duration: "100%"
})
    .setPin("#purposes")
    .setTween(tl1)
    .addTo(controller);


tl1.from(".value__title", 1, { x: 50, opacity: 0 });
tl1.from(".value__line", 1, { width: 0 }, "=-.5");

const scene1 = new ScrollMagic.Scene({
    triggerElement: "#value",
    triggerHook: "onEnter",
    duration: "100%"
})
    .setPin("#values")
    .setTween(tl1)
    .addTo(controller);

tl2.from(".mission__title", 1, { x: 50, opacity: 0 });
tl2.from(".mission__line", 1, { width: 0 }, "=-.5");

const scene2 = new ScrollMagic.Scene({
    triggerElement: "#mission",
    triggerHook: "onEnter",
    duration: "100%"
})
    .setPin("#missions")
    .setTween(tl2)
    .addTo(controller);

tl3.from(".strategy__title", 1, { x: 50, opacity: 0 });
tl3.from(".strategy__line", 1, { width: 0 }, "=-.5");

const scene3 = new ScrollMagic.Scene({
    triggerElement: "#strategy",
    triggerHook: "onEnter",
    duration: "100%"
})
    .setPin("#strategys")
    .setTween(tl3)
    .addTo(controller);


function updatePercentage() {
    //percent.innerHTML = (tl.progress() *100 ).toFixed();
    tl.progress();
    tl1.progress();
    tl2.progress();
    tl3.progress();
    console.log(tl.progress());
    console.log(tl1.progress());
    console.log(tl2.progress());
    console.log(tl3.progress());
}
