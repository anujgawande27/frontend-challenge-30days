let cursor = document.querySelector("#cursor");
let cblur = document.querySelector("#cursor-blur");
const imgSection = document.querySelectorAll(".imgsections");

document.addEventListener("mousemove", function(dets) {
    cursor.style.left = dets.x - 10 + "px"
    cursor.style.top = dets.y - 10 + "px"
    cblur.style.left = dets.x - 150 + "px"
    cblur.style.top = dets.y - 150 + "px"
})
imgSection.forEach(section => {
    section.addEventListener("mouseenter", () => {
        cursor.style.transform = "scale(3)";
        cursor.style.backgroundColor = "transparent";
        cursor.style.border = "1px solid white";
    });

    section.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
        cursor.style.backgroundColor = "#AFE127";
        cursor.style.border = "none";
    });
});

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"10rem",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:false,
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
})

gsap.to('#main',{
    backgroundColor:"#000",
    duration:0.5,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -75%",
        scrub: 2
    }
})