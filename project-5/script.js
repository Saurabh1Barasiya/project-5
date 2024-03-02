// locomotive js lagate h to position fixed kaam nahi karta h.

function sheryAnimation() {
    Shery.imageEffect(".image-div", {
        style: 6,
        config: { "noiseDetail": { "value": 7.44, "range": [0, 100] }, "distortionAmount": { "value": 2.98, "range": [0, 10] }, "scale": { "value": 36.36, "range": [0, 100] }, "speed": { "value": 0.79, "range": [0, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7272749866888861 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.47, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
        gooey: true,
    })
}

function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }

        // follwoing line is not required to work pinning on touch screen

        /* pinType: document.querySelector("#main").style.transform
          ? "transform"
          : "fixed"*/
    });



    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

function cursorAnimation() {
    // ham pure document par eventlistner ko add kar rahe h. 

    // document.addEventListener("mousemove", function name(dets) {
    //     gsap.to("#crsr", {
    //         // x:dets.x,
    //         // y:dets.y,
    //         left: dets.x,
    //         top: dets.y,
    //     })
    // })

    // Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
    //     //Parameters are optional.
    //     // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    //     // duration: 1,
    // });


    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    })

    Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });


    // video ke ander moving element.

    var videoContainer = document.querySelector("#video-container");
    var video = document.querySelector("#video-container video");

    videoContainer.addEventListener("mouseenter",function(){
        videoContainer.addEventListener("mousemove",function(dets){
            gsap.to(".mousefollower",{
                display:"none",
            })
            gsap.to("#video-cursor",{
                left:dets.x-500,
                top:dets.y-200,
            })
        })


        var flag=0;
        videoContainer.addEventListener("click",function(){
            if(flag == 0){
                video.play();
                video.style.opacity=1;
                document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-line"></i>`;
                flag = 1;
                gsap.to("#video-cursor",{
                    scale:0.5,
                })
            }else{
                video.pause();
                video.style.opacity=0;
                document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-fill"></i>`;
                flag = 0;
                gsap.to("#video-cursor",{
                    scale:1
                })
            }
        })


        
    })




    videoContainer.addEventListener("mouseleave",function(){
        gsap.to(".mousefollower",{
            display:"initial",
        })
        gsap.to("#video-cursor",{
            top:"-15%",
            left:"70%",
        })
    })
        
    

}

function loadingAnimation() {
    var tl = gsap.timeline();

    tl.from(".line h1", {
        y: 150,
        stagger: 0.5,
        duration: .6,
        delay: .5,
    })

    tl.from("#line1-part1", {
        opacity: 0,
        delay: .5,

        onStart: function () {
            var h5timer = document.querySelector("#line1-part1 h5");
            var grow = 0;
            setInterval(() => {
                if (grow < 100) {
                    grow++;
                    h5timer.innerHTML = grow;
                } else {
                    h5timer.innerHTML = grow;
                }
            }, 20);
        }
    })

    tl.to(".line h2", {
        animationName: "anime",
        opacity: 1,
    })

    tl.to("#loader", {
        opacity: 0,
        duration: 1.5,
        delay: 2,
    })


    tl.from("#main #page1", {
        delay: .4,
        y: 1600,
        opacity: 0,
        ease: Power4,
        duration: 0.5,
    })

    tl.to("#loader", {
        display: "none",
    })


    // ye page1 ke liye h.

    tl.from("#nav", {
        opacity: 0,
        duration: 1,
        delay: 1,
    })

    tl.from("#hero-first h1,#hero-two h1,#hero-three h2,#hero-four h1", {
        y: 150,
        opacity: 0,
        // delay: 1,
        stagger: .5,
    })



    // its not working we handle some other way.
    // t1.from("#footer h1",{
    //     opcity:0,
    //     y:50,
    //     delay:.5,
    //     duration:1,
    //     repeat:-1,
    //     yoyo:true,
    //     onstart:function(){
    //         // $('h1').textillate();
    //         // $('h1').textillate({ in: { effect: 'rollIn' } });
    //         $('#footer h1').textillate({ in: { effect: 'fadeIn' } });
    //     }
    // })

}





document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
        x:dets.x,
        y:dets.y-300,
        // opacity:1,
    });
});

document.querySelector("#hero-three").addEventListener("mouseenter",function () {
    gsap.to("#flag",{
        opacity:1,
    })
})
document.querySelector("#hero-three").addEventListener("mouseleave",function () {
    gsap.to("#flag",{
        opacity:0,
    })
})

locomotiveAnimation();
loadingAnimation();
// cursor animation ..
cursorAnimation();

sheryAnimation();

