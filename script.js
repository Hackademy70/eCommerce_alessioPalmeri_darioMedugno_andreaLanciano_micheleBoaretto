// Sezione numeri incrementali

let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');
let number3 = document.querySelector('#number3');


function createInterval(finalN, element) {
    let counter = 0;

    let interval = setInterval(() => {
        if (counter < finalN) {
            counter++;
            element.innerHTML = counter 
        } else {
            clearInterval(interval); 
        }        
    })
}

let confirm = false;

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && confirm == false) {
            createInterval(400, number1);
            createInterval(480, number2);
            createInterval(380, number3);
            confirm = true;
            // SET TIMEOUT()
            setTimeout(() => {
                confirm = false
            }, 8000);
        }
    })
})  


  

observer.observe(number1);

const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });