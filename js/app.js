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
/* what if I create variables for all the constructors because they don't need to be dynamic.  I may be able to run a function at the end that uses bag.views and bag.clicks for each instance and use that info to place on the DOM */
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

function clickCounter () {
  for (var i = 0; i < allImages.length; i++) {
    if (event.target.title === allImages[i].title) {
      allImages[i].clicks++;
      console.log('Click Counter For - ', allImages[i].title, ': ', allImages[i].clicks, ' clicks.');
    }
  }
}

/* I only want to make one appendage to the DOM only after the turnCounter runs out */
function generateStatistics() {
  var bagDataViews = document.getElementById('views-for-bag');
  var bagDataClicks = document.getElementById('clicks-for-bag');
  bagDataViews.textContent = 'How do I get'; // allImages.views???
  bagDataClicks.textContent = 'This to work?'; // allImages.clicks???

  var bananaDataViews = document.getElementById('views-for-banana');
  var bananaDataClicks = document.getElementById('clicks-for-banana');
  bananaDataViews.textContent = 'Hopefully I';
  bananaDataClicks.textContent = 'Get it soon..';

  var bathroomDataViews = document.getElementById('views-for-bathroom');
  var bathroomDataClicks = document.getElementById('clicks-for-bathroom');
  bathroomDataViews.textContent = 'Fuckin Strings'; // allImages.views???
  bathroomDataClicks.textContent = 'I need a variable!'; // allImages.clicks???

  var bootsDataViews = document.getElementById('views-for-boots');
  var bootsDataClicks = document.getElementById('clicks-for-boots');
  bootsDataViews.textContent = 'I need this to be';
  bootsDataClicks.textContent = 'allImages.clicks';
}

slotOne.addEventListener('click', handleClick);
slotTwo.addEventListener('click', handleClick);
slotThree.addEventListener('click', handleClick);
function handleClick(event) { // everytime I click I want to render the views and clicks to the DOM using the html id. so i need to get all the elements by id that I want to manipulate so for example th id="views-for-bag" and stored into a special variable for javascript to do things with like var bagDataViews = document.getElementById('views-for-bag'); and a shit load more.  Once they are "gotten" I need to figure out how to access the already stored data and place it on the DOM
  turnCounter--;
  clickCounter();
  generateGallery();
  if (turnCounter === 0) {
    alert('Survey Complete.  We thank you for your participation.');
    alert('Continue and view the results.');
    generateStatistics();
  }
  console.log('Turn Count: ', turnCounter);
  /*console.log('IMG TITLE: ', event.target.title); // AT THIS TIME EVENT IS DEFINED BUT NEVER USED.  FIND A WAY TO USE IT*/
}
/*
var statSheetTable = document.getElementById('stat-sheet-shell');
var arrayHeaderRow = ['Image Name:', 'Views:', 'Clicks:'];
var arrayImagesColumn = ['Bag', 'Banana', 'Bathroom', 'Boots', 'Breakfast', 'Meatball Bubblegum', 'Chair', 'cthulhu', 'Dog with Duckface', 'Dragon Meat', 'Pen', 'Pet Sweeper', 'Scissors', 'Shark Sleeping Bag', 'Baby-Swiff', 'Tauntaun', 'Unicorn Meat', 'usb drive', 'Water Can', 'Wine Glass'];
*/

/* - arrayHeaderRow will iterate by one going across the row
   - arrayImagesColumn will iterate going down the column
   - for each row, arrayImagesColumn[0].views should be displayed under arrayHeaderRow[1]
   and arrayImagesColumn[0].clicks should be displayed under arrayHeaderRow[2]*/


