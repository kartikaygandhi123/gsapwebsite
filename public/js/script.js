var tl = gsap.timeline();

tl.from("#nav h1,#nav h4,#nav h3", {
    x: -100,
    opacity: 0,
    duration: 0.5,

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

gsap.from("#page2 .page2-head", {
    x: -250,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#page2 .box",
        scroller: "body",
    },
});

gsap.to("#page2 .box-container", {
    transform: "translateX(-110%)",

    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",

        start: "top 10",
        end: "top -200%",

        scrub: 2,
        pin: true,
    },
});

gsap.to("#page3 h1", {
    transform: "translateX(-200%)",
    fontWeight: "100",
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",

        start: "top 0",
        end: "top -200%",

        scrub: 2,
        pin: true,
    },
});
gsap.to("#page4 h1", {
    transform: "translateX(-200%)",
    fontWeight: "100",
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",

        start: "top 0",
        end: "top -200%",

        scrub: 2,
        pin: true,
    },
});
