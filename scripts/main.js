
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

const container = document.querySelector('section.hero')
const containerBox = container.getBoundingClientRect()

const city = document.querySelector('#city')
const water = document.querySelector('#water')
const bergje4 = document.querySelector('#bergje4')
const bergje3 = document.querySelector('#bergje3')
const bergje2 = document.querySelector('#bergje2')
// const text = document.querySelector('#herotext')
const grond2 = document.querySelector('#grond')
// const huisje = document.querySelector('#huisje')



window.addEventListener('scroll', () => {
    let clamped = clamp(0, containerBox.height, window.scrollY)
    let lerped = invlerp(0, containerBox.height, clamped)
    console.log(lerped)

    city.setAttribute('transform', `translate(0, ${lerped * 200}) matrix(1.00963,0,0,1,998.834,3465.8)`)
    water.setAttribute('transform', `translate(0, ${lerped * 200}) matrix(1.0062,0,0,1,1011.15,3463.85)`)
    bergje4.setAttribute('transform', `translate(0, ${lerped * 200}) matrix(1.93766,0,0,1.85526,494.074,2854.49)`)
    bergje3.setAttribute('transform', `translate(${lerped * 500}, ${lerped * 200}) matrix(0.965133,0,0,1,1049.98,3425.34)`)
    bergje2.setAttribute('transform', `translate(${lerped * -300}, 0) matrix(1,0,0,1,13.0848,-1194.21)`)
    // text.setAttribute('transform', `translate(0, ${lerped * 400})`)
    grond.setAttribute('transform', `translate(0, 0) matrix(1,0,0,1,1024.99,3697.78)`)
    // huisje.setAttribute('transform', `translate(0, ${lerped * 500}) matrix(-1.56706,0,0,1.59419,3205.5,1529.55)`)

})



// PARALLAX 2


// const container2 = document.querySelector('section.hero')
// const containerBox2 = container.getBoundingClientRect()

// const city2 = document.querySelector('#city2')
// const water2 = document.querySelector('#water2')
// const bergje4_2 = document.querySelector('#bergje4_2')
// const bergje3_2 = document.querySelector('#bergje3_2')
// const bergje2_2 = document.querySelector('#bergje2_2')
// // const text = document.querySelector('#herotext')
// const grond2_2 = document.querySelector('#grond2')
// // const huisje = document.querySelector('#huisje')



// window.addEventListener('scroll', () => {
//     let clamped = clamp(0, containerBox2.height, window.scrollY)
//     let lerped = invlerp(0, containerBox2.height, clamped)
//     console.log(lerped)

//     city2.setAttribute('transform', `translate(0, ${lerped * 600}) matrix(1.00963,0,0,1,998.834,3465.8)`)
//     water2.setAttribute('transform', `translate(0, ${lerped * 200}) matrix(1.0062,0,0,1,1011.15,3463.85)`)
//     bergje4_2.setAttribute('transform', `translate(0, ${lerped * 200}) matrix(1.93766,0,0,1.85526,494.074,2854.49)`)
//     bergje3_2.setAttribute('transform', `translate(${lerped * 900}, ${lerped * 200}) matrix(0.965133,0,0,1,1049.98,3425.34)`)
//     bergje2_2.setAttribute('transform', `translate(${lerped * -300}, 0) matrix(1,0,0,1,13.0848,-1194.21)`)
//     // text.setAttribute('transform', `translate(0, ${lerped * 400})`)
//     grond2.setAttribute('transform', `translate(0, 0) matrix(1,0,0,1,1024.99,3697.78)`)
//     // huisje.setAttribute('transform', `translate(0, ${lerped * 500}) matrix(-1.56706,0,0,1.59419,3205.5,1529.55)`)
   
    


// })

/**
 * Yields a number clamped within a given spectrum. If you give it a number that
 * falls within the bounds of the minimum and maximum it will yield that number.
 * If not it will return either the minimum or the maximum. For example:
 *  clamp(50, 100, 20) yields 50 (because value < min)
 *  clamp(50, 100, 75) yields 75 (because min < value < max)
 *  clamp(50. 100. 120) yields 100 (because value > max)
 * @param {number} min the lower value of the spectrum
 * @param {number} max the higher value of the spectrum
 * @param {number} value the value to be clamped between min and max
 * @returns {number} the clamped value
 */
 function clamp(min, max, value) {
    return Math.min(Math.max(min, value), max)
  }
  
  /**
   * Lerp is short for lineair interpolation and yields a number on a spectrum
   * using the specified percentage. It's great for answering questions like: What
   * number is 50% between 50 and 100? For example: lerp(50, 100, 0.5) yields 75
   * @param {number} min the lower value of the spectrum
   * @param {number} max the higher value of the spectrum
   * @param {number} percentage the percentage
   * @returns {number} the lineair interpolated number
   */
  function lerp(min, max, percentage) {
    return min * (1 - percentage) + max * percentage
  }
  
  /**
   * Invlerp is short for inverse lineair interpolation and does the oposite of
   * the lerp function. Instead of passing a decimal midpoint, you pass any value
   * and it will return a percentage wherever it falls on that spectrum.
   * Internally it uses a clamp, so it will never yield a percentage below 0 or
   * above 1. It's great for answering questions like: How far through has a user
   * scrolled? For example: invlerp(50, 100, 75) yields 0.5
   * @param {number} min the lower value of the spectrum
   * @param {number} max the higher value of the spectrum
   * @param {number} value the number on the spectrum
   * @returns {number} the percentage of the value on the spectrum
   */
  function invlerp(min, max, value) {
    return min !== max ? (value - min) / (max - min) : 0
  }
  
  /**
   * Converts a value from one spectrum to another. You pass two spectra and a
   * value representing a point on the first spectrum. The function will then
   * extrapolate this point to the same place on the second spectrum. It's great
   * for animating elements a certain amount when the actual scroll distance is a
   * lot larger. For example: range(10, 100, 2000, 20000, 50) yields 10000
   * @param {number} min1 the lower value of the first spectrum
   * @param {number} max1the higher value of the first spectrum
   * @param {number} min2 the lower value of the second spectrum
   * @param {number} max2 the higher value of the second spectrum
   * @param {number} value the number on the first spectrum
   * @returns {number} the value extrapolated to the second spectrum
   */
  function range(min1, max1, min2, max2, value) {
    return lerp(min2, max2, invlerp(min1, max1, value))
  }


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