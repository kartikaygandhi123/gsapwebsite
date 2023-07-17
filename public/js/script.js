var tl = gsap.timeline();

tl.from("#nav h1,#nav h4,#nav h3", {
    x: -100,
    opacity: 0,
    duration: 0.4,
    delay: 0.3,
    stagger: 0.4,
});

tl.from("#left h1", {
    x: 400,
    opacity: 0,
    duration: 0.9,
    stagger: 0.4,
});

tl.from("#right img", {
    scale: 2,
    opacity: 0,
    duration: 0.4,
});

gsap.from("#page2 .box", {
    scale: 0,
    opacity: 0,
    duration: 0.7,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#page2 box",
        scroller: "body",
    },
});
