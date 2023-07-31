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

// const cards = document.getElementsByClassName('project')
// cards.forEach((entry )=>{
//   const mainLink = entry.children

// })