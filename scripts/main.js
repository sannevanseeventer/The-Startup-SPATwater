const navToggle = document.querySelector("#navToggle")
const nav = document.querySelector("#nav-links")

navToggle.addEventListener("click", () => {
    nav.classList.toggle('nav-open')
})

const mixer = mixitup('.projects__container', {
    selectors: {
        target: '.projects__content'
    },
    animation: {
        duration: 600
    }
});

const linkProjects = document.querySelectorAll('.projects__item')

function activeProjects(){
    if(linkProjects){
        linkProjects.forEach(l=> l.classList.remove('active-projects'))
        this.classList.add('active-projects')
    }
}
linkProjects.forEach(l=> l.addEventListener('click', activeProjects))


let text = document.getElementById('text');
let bird = document.getElementById('bird');
let berg2 = document.getElementById('berg2');
let berg1 = document.getElementById('berg1');
let house = document.getElementById('house');


window.addEventListener ('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    berg1.style.left = value * 1.5 + 'px';
    berg2.style.left = value * -1.5 + 'px';
    house.style.top = value * 1 + 'px';

});