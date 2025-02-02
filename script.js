gsap.from(".s-logo", {
    x:-300,
    duration:2,
    stagger:1,
    ease:"elastic.out(1,0.3)",
})

gsap.to(".div2", {
    scale:100,
    duration: 1,
    delay: 2,
    ease: "power2.inOut",
});

gsap.to(".div2",{
    rotate:45,
    y:100,
    x:500,
    duration:1,
    delay: 2,
    ease: "power2.inOut",
});

gsap.to(".div1", {
    opacity: 0,
    duration: 0.5,
    delay: 2.5,
    ease: "power1.inOut",
})

gsap.from(".header", 1.5, {
    delay: 2,
    y: -50,
    ease: "power4.inOut",
    stagger: {
        amount: 0.1,
    },
})

gsap.from(".back-text", 1.5, {
    delay: 2.5,
    y: -300,
    ease: "power3.inOut",
})

gsap.from(".moon-background", 1.5, {
    delay: 3,
    y: 500,
    ease: "power3.inOut",
})

gsap.from(".side-text", 1.5, {
    delay: 3,
    x: -500,
    ease: "power3.inOut",
})

gsap.from(".side-button", 1.5, {
    delay: 3,
    x: -500,
    ease: "power3.inOut",
})

gsap.from(".top-div .first-text, .sec-text, .third-text", {
    scale:0,
    delay:0,
    y:-200,
    ease: "power4.inOut",
    duration:2,
    scrollTrigger:{
        trigger:".top-div",
        scroller: "body",
        start:"top 60%",
    }
})

gsap.from(".bottom-div .info-box", {
    scale:0,
    delay:0,
    y:200,
    ease: "power4.inOut",
    duration:2,
    scrollTrigger:{
        trigger:".bottom-div",
        scroller: "body",
        start:"top 60%",
    }
})

gsap.from(".fourth-text", {
    scale:0,
    delay:0,
    x:-1000,
    ease: "power2.in",
    duration:1,
    scrollTrigger:{
        trigger:".fourth-text",
        scroller: "body",
        start:"top 60%",
    }
})

gsap.from(".fifth-text", {
    scale:0,
    delay:0,
    x:-1000,
    ease: "power2.in",
    duration:1,
    scrollTrigger:{
        trigger:".fifth-text",
        scroller: "body",
        start:"top 60%",
    }
})

gsap.from(".sixth-text", {
    scale:0,
    delay:0,
    x: 1000,
    ease: "power2.in",
    duration:1,
    scrollTrigger:{
        trigger:".sixth-text",
        scroller: "body",
        start:"top 80%",
    }
})

gsap.from(".aboutus-part a", {
    scale:0,
    delay:0,
    x: 1000,
    ease: "power2.in",
    duration:1,
    scrollTrigger:{
        trigger:".aboutus-part",
        scroller: "body",
        start:"top 50%",
    }
})

gsap.from(".tt-text", {
    scale:0,
    delay:0,
    y: -200,
    ease: "power2.in",
    duration:1,
    scrollTrigger:{
        trigger:".sev-text",
        scroller: "body",
        start:"top 50%",
    }
})

gsap.from(".fi-hr, .se-hr, .th-hr", {
    scale:0,
    delay:0,
    x: -200,
    ease: "power2.in",
    duration:1,
    scrollTrigger:{
        trigger:".fi-hr",
        scroller: "body",
        start:"top 50%",
    }
})

gsap.from(".fr-hr, .ff-hr, .sx-hr", {
    scale:0,
    delay:0,
    x: 200,
    ease: "power2.in",
    duration:1,
    scrollTrigger:{
        trigger:".fr-hr",
        scroller: "body",
        start:"top 50%",
    }
})

gsap.from(".linediv-1, .linediv-2, .linediv-3", {
    scale:0,
    delay:0.5,
    x: -200,
    ease: "power2.in",
    duration:1,
    scrollTrigger:{
        trigger:".linediv-1",
        scroller: "body",
        start:"top 50%",
    }
})

gsap.from(".linediv-4, .linediv-5, .linediv-6", {
    scale:0,
    delay:0.5,
    x: 200,
    ease: "power2.in",
    duration:1,
    scrollTrigger:{
        trigger:".linediv-4",
        scroller: "body",
        start:"top 50%",
    }
})

gsap.from(".earth-planet", {
    scale:0,
    delay:0,
    y: 200,
    ease: "power2.in",
    duration:1,
    scrollTrigger:{
        trigger:".earth-planet",
        scroller: "body",
        start:"top 100%",
    }
})

gsap.from(".left-div", {
    scale:0,
    delay:0,
    x: -1000,
    duration:1,
    scrollTrigger:{
        trigger:".left-div",
        scroller: "body",
        start:"top 100%", 
    }
})

gsap.from(".right-div", {
    scale:0,
    delay:0,
    x: 1000,
    duration:1,
    scrollTrigger:{
        trigger:".imgdiv-3",
        scroller: "body",
        start:"top 100%",
    }
})

const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
});

gsap.from(".sixleft-part", {
    scale:0,
    delay:0,
    x: -1000,
    duration:1,
    scrollTrigger:{
        trigger:".contact-div",
        scroller: "body",
        start:"top 100%", 
    }
})

gsap.from(".sixright-part", {
    scale:0,
    delay:0,
    x: 1000,
    duration:1,
    scrollTrigger:{
        trigger:".sixright-part",
        scroller: "body",
        start:"top 100%",
    }
})


// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Scroll to top when the button is clicked
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll
    });
});

