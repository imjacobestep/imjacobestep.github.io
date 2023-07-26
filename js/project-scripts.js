// function scrollTo(elementID) {
//   document.getElementById(elementID).scrollIntoView(true);
// }

// var downArrow = document.getElementById('down_arrow');
// downArrow.addEventListener('click', scrollTo('#honeycomb'), false);

var nav = document.getElementById("nav-wrapper");
window.onscroll = function () {
  if (document.body.scrollHeight >= 41) {
    nav.classList.add("scrolled");
    // console.log("added: " + document.body.scrollHeight);
  } else {
    nav.classList.remove("scrolled");
    // console.log("removed: " + document.body.scrollHeight);
  }
};

window.onbeforeunload = function (e) {
  document.getElementById("body").className = "out";
};

window.addEventListener("load", function () {
  // 1. selector for the <img /> tags to replace
  // 2. whether to strip inline style tags from SVG paths
  deSVG(".replace-svg", true);
});

window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);

function setScrollVar() {
  const htmlElement = document.documentElement;
  const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight;
  // console.log(Math.min(percentOfScreenHeightScrolled * 100, 100));
  htmlElement.style.setProperty(
    "--scroll",
    Math.min(percentOfScreenHeightScrolled * 100, 100)
  );
}

setScrollVar();

// const observer = new IntersectionObserver((entries) => {
//   for (let i = entries.length - 1; i >= 0; i--) {
//     const entry = entries[i];
//     if (entry.isIntersecting) {
//       document.querySelectorAll("img").forEach((img) => {
//         img.classList.remove("show");
//       });
//       const img = document.querySelector(entry.target.dataset.imgToShow);
//       img?.classList.add("show");
//       break;
//     }
//   }
// });

// document.querySelectorAll("project").forEach((section) => {
//   observer.observe(section);
// });

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       const intersecting = entry.isIntersecting;
//       // entry.target.style.opacity = intersecting ? "1" : "0.2";
//       entry.target.opacity = entry.intersectionRatio;
//     });
//   },
//   { threshold: 1 }
// );

// observer.observe(document.getElementsByClassName("project"));

// function intersectionCallback(entries) {
//   console.log(JSON.stringify(entries));

//   entries.forEach((entry) => {
//     console.log(entry.className);

//     entry.target.opacity = entry.intersectionRatio;
//   });
// }

// console.log(
//   JSON.stringify(
//     typeof document.getElementsByClassName("animate--opacity--in").entries()
//   )
// );

// intersectionCallback(
//   document.getElementsByClassName("animate--opacity--in").entries()
// );
// intersectionCallback(document.getElementById("honeycomb"));

const observerOptions = {
  root: null,
  threshold: 0,
  // rootMargin: "0 0 -50px 0",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

window.addEventListener("DOMContentLoaded", (event) => {
  const projects = Array.from(
    document.getElementsByClassName("fade--in--on--load")
  );

  for (let section of projects) {
    console.log(section.classList);
    observer.observe(section);
  }
});

// observer.observe(document.getElementById("honeycomb"));
