'use strict';
var pictureOne = document.getElementById('pic1');
var pictureTwo = document.getElementById('pic2');
var pictureThree = document.getElementById('pic3');
var allImages = [];
var turnCounter = 0;
//constructor
function ImageGallery (name, ext, title) {
  this.title = title;
  this.name = name;
  this.ext = ext;
  this.filepath = `img/${name}.${ext}`;
  this.views = 0;
  this.clicks = 0;
  this.viewPercentage = 0;
  this.clickPercentage = 0;
  allImages.push(this);
}

new ImageGallery('bag', 'jpg', 'imgOne');
new ImageGallery('banana', 'jpg', 'imgTwo');
new ImageGallery('bathroom', 'jpg', 'imgThree');
new ImageGallery('boots', 'jpg', 'imgFour');
new ImageGallery('breakfast', 'jpg', 'imgFive');
new ImageGallery('bubblegum', 'jpg', 'imgSix');
new ImageGallery('chair', 'jpg', 'imgSeven');
new ImageGallery('cthulhu', 'jpg', 'imgEight');
new ImageGallery('dog-duck', 'jpg', 'imgNine');
new ImageGallery('dragon', 'jpg', 'imgTen');
new ImageGallery('pen', 'jpg', 'imgEleven');
new ImageGallery('pet-sweep', 'jpg', 'imgTwelve');
new ImageGallery('scissors', 'jpg', 'imgThirteen');
new ImageGallery('shark', 'jpg', 'imgFourteen');
new ImageGallery('sweep', 'png', 'imgFifteen');
new ImageGallery('tauntaun', 'jpg', 'imgSixteen');
new ImageGallery('unicorn', 'jpg', 'imgSeventeen');
new ImageGallery('usb', 'gif', 'imgEightteen');
new ImageGallery('water-can', 'jpg', 'imgNineteen');
new ImageGallery('wine-glass', 'jpg', 'imgTwenty');

function generateGallery() {
  var random1 = Math.floor(Math.random() * allImages.length);
  var random2 = Math.floor(Math.random() * allImages.length);
  var random3 = Math.floor(Math.random() * allImages.length);

  pictureOne.src = allImages[random1].filepath;
  pictureTwo.src = allImages[random2].filepath;
  pictureThree.src = allImages[random3].filepath;
  pictureOne.title = allImages[random1].title;
  pictureTwo.title = allImages[random2].title;
  pictureThree.title = allImages[random3].title;
  allImages[random1].views++;
  allImages[random2].views++;
  allImages[random3].views++;
/*
  console.log('current img, ', allImages[random1]);
  console.log('current img, ', allImages[random2]);
  console.log('current img, ', allImages[random3]);
  */
}

generateGallery();

pictureOne.addEventListener('click', handleClick);
pictureTwo.addEventListener('click', handleClick);
pictureThree.addEventListener('click', handleClick);
function handleClick(event) {
  console.log('title, ', event.target.title);
  turnCounter++;
  generateGallery();
  console.log('Turn Count: ', turnCounter);
}

