//Current year for footer
const year = document.getElementById('year');
const d = new Date();
const y = d.getFullYear();
year.innerHTML = y;

// Video Player controls
const progress = document.querySelector('.progress');

progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
});

const volume = document.querySelector('.volume');

volume.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
});

//Ripple effect
const rippleBtn = document.querySelector('.ripple');

// const bookRipple = document.querySelector('.book-ripple');

// bookRipple.addEventListener('click', function (e) {
//     const x = e.pageX;
//     const y = e.pageY;

//     const buttonTop = e.target.offsetTop;
//     const buttonLeft = e.target.offsetLeft;
//     const xInside = x - buttonLeft;
//     const yInside = y - buttonTop;

//     const circle = document.createElement('span');
//     circle.classList.add('circle');
//     circle.style.top = yInside + 'px';
//     circle.style.left = xInside + 'px';
//     this.appendChild(circle);

//     setTimeout(() => circle.remove(), 400);
// });

rippleBtn.addEventListener('click', function (e) {
    const x = e.pageX;
    const y = e.pageY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';
    this.appendChild(circle);

    setTimeout(() => circle.remove(), 400);
});

//popup

const openPopupBtn = document.querySelector('.buy-now');
const popupBackground = document.querySelector('.popup-background');
const popupContainer = document.querySelector('.popup-container');


openPopupBtn.addEventListener('click', () => {
  popupBackground.classList.remove('hidden');
  popupBackground.classList.remove('delay');
  popupContainer.classList.remove('hidden');

  // document.body.style.overflowY = 'hidden';
  // document.body.style.maxHeight = '100vh';

});

const closePopup = document.querySelector('.close-cross');

popupBackground.addEventListener('click', hidePopup);
closePopup.addEventListener('click', hidePopup);

function hidePopup(e) {
  if ((e.currentTarget === popupBackground && e.target === e.currentTarget)
  || e.currentTarget === closePopup) {
    popupBackground.classList.add('hidden');
    popupContainer.classList.add('hidden');
  
    document.body.style.overflowY = 'scroll';
    document.body.style.maxHeight = 'auto';
  
    setTimeout(() => {
      popupBackground.classList.add('delay');
    }, 1000);
  }
};


const menuCheckbox = document.querySelector('#menu-checkbox');
const mainText = document.querySelector('.main-text');

menuCheckbox.addEventListener('click', ()=> {
  if (menuCheckbox.checked) {
    mainText.classList.add('hidden');
  } else {
    mainText.classList.remove('hidden');
  }
});





// Welcome Slider
