let images = Array.from(document.getElementsByClassName('imgCarousel'));

let captions = Array[('me!', 'Fab and I', '2', '3', '4', '5')];

let mainPhoto = document.getElementById('mainPhoto');

let mainCaption = document.getElementById('mainCaption');

function updateImage(event) {
  let image = event.target;
  //   window.alert('change image');
  mainPhoto.src = image.src;
  mainCaption.textContent = image.id;
}

images.forEach(function (image) {
  image.addEventListener('click', updateImage);
});
