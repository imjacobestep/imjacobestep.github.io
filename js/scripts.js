let bkg = document.getElementById('bkg');
let lamp = document.getElementById('lamp_button');
let night = false;

function changeBkg(buttonHovered) {
  //bkg.style.backgroundColor = "transparent"
  // if(buttonHovered == 0){
  //     bkg.style.backgroundImage = "var(--lamp-hero)";
  // }else if(buttonHovered == 1){
  //     bkg.style.backgroundImage = "var(--whackamole-hero)";
  // }else if(buttonHovered == 2){
  //     bkg.style.backgroundImage = "var(--bentwo-hero)";
  // }else if(buttonHovered == 3){
  //     bkg.style.backgroundImage = "var(--ecommerce-hero)";
  // }else if(buttonHovered == 4){
  //     bkg.style.backgroundImage = "var(--watch-hero)";
  // }else if(buttonHovered == 5){
  //     bkg.style.backgroundImage = "var(--honeycomb-hero)";
  // }
}

function resetBkg() {
  // bkg.style.backgroundImage = "none";
}

lamp.addEventListener('mouseenter', changeBkg('lamp'));

lamp.addEventListener('mouseleave', resetBkg());
