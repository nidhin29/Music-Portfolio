const icon = document.querySelector('#icon');
const item = document.querySelectorAll('.item');
const tail = document.getElementById('tail');
const round = document.getElementById('rounddd');
const map = document.getElementById('map');

function umap() {
  if (window.innerWidth < 355) {
   map.style.width = '250'
  } else {
    map.style.width = '300'
  }

}
umap();
window.addEventListener('resize', umap);

function uimg() {
  if (window.innerWidth > 355) {
    tail.classList.remove('custom-tail');
    round.classList.remove('custom-round');
  } else {
    tail.classList.add('custom-tail');
    round.classList.add('custom-round');
  }
}

uimg();
window.addEventListener('resize', uimg);

const imageData = ["../video/video1.mp4" , "../video/video3.mp4"];
let currentIndex = 0;
const imageDisplay = document.getElementById('imageDisplay');
const prevButton = document.getElementById('left-arrow');
const nextButton = document.getElementById('right-arrow');

const imageContainer = document.getElementById('imgd');
const images = imageContainer.querySelectorAll('img');
let currentIndexm = 0;


icon.addEventListener('click', () => {
    item.forEach(item => {
      item.classList.toggle('hidden');
    });
  });

  const showNextImage = () => {
    currentIndex = (currentIndex + 1) % imageData.length; 
    updateImageDisplay();
};

const showPrevImage = () => {
    currentIndex = (currentIndex - 1 + imageData.length) % imageData.length; 
    updateImageDisplay();
};

const updateImageDisplay = () => {
    imageDisplay.src = imageData[currentIndex];
};

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

function updateImages() {
  let imagesToShow =3;
  if(window.innerWidth < 355)
  {
    imagesToShow = 1; 
  }
  else if(window.innerWidth < 768)
  {
    imagesToShow = 2;
  }
  
  

  images.forEach(img => img.style.display = 'none');

  for (let i = 0; i < imagesToShow; i++) {
      let indexToShow = (currentIndexm + i) % images.length;
      images[indexToShow].style.display = 'block';
  }

  currentIndexm = (currentIndexm + imagesToShow) % images.length;
}


updateImages();


window.addEventListener('resize', updateImages);


setInterval(updateImages, 5000);