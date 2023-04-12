// function scrollTo(elementID) {
//   document.getElementById(elementID).scrollIntoView(true);
// }

// var downArrow = document.getElementById('down_arrow');
// downArrow.addEventListener('click', scrollTo('#honeycomb'), false);

var nav = document.getElementById('nav-wrapper');
window.onscroll = function () {
  if (document.body.scrollHeight >= 41) {
    nav.classList.add('scrolled');
    console.log('added: ' + document.body.scrollHeight);
  } else {
    nav.classList.remove('scrolled');
    console.log('removed: ' + document.body.scrollHeight);
  }
};

window.onbeforeunload = function (e) {
  document.getElementById('body').className = 'out';
};
