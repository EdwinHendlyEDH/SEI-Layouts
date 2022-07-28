// cursor
let cursor = document.createElement('span');
cursor.className = 'cursor';
document.body.appendChild(cursor);

let mouse = {
    x: 0,
    y: 0,
}

window.addEventListener('mousemove', function(event){
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    cursor.style.top = `${mouse.y}px`;
    cursor.style.left= `${mouse.x}px`;
});

// hamburger toggle 
document.querySelector('.hamburger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
});

// nav active in scroll (set background)
window.addEventListener('scroll', function(){
    let nav = document.querySelector('#home .nav')
    let bodyTop = document.querySelector('body').getBoundingClientRect().top;
    if(bodyTop < 0){
        nav.classList.add('fixed');
    }else{
        nav.classList.remove('fixed');
    };
});


// slider
let bannerSlider = document.querySelector('[data-banners]');
let banners = document.querySelectorAll('[data-banner]');
let leftArrow = document.querySelector('[data-left]');
let rightArrow = document.querySelector('[data-right]');
let bannerImage = document.querySelector('[data-banner-image]')
let current = 0;
let moveRate = 40;
leftArrow.addEventListener('click', function(){
    rightArrow.style.opacity = '1';
    if(current == 0) return;
    current -= moveRate;
    bannerImage.style.transform = `translateX(-${current}rem)`;
    arrows();
});
rightArrow.addEventListener('click', function(){
    leftArrow.style.opacity = '1';
    if(current == moveRate*2) return;
    current += moveRate;
    bannerImage.style.transform = `translateX(-${current}rem)`;
    arrows();
});
arrows();
function arrows() {
    if(current == 0){
        leftArrow.style.opacity = '.5';
    }
    else if(current == moveRate*2){
        rightArrow.style.opacity = '.5';
    }
    else{
        leftArrow.style.opacity = '1';
        rightArrow.style.opacity = '1';
    }
    return;
}


function autoMove(){
    if(current == moveRate*2){
        current = 0;
        bannerImage.style.transform = `translateX(-${current}rem)`;
        leftArrow.style.opacity = '.5';
        rightArrow.style.opacity = '1';
    }else{
        current += moveRate;
        bannerImage.style.transform = `translateX(-${current}rem)`;
        if(current == moveRate*2){
            rightArrow.style.opacity = '.5';
        }else{
            rightArrow.style.opacity = '1';
        }
        leftArrow.style.opacity = '1';
    }
}

setInterval(() => {
    autoMove();
}, 5000);



// intersection observer

const squads = document.querySelectorAll('.squad-item');
const aboutUsText = document.querySelector('[data-about-text]');
const dataAbout = document.querySelectorAll('[data-about]');

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
        if(entry.isIntersecting){
            setTimeout(() => {
                entry.target.classList.add('show');
            }, i * 80);
        }
        if(entry.isIntersecting) observer.unobserve(entry.target);
        
    });
}, {
    threshold: 1
});

const observerItems = [];
observerItems.push(squads, dataAbout);

observerItems.forEach(items => {
    items.forEach(item => {
    observer.observe(item);
    })
})
observer.observe(aboutUsText);
















