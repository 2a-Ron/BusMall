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
  // run checks for duplicates
  var random1 = Math.floor(Math.random() * allImages.length);
  var random2 = Math.floor(Math.random() * allImages.length);
  if (random2 === random1 || random3) {
    random2 = Math.floor(Math.random() * allImages.length);
  }
  var random3 = Math.floor(Math.random() * allImages.length);
  if (random3 === random1 || random2) {
    random3 = Math.floor(Math.random() * allImages.length);
  }

  slotOne.src = allImages[random1].filepath;
  slotTwo.src = allImages[random2].filepath;
  slotThree.src = allImages[random3].filepath;

  slotOne.title = allImages[random1].title;
  slotTwo.title = allImages[random2].title;
  slotThree.title = allImages[random3].title;

  allImages[random1].views++;
  allImages[random2].views++;
  allImages[random3].views++;
  /*
  console.log('slotOne Views: ', allImages[random1].views);
  console.log('slotTwo Views: ', allImages[random2].views);
  console.log('slotThree Views: ', allImages[random3].views);
*/
}
generateGallery();

function renderStatistics () {
  for (var i = 0; i < allImages.length; i++) {
    if (event.target.title === allImages[i].title) {
      allImages[i].clicks++;
      //console.log('Click Counter For - ', allImages[i].title, ': ', allImages[i].clicks, ' clicks.');
      var bagDataViews = document.getElementById('views-for-bag');
      var bagDataClicks = document.getElementById('clicks-for-bag');
      var bagDataPercentage = document.getElementById('percent-for-bag');
      bagDataViews.textContent = allImages[0].views;
      bagDataClicks.textContent = allImages[0].clicks;
      bagDataPercentage.textContent = `${Math.floor(allImages[0].clicks / allImages[0].views * 100)}%`;

      var bananaDataViews = document.getElementById('views-for-banana');
      var bananaDataClicks = document.getElementById('clicks-for-banana');
      var bananaDataPercentage = document.getElementById('percent-for-banana');
      bananaDataViews.textContent = allImages[1].views;
      bananaDataClicks.textContent = allImages[1].clicks;
      bananaDataPercentage.textContent = `${Math.floor(allImages[1].clicks / allImages[1].views * 100)}%`;

      var bathroomDataViews = document.getElementById('views-for-bathroom');
      var bathroomDataClicks = document.getElementById('clicks-for-bathroom');
      var bathroomDataPercentage = document.getElementById('percent-for-bathroom');
      bathroomDataViews.textContent = allImages[2].views;
      bathroomDataClicks.textContent = allImages[2].clicks;
      bathroomDataPercentage.textContent = `${Math.floor(allImages[2].clicks / allImages[2].views * 100)}%`;

      var bootsDataViews = document.getElementById('views-for-boots');
      var bootsDataClicks = document.getElementById('clicks-for-boots');
      var bootsDataPercentage = document.getElementById('percent-for-boots');
      bootsDataViews.textContent = allImages[3].views;
      bootsDataClicks.textContent = allImages[3].clicks;
      bootsDataPercentage.textContent = `${Math.floor(allImages[3].clicks / allImages[3].views * 100)}%`;

      var breakfastDataViews = document.getElementById('views-for-breakfast');
      var breakfastDataClicks = document.getElementById('clicks-for-breakfast');
      var breakfastDataPercentage = document.getElementById('percent-for-breakfast');
      breakfastDataViews.textContent = allImages[4].views;
      breakfastDataClicks.textContent = allImages[4].clicks;
      breakfastDataPercentage.textContent = `${Math.floor(allImages[4].clicks / allImages[4].views * 100)}%`;

      var bubblegumDataViews = document.getElementById('views-for-bubblegum');
      var bubblegumDataClicks = document.getElementById('clicks-for-bubblegum');
      var bubblegumDataPercentage = document.getElementById('percent-for-bubblegum');
      bubblegumDataViews.textContent = allImages[5].views;
      bubblegumDataClicks.textContent = allImages[5].clicks;
      bubblegumDataPercentage.textContent = `${Math.floor(allImages[5].clicks / allImages[5].views * 100)}%`;

      var chairDataViews = document.getElementById('views-for-chair');
      var chairDataClicks = document.getElementById('clicks-for-chair');
      var chairDataPercentage = document.getElementById('percent-for-chair');
      chairDataViews.textContent = allImages[6].views;
      chairDataClicks.textContent = allImages[6].clicks;
      chairDataPercentage.textContent = `${Math.floor(allImages[6].clicks / allImages[6].views * 100)}%`;

      var cthulhuDataViews = document.getElementById('views-for-cthulhu');
      var cthulhuDataClicks = document.getElementById('clicks-for-cthulhu');
      var cthulhuDataPercentage = document.getElementById('percent-for-cthulhu');
      cthulhuDataViews.textContent = allImages[7].views;
      cthulhuDataClicks.textContent = allImages[7].clicks;
      cthulhuDataPercentage.textContent = `${Math.floor(allImages[7].clicks / allImages[7].views * 100)}%`;

      var dogDuckDataViews = document.getElementById('views-for-dog-duck');
      var dogDuckDataClicks = document.getElementById('clicks-for-dog-duck');
      var dogDuckDataPercentage = document.getElementById('percent-for-dog-duck');
      dogDuckDataViews.textContent = allImages[8].views;
      dogDuckDataClicks.textContent = allImages[8].clicks;
      dogDuckDataPercentage.textContent = `${Math.floor(allImages[8].clicks / allImages[8].views * 100)}%`;

      var dragonDataViews = document.getElementById('views-for-dragon');
      var dragonDataClicks = document.getElementById('clicks-for-dragon');
      var dragonDataPercentage = document.getElementById('percent-for-dragon');
      dragonDataViews.textContent = allImages[9].views;
      dragonDataClicks.textContent = allImages[9].clicks;
      dragonDataPercentage.textContent = `${Math.floor(allImages[9].clicks / allImages[9].views * 100)}%`;

      var penDataViews = document.getElementById('views-for-pen');
      var penDataClicks = document.getElementById('clicks-for-pen');
      var penDataPercentage = document.getElementById('percent-for-pen');
      penDataViews.textContent = allImages[10].views;
      penDataClicks.textContent = allImages[10].clicks;
      penDataPercentage.textContent = `${Math.floor(allImages[10].clicks / allImages[10].views * 100)}%`;

      var petSweeperDataViews = document.getElementById('views-for-pet-sweeper');
      var petSweeperDataClicks = document.getElementById('clicks-for-pet-sweeper');
      var petSweeperDataPercentage = document.getElementById('percent-for-pet-sweeper');
      petSweeperDataViews.textContent = allImages[11].views;
      petSweeperDataClicks.textContent = allImages[11].clicks;
      petSweeperDataPercentage.textContent = `${Math.floor(allImages[11].clicks / allImages[11].views * 100)}%`;

      var scissorsDataViews = document.getElementById('views-for-scissors');
      var scissorsDataClicks = document.getElementById('clicks-for-scissors');
      var scissorsDataPercentage = document.getElementById('percent-for-scissors');
      scissorsDataViews.textContent = allImages[12].views;
      scissorsDataClicks.textContent = allImages[12].clicks;
      scissorsDataPercentage.textContent = `${Math.floor(allImages[12].clicks / allImages[12].views * 100)}%`;

      var sharkDataViews = document.getElementById('views-for-shark');
      var sharkDataClicks = document.getElementById('clicks-for-shark');
      var sharkDataPercentage = document.getElementById('percent-for-shark');
      sharkDataViews.textContent = allImages[13].views;
      sharkDataClicks.textContent = allImages[13].clicks;
      sharkDataPercentage.textContent = `${Math.floor(allImages[13].clicks / allImages[13].views * 100)}%`;

      var babySwifferDataViews = document.getElementById('views-for-babyswiffer');
      var babySwifferDataClicks = document.getElementById('clicks-for-babyswiffer');
      var babySwifferDataPercentage = document.getElementById('percent-for-babyswiffer');
      babySwifferDataViews.textContent = allImages[14].views;
      babySwifferDataClicks.textContent = allImages[14].clicks;
      babySwifferDataPercentage.textContent = `${Math.floor(allImages[14].clicks / allImages[14].views * 100)}%`;

      var tauntaunDataViews = document.getElementById('views-for-tauntaun');
      var tauntaunDataClicks = document.getElementById('clicks-for-tauntaun');
      var tauntaunDataPercentage = document.getElementById('percent-for-tauntaun');
      tauntaunDataViews.textContent = allImages[15].views;
      tauntaunDataClicks.textContent = allImages[15].clicks;
      tauntaunDataPercentage.textContent = `${Math.floor(allImages[15].clicks / allImages[15].views * 100)}%`;

      var unicornDataViews = document.getElementById('views-for-unicorn');
      var unicornDataClicks = document.getElementById('clicks-for-unicorn');
      var unicornDataPercentage = document.getElementById('percent-for-unicorn');
      unicornDataViews.textContent = allImages[16].views;
      unicornDataClicks.textContent = allImages[16].clicks;
      unicornDataPercentage.textContent = `${Math.floor(allImages[16].clicks / allImages[16].views * 100)}%`;

      var usbDataViews = document.getElementById('views-for-usb');
      var usbDataClicks = document.getElementById('clicks-for-usb');
      var usbDataPercentage = document.getElementById('percent-for-usb');
      usbDataViews.textContent = allImages[17].views;
      usbDataClicks.textContent = allImages[17].clicks;
      usbDataPercentage.textContent = `${Math.floor(allImages[17].clicks / allImages[17].views * 100)}%`;

      var waterCanDataViews = document.getElementById('views-for-water-can');
      var waterCanDataClicks = document.getElementById('clicks-for-water-can');
      var waterCanDataPercentage = document.getElementById('percent-for-water-can');
      waterCanDataViews.textContent = allImages[18].views;
      waterCanDataClicks.textContent = allImages[18].clicks;
      waterCanDataPercentage.textContent = `${Math.floor(allImages[18].clicks / allImages[18].views * 100)}%`;

      var wineGlassDataViews = document.getElementById('views-for-wine-glass');
      var wineGlassDataClicks = document.getElementById('clicks-for-wine-glass');
      var wineGlassDataPercentage = document.getElementById('percent-for-wine-glass');
      wineGlassDataViews.textContent = allImages[19].views;
      wineGlassDataClicks.textContent = allImages[19].clicks;
      wineGlassDataPercentage.textContent = `${Math.floor(allImages[19].clicks / allImages[19].views * 100)}%`;
    }
  }
}
// CHART NOTES: Clicks and Views are stored in each object so i can cycle through allImages[i].clicks and .views to access those stats.  Percentage is trapped.  The hole I dug is going to make me re-write arithmatic for percentages unless I can figure out how to extract my data from my constructors and push them into an empty array and use that to output to my graph.  I need to extract all 3 categories of info into their own individual empty array

