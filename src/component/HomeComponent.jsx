import React, {useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import ModalComponent from './ModalComponent';
function HomeComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    
  return (
    <>
    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active " >
      <img src="https://images.unsplash.com/photo-1507915135761-41a0a222c709?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29mZmUlMjBzaG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" style={{objectFit:"fill", height:"500px"}}class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Buy me a coffee☕</h5>
        <button type="button" className="btn btn-outline-info" onClick={openModal}>
            Buy Me
          </button>        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" >
      <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmUlMjBzaG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"style={{objectFit:"fill", height:"500px"}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <ModalComponent isOpen={isModalOpen} onClose={closeModal} />
    <div class="carousel-item" >
      <img src="https://images.unsplash.com/photo-1691851004542-adebba3310d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"style={{objectFit:"fill", height:"500px"}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default HomeComponent