function locomotiveScroll() {
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

locomotiveScroll()

function loaderAnimation() {

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
        opacity: 0,
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.out"
    })

    tl.to(".loader", {
        opacity: 0,
        display: "none"
    })

    tl.to(".page1 .hero-section .text-section .text .stag h1 .a", {
        y: "-100%",
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.02,
    }, "trigger-same")

    tl.to(".page1 .hero-section .text-section .text .stag h1 .b", {
        y: "-100%",
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.02,
        delay: 0.2
    }, "trigger-same")

    tl.to(".page1 .hero-section .text-section .text .stag h1 .c", {
        y: "-100%",
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.02,
        delay: 0.4
    }, "trigger-same")

}

loaderAnimation()

function someEventlistener() {

    function webtitleToggle() {

        let h2logo = document.querySelectorAll(".page1 .nav .nav-logo h2");
        let navLogo = document.querySelector(".page1 .nav .nav-logo");

        h2logo.forEach((logo) => {
            navLogo.addEventListener("mouseenter", () => {
                logo.style.transform = "translateY(100%)";
            });

            navLogo.addEventListener("mouseleave", () => {
                logo.style.transform = "translateY(0%)";
            });
        });

    }

    webtitleToggle()

    function navButtonToggle() {

        function signinbutton() {

            let signIn = document.querySelector(".page1 .nav .nav-button .sign-in");
            let signInspan = document.querySelectorAll(".page1 .nav .nav-button .sign-in h2 span");

            signInspan.forEach((spans) => {
                signIn.addEventListener("mouseenter", () => {
                    gsap.to(spans, {
                        y: "200%",
                        duration: 0.3,
                        stagger: 0.1
                    })
                })

                signIn.addEventListener("mouseleave", () => {
                    gsap.to(spans, {
                        y: "0%",
                        duration: 0.3,
                        stagger: 0.1
                    })
                })
            })
        }

        signinbutton()

        function signUpbutton() {

            let signUp = document.querySelector(".page1 .nav .nav-button button");
            let signUpspan = document.querySelectorAll(".page1 .nav .nav-button button .courses h2 span");

            signUp.addEventListener("mouseenter", () => {
                gsap.to(signUpspan, {
                    y: "180%",
                    duration: 0.3
                })
            })

            signUp.addEventListener("mouseleave", () => {
                gsap.to(signUpspan, {
                    y: "0%",
                    duration: 0.3
                })
            })
        }

        signUpbutton()

    }

    navButtonToggle()

    function collectionButton() {

        let colBtn = document.querySelector(".page1 .video-section .video-content .collection");
        let colBtnspan = document.querySelectorAll(".page1 .video-section .video-content .collection h2 span");

        colBtn.addEventListener("mouseenter", () => {
            gsap.to(colBtnspan, {
                y: "100%",
                duration: 0.3
            })
        })

        colBtn.addEventListener("mouseleave", () => {
            gsap.to(colBtnspan, {
                y: "0%",
                duration: 0.3
            })
        })
    }

    collectionButton()

    function footerButton() {

        let footbtn = document.querySelector(".footer .footer-btn");
        let footbtnspan = document.querySelectorAll(".footer .footer-btn .btn-text h3");

        footbtn.addEventListener("mouseenter", () => {
            gsap.to(footbtnspan, {
                y: "100%",
                duration: 0.3
            })
        })

        footbtn.addEventListener("mouseleave", () => {
            gsap.to(footbtnspan, {
                y: "0%",
                duration: 0.3
            })
        })
    }

    footerButton()
}

someEventlistener()

