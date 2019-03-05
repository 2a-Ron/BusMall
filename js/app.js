'use strict';
var slotOne = document.getElementById('pic1');
var slotTwo = document.getElementById('pic2');
var slotThree = document.getElementById('pic3');
var allImages = [];
var turnCounter = 0;
var clickCounter = 0;
//constructor
function ImageGallery (name, ext) {
  this.name = name;
  this.ext = ext;
  this.filepath = `img/${name}.${ext}`;
  this.views = 0;
  this.clicks = 0;
  this.viewPercentage = 0;
  this.clickPercentage = 0;
  allImages.push(this);
}

new ImageGallery('bag', 'jpg');
new ImageGallery('banana', 'jpg');
new ImageGallery('bathroom', 'jpg');
new ImageGallery('boots', 'jpg');
new ImageGallery('breakfast', 'jpg');
new ImageGallery('bubblegum', 'jpg');
new ImageGallery('chair', 'jpg');
new ImageGallery('cthulhu', 'jpg');
new ImageGallery('dog-duck', 'jpg');
new ImageGallery('dragon', 'jpg');
new ImageGallery('pen', 'jpg');
new ImageGallery('pet-sweep', 'jpg');
new ImageGallery('scissors', 'jpg');
new ImageGallery('shark', 'jpg');
new ImageGallery('sweep', 'png');
new ImageGallery('tauntaun', 'jpg');
new ImageGallery('unicorn', 'jpg');
new ImageGallery('usb', 'gif');
new ImageGallery('water-can', 'jpg');
new ImageGallery('wine-glass', 'jpg');

function generateGallery() {
  var random1 = Math.floor(Math.random() * allImages.length);
  var random2 = Math.floor(Math.random() * allImages.length);
  var random3 = Math.floor(Math.random() * allImages.length);

  slotOne.src = allImages[random1].filepath;
  slotTwo.src = allImages[random2].filepath;
  slotThree.src = allImages[random3].filepath;

  slotOne.name = allImages[random1].name;
  slotTwo.name = allImages[random2].name;
  slotThree.name = allImages[random3].name;

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
    if (event.target.name === allImages[i].name) {
      clickCounter++;
      console.log('Clicks: ', clickCounter);
    }
  }
}

slotOne.addEventListener('click', handleClick);
slotTwo.addEventListener('click', handleClick);
slotThree.addEventListener('click', handleClick);
function handleClick(event) {
  console.log('title: ', event.target.name);
  turnCounter++;
  generateGallery();
  console.log('Turn Count: ', turnCounter);
  clickCount();
}

