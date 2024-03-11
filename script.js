const { ALL } = require("dns");

function navAnimation(){
  const nav = document.getElementById('fixed-nav');


  gsap.to(nav,{
    display:"inline",
    opacity:1,
    duration:0.5,
    opacity:1,
    // y:,
    ease:'power4',
    scrollTrigger:{
        scroller:"#container",
        trigger:"#page1",
        markers:true,
        start: "top -25%",
        end:  "bottom 0%",
        scrub: true,
    }
  })


}

navAnimation();

function page2hover1(){
    const box1 = document.querySelector(".p2-box1");
const item1 = document.querySelector(".p2-h1");
const ema = document.querySelector("#email")
const ig1 = document.querySelector("#p2-i1")

const tl = gsap.timeline({paused : true});

tl.to(item1, {
    opacity: 1,
    x:"50%",
    duration: 0.7,
    // display : "inline",
    ease: "back.out(1.7)",
    cursor:"pointer",
},"ani");

tl.to(ig1,{
    right: 0,
    padding:0,
    width:"50%",
    // height:"60%",
    duration: 0.2,
    ease: "back.out(1.7",
},"ani");

tl.to(ema,{
     border: "0.14vw solid black",
     color: "black",
     backgroundColor : "transparent",

},"ani")


box1.addEventListener('mouseenter', () =>{
    tl.play();
});

box1.addEventListener('mouseleave', ()=>{
   tl.reverse();
});
}
page2hover1();

function page2hover2(){
    const box1 = document.querySelector(".p2-box2");
const item1 = document.querySelector(".p2-h2");
const ema = document.querySelector("#email2")


const tl = gsap.timeline({paused : true});

tl.to(item1, {
    opacity: 1,
    x:"50%",
    duration: 0.7,
    // display : "inline",
    ease: "back.out(1.7)",
    cursor:"pointer",


},"ani");

tl.to(ema,{
    border: "0.14vw solid black",
    color: "black",
    backgroundColor : "transparent",

},"ani")

box1.addEventListener('mouseenter', () =>{
    tl.play();
});

box1.addEventListener('mouseleave', ()=>{
   tl.reverse();
});
}
page2hover2();


function page2hover3(){
    const box1 = document.querySelector(".p2-box3");
const item1 = document.querySelector(".p2-h3");
const ema = document.querySelector("#email3")


const tl = gsap.timeline({paused : true});

tl.to(item1, {
    opacity: 1,
    x:"50%",
    duration: 0.7,
    // display : "inline",
    ease: "back.out(1.7)",
    cursor:"pointer",


},"ani");

tl.to(ema,{
    border: "0.14vw solid black",
    color: "black",
    backgroundColor : "transparent",

},"ani")

box1.addEventListener('mouseenter', () =>{
    tl.play();
});

box1.addEventListener('mouseleave', ()=>{
   tl.reverse();
});
}
page2hover3();


function page2hover4(){
    const box1 = document.querySelector(".p2-box4");
    const item1 = document.querySelector(".p2-h4");
    const ema = document.querySelector("#email4")


const tl = gsap.timeline({paused : true});

tl.to(item1, {
    opacity: 1,
    x:"50%",
    duration: 0.7,
    ease: "back.out(1.7)",
},"ani");

tl.to(ema,{
    border: "0.14vw solid black",
    color: "black",
    backgroundColor : "transparent",

},"ani")

box1.addEventListener('mouseenter', () =>{
    tl.play();
});

box1.addEventListener('mouseleave', ()=>{
   tl.reverse();
});
}
page2hover4();


function page2c2(){
    const c1 = document.getElementById("p2-c2")
    const c3 = document.getElementById("p2-c2-a");

    const tl = gsap.timeline({paused:true});

   tl.to(c3,{
    border: "0.14vw solid black",
    color: "black",
    backgroundColor : "transparent",

   })

    c1.addEventListener("mouseenter", ()=> {
        tl.play();
    });

    c1.addEventListener("mouseleave", ()=> {
        tl.reverse();
    });

}
page2c2();

function page3v(){
    const main = document.querySelector(".v-f1")
    const v1=document.querySelector(".play");
    const v2=document.querySelector("#img");

    const tl = gsap.timeline({paused:true});

    tl.to(v1,{
        // x: 300,
        y:20,
        duration: 0.3,
        ease: ALL .easeOut.quart,
    })

    main.addEventListener("mousemove", ()=>{
        tl.play();
    })

    main.addEventListener("mouseleave", ()=>{
        tl.reverse();
    })


}
page3v();