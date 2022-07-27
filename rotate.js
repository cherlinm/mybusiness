let imageIndex = 0;


function startRotation() {
  setInterval(() => {
    rotate();
  }, 2000);
}

function rotate() {
  if (imageIndex === 6) {
    imageIndex = 1
  } else {
    imageIndex ++;
  }
  document.getElementById('img-placeholder').src = imageIndex + '.jpg';
}
