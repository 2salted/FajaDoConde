const modal = document.getElementById("modal");

document.querySelectorAll('.btn-test').forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// function moveSlide(direction) {
//   slides.forEach((slide, index) => {
//     slide.classList.remove('left-img', 'center-img', 'right-img');
//   });
//
//   currentSlide += direction;
//
//   if (currentSlide < 0) {
//     currentSlide = slides.length - 1;
//   } else if (currentSlide >= slides.length) {
//     currentSlide = 0;
//   }
//
//   let nextSlide = (currentSlide + 1) % slides.length;
//   let prevSlide = (currentSlide - 1 + slides.length) % slides.length;
//
//   slides[prevSlide].classList.add('left-img');
//   slides[currentSlide].classList.add('center-img');
//   slides[nextSlide].classList.add('right-img');
// }