// draw chart
var ctx = document.getElementById('bus-mall-chart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
    labels: ['Bag', 'Banana', 'Bathroom iPod Stand', 'Boots', 'Breakfast', 'Meatball Bubblegum', 'Chair', 'Cthulhu', 'Dog with Duckface', 'Dragon Meat', 'Pen', 'Pet Sweeper', 'Scissors', 'Shark Sleeping Bag', 'Baby Swiffer', 'Tauntaun', 'Unicorn Meat', 'USB Drive', 'Water Can', 'Wine Glass'],
    datasets: [
      {
        label: 'Views',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [17, 10, 5, 2, 20, 30, 45], // these will be clicks views and percentage
      },
      {
        label: 'Votes',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [7, 10, 5, 2, 20, 30, 45], // these will be clicks views and percentage
      },
      {
        label: 'Vote Percentage',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [41, 10, 5, 2, 20, 30, 45], // these will be clicks views and percentage
      },

    ]
  },
  // Configuration options go here
  options: {}
});

slotOne.addEventListener('click', handleClick);
slotTwo.addEventListener('click', handleClick);
slotThree.addEventListener('click', handleClick);
function handleClick(event) {
  turnCounter--;
  renderStatistics();
  generateGallery();
  if (turnCounter === 0) {
    alert('Survey Complete.  We thank you for your participation.');
    alert('Continue and view the results.');
    slotOne.removeEventListener('click', handleClick);
    slotTwo.removeEventListener('click', handleClick);
    slotThree.removeEventListener('click', handleClick);
  }
  //console.log('Turn Count: ', turnCounter);
}
