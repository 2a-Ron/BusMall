'use strict';

var slotOne = document.getElementById('pic1');
var slotTwo = document.getElementById('pic2');
var slotThree = document.getElementById('pic3');
var allImages = [];
var turnCounter = 25;

//constructor
function ImageGallery (name, ext, title) {
  this.title = title;
  this.name = name;
  this.ext = ext;
  this.filepath = `img/${name}.${ext}`;
  this.views = 0;
  this.clicks = 0;
  allImages.push(this);
}

new ImageGallery('bag', 'jpg', 'IMG-bag');
new ImageGallery('banana', 'jpg', 'IMG-banana');
new ImageGallery('bathroom', 'jpg', 'IMG-bathroom');
new ImageGallery('boots', 'jpg', 'IMG-boots');
new ImageGallery('breakfast', 'jpg', 'IMG-breakfast');
new ImageGallery('bubblegum', 'jpg', 'IMG-bubblegum');
new ImageGallery('chair', 'jpg', 'IMG-chair');
new ImageGallery('cthulhu', 'jpg', 'IMG-cthulhu');
new ImageGallery('dog-duck', 'jpg', 'IMG-dog-duck');
new ImageGallery('dragon', 'jpg', 'IMG-dragon');
new ImageGallery('pen', 'jpg', 'IMG-pen');
new ImageGallery('pet-sweep', 'jpg', 'IMG-pet-sweep');
new ImageGallery('scissors', 'jpg', 'IMG-scissors');
new ImageGallery('shark', 'jpg', 'IMG-shark');
new ImageGallery('sweep', 'png', 'IMG-sweep');
new ImageGallery('tauntaun', 'jpg', 'IMG-tauntaun');
new ImageGallery('unicorn', 'jpg', 'IMG-unicorn');
new ImageGallery('usb', 'gif', 'IMG-usb');
new ImageGallery('water-can', 'jpg', 'IMG-water-can');
new ImageGallery('wine-glass', 'jpg', 'IMG-wine-glass');

function generateGallery() {
  var random1 = Math.floor(Math.random() * allImages.length);
  var random2 = Math.floor(Math.random() * allImages.length);
  var random3 = Math.floor(Math.random() * allImages.length);

  slotOne.src = allImages[random1].filepath;
  slotTwo.src = allImages[random2].filepath;
  slotThree.src = allImages[random3].filepath;

  slotOne.title = allImages[random1].title;
  slotTwo.title = allImages[random2].title;
  slotThree.title = allImages[random3].title;

  allImages[random1].views++;
  allImages[random2].views++;
  allImages[random3].views++;
  console.log('slotOne Views: ', allImages[random1].views);
  console.log('slotTwo Views: ', allImages[random2].views);
  console.log('slotThree Views: ', allImages[random3].views);
/*
  console.log('current img, ', allImages[random1]);
  console.log('current img, ', allImages[random2]);
  console.log('current img, ', allImages[random3]);
  */
}
generateGallery();

function clickCount () {
  for (var i = 0; i < allImages.length; i++) {
    if (event.target.title === allImages[i].title) {
      allImages[i].clicks++;
      console.log('Click Counter For - ', allImages[i].title, ': ', allImages[i].clicks, ' clicks.');
    }
  }
}

slotOne.addEventListener('click', handleClick);
slotTwo.addEventListener('click', handleClick);
slotThree.addEventListener('click', handleClick);
function handleClick(event) {
  turnCounter--;
  clickCount();
  generateGallery();
  if (turnCounter === 0) {
    alert('Survey Complete.  We thank you for your participation.');
    alert('Continue and view the results.');
  }
  console.log('Turn Count: ', turnCounter);
  /*console.log('IMG TITLE: ', event.target.title); // AT THIS TIME EVENT IS DEFINED BUT NEVER USED.  FIND A WAY TO USE IT*/
}

