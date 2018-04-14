// content.js
// alert("Hello from your Chrome extension!")

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomInt(3));

const displayImages = [
  'https://craftwhack.com/wp-content/uploads/2015/02/face1.jpg',
  'https://i.pinimg.com/originals/4f/15/3b/4f153b45ae1aacbe136d44d882ad80dd.jpg',
  'https://craftwhack.com/wp-content/uploads/2015/02/face8.jpg',
  'https://static2.fjcdn.com/thumbnails/comments/Uhh+excuse+me+what+the+is+this++_f24ae6f708d3ee02c0e2fbce5104a5d4.jpg',
  'http://editorial.designtaxi.com/news-blowjob170512/1.jpg',
  'https://thecreatorsproject-images.vice.com/content-images/contentimage/no-slug/d4d24f28d34addbcb66fb9e86c8276b2.jpg',
  'https://img.memecdn.com/your-face-when-you-make-a-shit-and-your-pee-splashes-your-face_o_504157.jpg',
  'https://pbs.twimg.com/profile_images/2658035550/2b9493ffe9b3088b347618edcbf9b797_400x400.jpeg',
  'https://i.ytimg.com/vi/24neaB3FcHY/hqdefault.jpg',
  'https://fallinpets.com/wp-content/uploads/2016/09/cat-funny.jpg',
  'https://i.ytimg.com/vi/Jti_KQyEOVU/hqdefault.jpg',
  'https://cdn.acidcow.com/pics/20100716/funny_owls_17.jpg',
  'http://www.idolmag.co.uk/wp-content/uploads/2015/10/flora-borsi-stockify-designboom-01.jpg',
  'https://c1.staticflickr.com/1/55/144919624_0a867ecf4e_b.jpg',
  'http://78.media.tumblr.com/6ab8dd1315c6af06ede91b09258832a6/tumblr_inline_mlzxg9oKDY1qz4rgp.jpg'
];

const randomImages = [
  'https://i2.wp.com/www.hahahumor.com/wp-content/uploads/2017/10/funny-memes-1.jpg?w=960&ssl=1',
  'https://i1.wp.com/www.hahahumor.com/wp-content/uploads/2017/10/funny-memes-7.jpg?w=750&ssl=1',
  'https://i1.wp.com/www.hahahumor.com/wp-content/uploads/2017/10/funny-memes-17.jpg?w=640&ssl=1',
  'http://i.imgur.com/F8VuQ.gif',
  'https://i.imgur.com/xHdPZ.jpg',
  'https://i.imgur.com/zFtXC.png',
  'https://i.imgur.com/aJoxe.png'
]
// content.js
const displayPic = displayImages[getRandomInt(displayImages.length)];
setInterval(function () {
  if (document.getElementsByClassName('profilePic img')[0]) {
    document.getElementsByClassName('profilePic img')[0].src = displayPic;
  }
  if (document.getElementsByClassName('coverPhotoImg photo img')[0]) {
    document.getElementsByClassName('coverPhotoImg photo img')[0].src = randomImages[getRandomInt(randomImages.length)];
  }

  console.log(document.getElementById('intro_container_id'));
  console.log(document.getElementById('intro_container_id').children);
  console.log(document.getElementById('intro_container_id').children[0].innerHTML)
}, 5000);
