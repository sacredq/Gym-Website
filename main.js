const typed = new Typed('.animated-text', {
    strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Loss', 'Weight Lifting', 'Running'],
    typeSpeed: 50, backSpeed: 50, backDelay: 1000, startDelay: 100, loop: true,
    cursorChar: '|', smartBackspace: true, 
});

AOS.init({
    offset: 300, duration: 1400, 
});

// const
const dotsBtn = document.getElementById("dots");
const nav = document.getElementById("navbar");


dotsBtn.addEventListener("click", () => {
    nav.classList.toggle("activeBar");

    dotsBtn.classList.toggle("fa-bars");
    dotsBtn.classList.toggle("fa-xmark");
});
