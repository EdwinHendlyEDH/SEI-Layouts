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
`x`
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
