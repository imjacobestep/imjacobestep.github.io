matcher = window.matchMedia('(prefers-color-scheme: dark)');
matcher.addListener(onUpdate);
onUpdate();

lightSchemeIcon = document.querySelector('link#light-icon');
darkSchemeIcon = document.querySelector('link#dark-icon');

function onUpdate() {
  if (matcher.matches) {
    lightSchemeIcon.remove();
    document.head.append(darkSchemeIcon);
  } else {
    document.head.append(lightSchemeIcon);
    darkSchemeIcon.remove();
  }
}

function scrollTo(elementID) {
  document.getElementById(elementID).scrollIntoView(true);
}

var downArrow = document.getElementById('down_arrow');
downArrow.addEventListener('click', scrollTo('#honeycomb'), false);
