import './App.css'

export default function App() {
  return (
    <div>
      <div id="headImage" alt="Miradouro de Faja Do Conde">
        <div class="btn-test btn1">P</div>
        <div class="btn-test btn2">P</div>
        <div class="btn-test btn3">P</div>
        <div class="btn-test btn4">P</div>
        <div class="btn-test btn5">P</div>
        <div class="btn-test btn6">P</div>
        <div class="btn-test btn7">P</div>
        <div class="btn-test btn8">P</div>
        <div class="btn-test btn9">T</div>
        <div class="btn-test btn10">P</div>
        <div class="btn-test btn11">P</div>
        <div class="btn-test btn12">T</div>
        <div class="btn-test btn13">P</div>
      </div>
      <div class="sticky">
        <a class="WhatsApp" aria-label="Chat on WhatsApp" href="https://api.whatsapp.com/send?phone=33624553500&text=">
          <img alt="Chat on WhatsApp" src="images/whatsapp.png" /></a>
      </div>
      <div id="modal" class="modal">
        <span class="arrow left-arrow" onclick="moveSlide(-1)">&#9664;</span>
        <div class="slider">
          <img src="images/testImage.jpg" class="sliderImage1 sideImages" />
          <img src="images/testImage.jpg" class="sliderImage2 centerImage" />
          <img src="images/testImage.jpg" class="sliderImage3 sideImages" />
        </div>
        <span class="arrow right-arrow" onclick="moveSlide(1)">&#9654;</span>
      </div>
    </div>
  );
}

