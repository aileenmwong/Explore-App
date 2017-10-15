
const timerBackgrounds = ['assets/natlpark1.jpg', 'assets/natlpark2.jpg','assets/natlpark3.jpg','assets/natlpark4.jpg', 'assets/natlpark5.jpg', 'assets/natlpark6.jpg', 'assets/natlpark7.jpg', 'assets/natlpark8.jpg'];
var i =0;
var heading = document.querySelector('#backgroundHome');

function changeImageTimer() {
  heading.src = timerBackgrounds[i];
  heading.style.opacity = 1;
  setTimeout(nextImage, 3000);
}

function nextImage(){
  i++;
  if (i > timerBackgrounds.length -1){
    i = 0;
  }
  heading.style.opacity = 0;
  setTimeout(changeImageTimer, 3000);
}
changeImageTimer();
