import { useState } from 'react';
import './App.css';
import whatsapp from '/images/whatsapp.png';
import galleryMedia from './galleryObjects.js'
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function App() {
  const [btnImage, setBtnImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currImageIndex, setCurrImageIndex] = useState(0);
  let gallery;

  const searchGallery = (key) => {
    return galleryMedia.find((item) => item.key == key);
  }

  if (showModal && btnImage !== null) {
    gallery = searchGallery(btnImage);
  }

  return (
    <div>
      <div id="headImage" alt="Miradouro de Faja Do Conde">
        <div onClick={() => { setBtnImage(1); setShowModal(true); }} className="btn-test btn1">P</div>
        <div onClick={() => { setBtnImage(2); setShowModal(true); }} className="btn-test btn2">P</div>
        <div onClick={() => { setBtnImage(3); setShowModal(true); }} className="btn-test btn3">P</div>
        <div onClick={() => { setBtnImage(4); setShowModal(true); }} className="btn-test btn4">P</div>
        <div onClick={() => { setBtnImage(5); setShowModal(true); }} className="btn-test btn5">P</div>
        <div onClick={() => { setBtnImage(6); setShowModal(true); }} className="btn-test btn6">P</div>
        <div onClick={() => { setBtnImage(7); setShowModal(true); }} className="btn-test btn7">P</div>
        <div onClick={() => { setBtnImage(8); setShowModal(true); }} className="btn-test btn8">P</div>
        <div onClick={() => { setBtnImage(9); setShowModal(true); }} className="btn-test btn9">T</div>
        <div onClick={() => { setBtnImage(10); setShowModal(true); }} className="btn-test btn10">P</div>
        <div onClick={() => { setBtnImage(11); setShowModal(true); }} className="btn-test btn11">P</div>
        <div onClick={() => { setBtnImage(12); setShowModal(true); }} className="btn-test btn12">T</div>
        <div onClick={() => { setBtnImage(13); setShowModal(true); }} className="btn-test btn13">P</div>
      </div>
      <div className="sticky select-none">
        <a className="WhatsApp" aria-label="Chat on WhatsApp" href="https://api.whatsapp.com/send?phone=33624553500&text=">
          <img alt="Chat on WhatsApp" src={whatsapp} />
        </a>
      </div>
      {showModal && (
        <div
          id="modal"
          className="modal select-none"
          style={{
            display: 'flex',
            position: 'fixed',
            zIndex: 1000,
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <span onClick={() => setShowModal(false)}
            className="sm:right-20 absolute top-12 right-10 text-white text-4xl hover:text-red-500 
            hover:cursor-pointer focus:outline-none"><X size={40}></X></span>
          <span className="arrow sm:left-[5%] left-1 active:text-orange-500" onClick={() => {
            if (currImageIndex >= 0) {
              setCurrImageIndex(currImageIndex - 1);
            }
          }}><ChevronLeft size={50} /></span>
          <div class="slider flex justify-center items-center gap-5 p-4">
            {
              currImageIndex < 0 ?
                <div class="hidden lg:block w-1/5 max-w-[12%] h-auto object-cover rounded-xl"></div> :
                gallery.gallery[currImageIndex].substring(0, 5) == 'https' ?
                  <iframe
                    class="hidden lg:block w-1/5 max-w-[12%] h-auto object-cover rounded-xl"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
                  </iframe> :
                  <img
                    src={gallery.gallery[currImageIndex]}
                    class="hidden lg:block w-1/5 max-w-[12%] h-auto object-cover rounded-xl"
                  />
            }
            {
              gallery.gallery[currImageIndex + 1].substring(0, 5) == 'https' ?
                <iframe
                  className='rounded-xl'
                  width={450}
                  height={300}
                  src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
                </iframe> :
                <img
                  src={gallery.gallery[currImageIndex + 1]}
                  class="w-3/4 sm:w-2/3 lg:w-1/3 max-w-[450px] h-auto object-cover rounded-xl"
                />
            }
            {
              currImageIndex + 3 > gallery.gallery.length ?
                <div class="hidden lg:block w-1/5 max-w-[12%] h-auto object-cover rounded-xl"></div> :
                gallery.gallery[currImageIndex + 2].substring(0, 5) == 'https' ?
                  <iframe
                    class="hidden lg:block w-1/5 max-w-[12%] h-auto object-cover rounded-xl"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
                  </iframe> :
                  <img
                    src={gallery.gallery[currImageIndex + 2]}
                    class="hidden lg:block w-1/5 max-w-[12%] h-auto object-cover rounded-xl"
                  />
            }
          </div>
          <span className="arrow sm:right-[5%] right-1 active:text-orange-500" onClick={() => {
            if (currImageIndex + 2 < gallery.gallery.length) {
              setCurrImageIndex(currImageIndex + 1);
            }
          }}><ChevronRight size={50} /></span>
        </div>
      )}
    </div>
  );
}
//
//
//
//
//
//
//
//
//
//
//
//
//
