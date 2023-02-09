
const navToggle = document.querySelector("#navToggle")
const nav = document.querySelector("#nav-links")
 
navToggle.addEventListener("click", () => {
    nav.classList.toggle('nav-open')
})

    /*===== MIXITUP FILTER PORTFOLIO =====*/ 
var mixer = mixitup(".portfolio__container", {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
});

/* Link active portfolio */ 
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l=> l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(l=> l.addEventListener('click', activePortfolio))




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
// PARALLAX
let text = document.getElementById('text');
let layer1 = document.getElementById('layer1');
let layer2 = document.getElementById('layer2');
let layer3 = document.getElementById('layer3');
let layer4 = document.getElementById('layer4');
let layer5 = document.getElementById('layer5');


window.addEventListener ('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    layer2.style.left = value * 0.3 + 'px';
    layer1.style.left = value * -0.5 + 'px';
    layer4.style.left = value * 0.3 + 'px';
    layer5.style.left = value * 0.3 + 'px';
    layer3.style.left = value * -0.3 + 'px';
    layer2.style.top = value * 0.5 + 'px';
    layer1.style.top = value * 1 + 'px';
    layer3.style.top = value * 0.5 + 'px';

});


//   gemeente

//Variables

var accordion = document.querySelector('.accordion');
var items = accordion.querySelectorAll('li');
var questions = accordion.querySelectorAll('.question');

//Funtions

function toggleAccordion() {
  var thisItem = this.parentNode;
  items.forEach(item => {
    if (thisItem == item) {
      thisItem.classList.toggle('open');
      return;
    }
    item.classList.remove('open');
  });
}

//Event Listeners

questions.forEach(question => question.addEventListener('click', toggleAccordion));

/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){ 
    if (videoFile.paused){
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else {
        // Pause video
        videoFile.pause(); 
        // We change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')

    }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)
