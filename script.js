function locoScroll(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
locoScroll();

// var a = document.querySelector("img")


var jay = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-img")
jay.addEventListener("mouseenter",function(){
fixed.style.display = "block"
})
jay.addEventListener("mouseleave",function(){
fixed.style.display = "none"
})

var elem1 = document.querySelectorAll(".elem")
elem1.forEach(function(e){
  e.addEventListener("mouseenter",function(){
    var img = e.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${img})`
  })

})

// })
function handleClick(index) {
  // Reset styles for all h1 elements
  document.querySelectorAll('h1').forEach((h1, i) => {
    h1.classList.remove('selected');
  });

  // Apply styles for the clicked h1
  const clickedH1 = document.querySelector(`h1:nth-child(${index})`);
  clickedH1.classList.add('selected');

  // Change the image source based on the clicked h1
  const image = document.getElementById('image');
  switch (index) {
    case 1:
      image.src = 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg';
      break;
    case 2:
      image.src = 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp';
      break;
    case 3:
      image.src = 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg';
      break;
    default:
      break;
  }
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function cursorEfeect(){
  var page1Content = document.querySelector(".swiper")
var cursor = document.querySelector(".cursor")

page1Content.addEventListener("mousemove",function(dets){
  gsap.to(cursor,{
      x:dets.x,
      y:dets.y
  })
})

page1Content.addEventListener("mouseenter",function(){
  gsap.to(cursor,{
      scale:1,
      opacity:1
  })
})
page1Content.addEventListener("mouseleave",function(){
gsap.to(cursor,{
  scale:0,
  opacity:0,
})
})

}
cursorEfeect();