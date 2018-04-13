// content.js
// alert("Hello from your Chrome extension!")

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomInt(3));

const randomImages = [
  'https://www.planwallpaper.com/static/images/0f739ba4710c10fd26ee8bf6f9e38732.jpg',
  'https://www.planwallpaper.com/static/images/010b68214bf1eeb91060732aa58bed1e.jpg',
  'https://www.planwallpaper.com/static/images/210806-You-Find-It-Offensive-I-Fund-It-Funny.jpg',
  'https://www.planwallpaper.com/static/images/funny-191.jpg',
  'https://www.planwallpaper.com/static/images/WDF_1061162.png',
  'http://www.dumpaday.com/wp-content/uploads/2017/02/funny-cold-feet.jpg',
  'http://www.dumpaday.com/wp-content/uploads/2017/02/funny-global-warming.jpg',
  'http://www.dumpaday.com/wp-content/uploads/2017/02/new-clothes.jpg'
]
// content.js
setInterval(function () {
  if (document.getElementsByClassName('profilePic img')[0]) {
    document.getElementsByClassName('profilePic img')[0].src = randomImages[getRandomInt(randomImages.length)];
  }
  if (document.getElementsByClassName('coverPhotoImg photo img')[0]) {
    document.getElementsByClassName('coverPhotoImg photo img')[0].src = randomImages[getRandomInt(randomImages.length)];
  }
}, 4000);
