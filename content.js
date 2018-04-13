// content.js
// alert("Hello from your Chrome extension!")

// content.js
setInterval(function () {
  if (document.getElementsByClassName('profilePic img')[0] && document.getElementsByClassName('profilePic img')[0].hasOwnProperty('src')) {
    document.getElementsByClassName('profilePic img')[0].src = 'data:image/jpeg;base64,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';
  }
}, 2000);