navBar = document.querySelector('header')

window.onscroll = (e) => { hideNav(e) }
let prevScrollPos = 0
let currentScrollPos = prevScrollPos;
function hideNav(e) {
    if (window.innerWidth > 1000) {
        currentScrollPos = window.scrollY;
        let posDiff = currentScrollPos - prevScrollPos;
        if (posDiff > 3) {
            navBar.style.opacity = '0'
        }
        else if (posDiff < -3) {
            navBar.style.opacity = "1"
        }
        prevScrollPos = currentScrollPos;
    }
}

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = "translate(0)"
            entry.target.style.opacity = '1'
        }
    });
}
const options = {
    threshold: 0.05,
}
const observer = new IntersectionObserver(callback, options)
let toBeObserved = document.querySelectorAll('.animate')
for (let i = 0; i < toBeObserved.length; i++) {
    observer.observe(toBeObserved[i])
}


let menuBar = document.querySelector('.fa-bars')
let closeButton = document.querySelector('.fa-xmark')
let modalMenu = document.querySelector('.modalMenu')

function showMenu() {
    modalMenu.style.display = 'flex'
    document.body.style.overflow = 'hidden'
}
function closeMenu() {
    modalMenu.style.display = 'none';
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'scroll';
}
