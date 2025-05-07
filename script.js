function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },

        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

}

locomotive()

function loader() {
    let tl = gsap.timeline();

    tl.from(".g", {
        x: "-100%",
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
    }, 0)

    tl.from(".s", {
        y: "-100%",
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
    }, "-=0.4")

    tl.from(".a", {
        y: "100%",
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
    }, "-=0.4")

    tl.from(".p", {
        x: "100%",
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
    }, "-=0.4")

    tl.to(".loader-text h2 span", {
        y: "100%",
        duration: 0.5,
        stagger: 0.05,
        opacity: 0,
        ease: "back.out(1.7)"
    })

    tl.to(".loader", {
        opacity: 0,
        display: "none",
        duration: 0.5,
        ease: "power4.out"
    })

    tl.to(".page1 .hero-section .text-section .text .stag h1 .a", {
        y: "-100%",
        duration: 0.6,
        ease: "power2.out"
    }, "auto")

    tl.to(".page1 .hero-section .text-section .text .stag h1 .b", {
        y: "-100%",
        duration: 0.6,
        delay: 0.3,
        ease: "power2.out"
    }, "auto")

    tl.to(".page1 .hero-section .text-section .text .stag h1 .c", {
        y: "-100%",
        duration: 0.6,
        delay: 0.6,
        ease: "power2.out"
    }, "auto")
}

loader()

function videoanimation() {

    gsap.set(".page1 .video-section .video", {
        x: 0,
        y: 0,
        scale: 1
    })
    gsap.to(".page1 .video-section .video", {
        y: 550,
        x: -550,
        scale: 0.25,
        scrollTrigger: {
            scroller: ".main",
            trigger: ".page1 .video-section .video",
            scrub: 2,
            start: "top 60%",
            end: "top 30%"
        }
    })

}

videoanimation()

function gsapanimation() {

    gsap.from(".page1 .video-section .video-content .video-text .para span", {
        y: "100%",
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".page1 .video-section .video-content .video-text .para",
            scroller: ".main",
            scrub: 2,
            start: "top 150%",
            end: "top 120%"
        }
    })

    gsap.from(".bubble-section .appear-left", {
        y: "100%",
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".bubble-section",
            scroller: ".main",
            scrub: 2,
            start: "top 170%",
            end: "top 140%"
        }
    })

    gsap.from(".bubble-section .appear-right", {
        y: "100%",
        stagger: -0.1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".bubble-section",
            scroller: ".main",
            scrub: 2,
            start: "top 170%",
            end: "top 140%"
        }
    })

    gsap.from(".page2 .anim-title .h2 .anime .first", {
        y: "100%",
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".page2 .anim-title",
            scroller: ".main",
            scrub: 2,
            start: "top 170%",
            end: "top 140%"
        }
    })

    gsap.from(".page2 .anim-title .h2 .anime .second", {
        y: "100%",
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".page2 .anim-title",
            scroller: ".main",
            scrub: 2,
            start: "top 150%",
            end: "top 120%"
        }
    })

    gsap.from(".page2 .anime-cards .card", {
        y: "200%",
        duration: 2.5,
        stagger: -0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".page2 .anime-cards",
            scroller: ".main",
            start: "top 160%",
            end: "top 120%",
            scrub: 2
        }
    })
}

gsapanimation()

function textanimation() {
    let tl = gsap.timeline();

    tl.to(".page2 .title-section .learn h2 .trigger1", {
        y: "-100%",
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".page2 .title-section .learn h2",
            scroller: ".main",
            scrub: 2,
            start: "top 150%",
            end: "top 120%"
        }
    })

    tl.to(".page2 .title-section .learn h2 .trigger2", {
        y: "-100%",
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".page2 .title-section .learn h2",
            scroller: ".main",
            scrub: 2,
            start: "top 130%",
            end: "top 100%"
        }
    })

    tl.to(".page2 .title-section .learn h2 .trigger3", {
        y: "-100%",
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".page2 .title-section .learn h2",
            scroller: ".main",
            scrub: 2,
            start: "top 110%",
            end: "top 180%"
        }
    })
}

textanimation()

function imganimation() {
    let tl = gsap.timeline();

    tl.to(".page2 .details .detail-section .detail1-section .detail-imgsection .img1", {
        scale: 1.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".page2 .details .detail-section .detail1-section .detail-imgsection",
            scroller: ".main",
            scrub: 2,
            start: "top 160%",
            end: "top 130%"
        }
    })

    tl.to(".page2 .details .detail-section .detail1-section .detail-imgsection .img2", {
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".page2 .details .detail-section .detail1-section .detail-imgsection",
            scroller: ".main",
            scrub: 2,
            start: "top 130%",
            end: "top 90%"
        }
    })

    tl.to(".page2 .details .detail-section .detail1-section .detail-imgsection .img3", {
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".page2 .details .detail-section .detail1-section .detail-imgsection",
            scroller: ".main",
            scrub: 2,
            start: "top 100%",
            end: "top 60%"
        }
    })
}

imganimation()

function pinSectionAnimation() {
    gsap.from(".text-animesection .anime-text h2 .pin-first", {
        y: 450,
        opacity: 0,
        duration: 0.8,
        stagger: -0.12,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".text-animesection",
            scroller: ".main",
            scrub: 2,
            start: "top 150%",
            end: "top 100%"
        }
    })

    gsap.from(".text-animesection .anime-text h2 .pin-second", {
        y: -450,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".text-animesection",
            scroller: ".main",
            scrub: 2,
            start: "top 150%",
            end: "top 100%"
        }
    })
}

pinSectionAnimation()

function footerAnimation() {

    gsap.from(".bubble2-animation .appear2-left", {
        y: "100%",
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".bubble2-animation",
            scroller: ".main",
            scrub: 2,
            start: "top 170%",
            end: "top 140%"
        }
    })

    gsap.from(".bubble2-animation .appear2-right", {
        y: "100%",
        stagger: -0.1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".bubble2-animation",
            scroller: ".main",
            scrub: 2,
            start: "top 170%",
            end: "top 140%"
        }
    })
}

footerAnimation()

// function webtitleanimation() {

//     let tl = gsap.timeline();

//     tl.to(".footer .copyright-section .web-title .title-text h3 span .trigger-first", {
//         y: "-100%",
//         duration: 0.6,
//         ease: "power2.out",
//         scrollTrigger: {
//             trigger: ".footer .copyright-section .web-title .title-text h3",
//             scroller: ".main",
//             scrub: 2,
//             start: "top 150%",
//             end: "top 120%"
//         }
//     })

//     tl.to(".footer .copyright-section .web-title .title-text h3 span .trigger-second", {
//         y: "-100%",
//         duration: 0.6,
//         ease: "power2.out",
//         scrollTrigger: {
//             trigger: ".footer .copyright-section .web-title .title-text h3",
//             scroller: ".main",
//             scrub: 2,
//             start: "top 150%",
//             end: "top 120%"
//         }
//     })

//     tl.to(".footer .copyright-section .web-title .title-text h3 span .trigger-third", {
//         y: "-100%",
//         duration: 0.6,
//         ease: "power2.out",
//         scrollTrigger: {
//             trigger: ".footer .copyright-section .web-title .title-text h3",
//             scroller: ".main",
//             scrub: 2,
//             start: "top 150%",
//             end: "top 120%"
//         }
//     })
// }

// webtitleanimation()