
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


let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})

