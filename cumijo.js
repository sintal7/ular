var dataUrl = [
  'http://google.co.uk',
  'http://google.co.nz',
  'http://google.co.id'
];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem;
