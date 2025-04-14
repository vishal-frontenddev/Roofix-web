// hamb
let nav = document.querySelector(".link")
let hamb = document.querySelector(".hamburger i")

let num = 0;

hamb.addEventListener("click", () => {
    if (num==0){
        nav.style.left = 0
        num= 1
        hamb.setAttribute("class", "fa-solid fa-xmark")
    }
    else {
         nav.style.left = "-100%"
         num = 0
         hamb.setAttribute("class", "fa-solid fa-bars") 
    }
})




// slider-page 
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  
//scroll-counter

let maxCount = 288; // The longest counter
let counters = [
    { box: document.getElementById("counter-box-1"), counter: document.getElementById("counter-1"), maxCount: 288 },
    { box: document.getElementById("counter-box-2"), counter: document.getElementById("counter-2"), maxCount: 90 },
    { box: document.getElementById("counter-box-3"), counter: document.getElementById("counter-3"), maxCount: 20 }
];
let started = false; // Ensure counting starts only once

document.addEventListener("scroll", function () {
    let counterPosition = counters[0].box.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (counterPosition < screenHeight && !started) {
        started = true;
        counters.forEach(item => item.box.style.display = "block"); // Show all counters
        startCounting();
    }
});

function startCounting() {
    let count = 1;
    let interval = setInterval(() => {
        if (count >= maxCount) {
            clearInterval(interval);
        } else {
            count++;
            counters.forEach(item => {
                let step = item.maxCount / maxCount; // Scale smaller counters to match
                item.counter.textContent = Math.floor(count * step);
            });
        }
    }, 10); // Adjust speed if needed
}



let page =  document.querySelector(".page4")

let feltProgress = document.querySelector(".felt")

let roofProgress = document.querySelector(".roofs")

let chimneyProgress = document.querySelector(".chimney")

page.addEventListener("scroll", function ()  {
    setTimeout(()=>{
        feltProgress.classList.add("prog")
        roofProgress.classList.add("prog-2")
        chimneyProgress.classList.add("prog-3")
    })
}, 2000)


// swipper slider

const productSwiper = new Swiper(".product-slider", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 800,
  });







