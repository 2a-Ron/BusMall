'use strict';

var allImages = [];
var pictureOne = document.getElementById('pic1');
var pictureTwo = document.getElementById('pic2');
var pictureThree = document.getElementById('pic3');
//constructor
function constructImage (name, ext) {
  this.name = name;
  this.ext = ext;
  this.filepath = `img/${name}.${ext}`;
  allImages.push(this);
}

new imageGallery('bag', 'jpg');
new imageGallery('banana', 'jpg');
new imageGallery('bathroom', 'jpg');
new imageGallery('boots', 'jpg');
new imageGallery('breakfast', 'jpg');
new imageGallery('bubblegum', 'jpg');
new imageGallery('chair', 'jpg');
new imageGallery('cthulhu', 'jpg');
new imageGallery('dog-duck', 'jpg');
new imageGallery('dragon', 'jpg');
new imageGallery('pen', 'jpg');
new imageGallery('pet-sweep', 'jpg');
new imageGallery('scissors', 'jpg');
new imageGallery('shark', 'jpg');
new imageGallery('sweep', 'png');
new imageGallery('tauntaun', 'jpg');
new imageGallery('unicorn', 'jpg');
new imageGallery('usb', 'gif');
new imageGallery('water-can', 'jpg');
new imageGallery('wine-glass', 'jpg');