function gsapAnimation() {

    function videoAnimation() {

        let video = document.querySelector(".page1 .video-section .video");
        let paraSpan = document.querySelectorAll(".page1 .video-section .video-content .video-text .para span");

        gsap.to(video, {
            y: 550,
            x: -550,
            duration: 2,
            scale: 0.25,
            ease: "power2.out",
            scrollTrigger: {
                trigger: video,
                scroller: ".main",
                scrub: 2,
                start: "top 70%",
                end: "top 40%"
            }
        })

        gsap.from(paraSpan, {
            y: "100%",
            duration: 0.3,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: paraSpan,
                scroller: ".main",
                scrub: 2,
                start: "top 170%",
                end: "top 140%"
            }
        })
    }

    videoAnimation()

    function bubbleAnimation() {

        const bubbles = gsap.utils.toArray(".bubble-section .bubble");

        gsap.from(bubbles, {
            y: "100%",
            duration: 0.4,
            ease: "power2.out",
            stagger: {
                from: "edges",
                amount: 0.3
            },
            scrollTrigger: {
                trigger: ".bubble-section",
                scroller: ".main",
                scrub: 1.5,
                start: "top 180%",
                end: "top 150%"
            }
        });

    }

    bubbleAnimation()

    function TextRevealAnimation() {

        let firstText = document.querySelectorAll(".page2 .anim-title .h2 .anime .first");
        let secondText = document.querySelectorAll(".page2 .anim-title .h2 .anime .second");
        let thirdText = document.querySelectorAll(".page2 .anim-title .h2 .anime .third");
        let textAnime = document.querySelector(".page2 .anim-title")
        let tl = gsap.timeline();

        tl.from(firstText, {
            y: "100%",
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.05,
            scrollTrigger: {
                trigger: textAnime,
                scroller: ".main",
                start: "top 160%",
                end: "top 130%",
                scrub: 2
            }
        })

        tl.from(secondText, {
            y: "100%",
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.05,
            scrollTrigger: {
                trigger: textAnime,
                scroller: ".main",
                start: "top 150%",
                end: "top 120%",
                scrub: 2
            }
        })

        tl.from(thirdText, {
            y: "100%",
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.05,
            scrollTrigger: {
                trigger: textAnime,
                scroller: ".main",
                start: "top 140%",
                end: "top 110%",
                scrub: 2
            }
        })
    }

    TextRevealAnimation()

    function cardAnimation() {

        let cards = document.querySelectorAll(".page2 .anime-cards .card");
        let cardAnime = document.querySelector(".page2 .anime-cards");

        gsap.from(cards, {
            y: "100%",
            duration: 0.5,
            ease: "back.out(2)",
            stagger: -0.1,
            scrollTrigger: {
                trigger: cardAnime,
                scroller: ".main",
                start: "top 170%",
                end: "top 140%",
                scrub: 2
            }
        })
    }

    cardAnimation()

    function titleAnimation() {

        let firstTrigger = document.querySelectorAll(".page2 .title-section .learn h2 .trigger1");
        let secondTrigger = document.querySelectorAll(".page2 .title-section .learn h2 .trigger2");
        let thirdTrigger = document.querySelectorAll(".page2 .title-section .learn h2 .trigger3");
        let titleSection = document.querySelector(".page2 .title-section");

        gsap.to(firstTrigger, {
            y: "-100%",
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.02,
            scrollTrigger: {
                trigger: titleSection,
                scroller: ".main",
                start: "top 160%",
                end: "top 130%",
                scrub: 2
            }
        })

        gsap.to(secondTrigger, {
            y: "-100%",
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.02,
            scrollTrigger: {
                trigger: titleSection,
                scroller: ".main",
                start: "top 150%",
                end: "top 120%",
                scrub: 2
            }
        })

        gsap.to(thirdTrigger, {
            y: "-100%",
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.02,
            scrollTrigger: {
                trigger: titleSection,
                scroller: ".main",
                start: "top 140%",
                end: "top 110%",
                scrub: 2
            }
        })
    }

    titleAnimation()

    function imageAnimation() {

        let img1 = document.querySelector(".page2 .details .detail-section .detail1-section .detail-imgsection .img1");
        let img2 = document.querySelector(".page2 .details .detail-section .detail1-section .detail-imgsection .img2");
        let img3 = document.querySelector(".page2 .details .detail-section .detail1-section .detail-imgsection .img3");
        let imgSection = document.querySelector(".page2 .details .detail-section .detail1-section .detail-imgsection");

        gsap.to(img1, {
            scale: 1.1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: imgSection,
                scroller: ".main",
                start: "top 170%",
                end: "top 140%",
                scrub: 2
            }
        })

        gsap.to(img2, {
            scale: 1.1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: imgSection,
                scroller: ".main",
                start: "top 150%",
                end: "top 100%",
                scrub: 2
            }
        })

        gsap.to(img3, {
            scale: 1.1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: imgSection,
                scroller: ".main",
                start: "top 130%",
                end: "top 80%",
                scrub: 2
            }
        })
    }

    imageAnimation()

    function pinSection() {

        let textAnimeSection = document.querySelector(".text-animesection");
        let pinFirst = document.querySelectorAll(".text-animesection .anime-text h2 .pin-first");
        let pinSecond = document.querySelectorAll(".text-animesection .anime-text h2 .pin-second");

        gsap.from(pinFirst, {
            y: "-250%",
            duration: 0.6,
            opacity: 0,
            ease: "back.out(1.7)",
            stagger: 0.05,
            scrollTrigger: {
                trigger: textAnimeSection,
                scroller: ".main",
                start: "top 130%",
                end: "top 100%",
                scrub: 2
            }
        })

        gsap.from(pinSecond, {
            y: "250%",
            duration: 0.6,
            opacity: 0,
            ease: "back.out(1.7)",
            stagger: 0.05,
            scrollTrigger: {
                trigger: textAnimeSection,
                scroller: ".main",
                start: "top 130%",
                end: "top 100%",
                scrub: 2
            }
        })
    }

    pinSection()
}

gsapAnimation()