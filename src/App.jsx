import { useState } from 'react';
import './App.css';
import whatsapp from './images/whatsapp.png';

export default function App() {

  const [btnImage, setBtnImage] = useState(null);

  return (
    <div>
      <div id="headImage" alt="Miradouro de Faja Do Conde">
        <div className="btn-test btn1">P</div>
        <div className="btn-test btn2">P</div>
        <div className="btn-test btn3">P</div>
        <div className="btn-test btn4">P</div>
        <div className="btn-test btn5">P</div>
        <div className="btn-test btn6">P</div>
        <div className="btn-test btn7">P</div>
        <div className="btn-test btn8">P</div>
        <div className="btn-test btn9">T</div>
        <div className="btn-test btn10">P</div>
        <div className="btn-test btn11">P</div>
        <div className="btn-test btn12">T</div>
        <div className="btn-test btn13">P</div>
      </div>
      <div className="sticky">
        <a className="WhatsApp" aria-label="Chat on WhatsApp" href="https://api.whatsapp.com/send?phone=33624553500&text=">
          <img alt="Chat on WhatsApp" src={whatsapp} /></a>
      </div>
      <div id="modal" className="modal">
        <span className="arrow left-arrow">&#9664;</span>
        <div class="slider">
        </div>
        <span className="arrow right-arrow">&#9654;</span>
      </div>
    </div>
  );
}
/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * */
