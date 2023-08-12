import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import photo from '../assets/Images/profile.jpg'
import "../assets/css/about.css";
function About() {
  return (
    <>
     
      <section class="about-section mt-5">
        <div class="container">
          <div class="row">
            <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div class="inner-column">
                <div class="sec-title">
                  <h2>GARUN SAHU</h2>
                </div>
                <div class="text">
                  Hello, I'm Garun Sahu, a passionate and skilled computer
                  science graduate with a Bachelor's degree in Technology. My
                  expertise encompasses a wide array of web development
                  technologies, including HTML, CSS, Bootstrap, JavaScript, and
                  ReactJS. With a strong foundation in coding and design
                  principles, I possess the ability to seamlessly blend
                  functionality and aesthetics in my projects. My journey has
                  been enriched by active participation in numerous college
                  events, where I've had the opportunity to showcase my
                  technical prowess and innovative thinking. Beyond my technical
                  skills, I have a keen interest in the realm of design,
                  allowing me to create visually appealing and user-friendly
                  digital experiences. With a solid educational background,
                  practical experience, and a drive for continuous learning, I
                  am dedicated to contributing to impactful projects and
                  advancing the world of technology and design.
                </div>
              </div>
            </div>

            <div class="image-column col-lg-4 col-md-12 col-sm-12">
              <div class="inner-column wow fadeInLeft"> 
               
                <figure class="image-1" style={{width:"500px"}}>
                  <a href="#" class="lightbox-image" data-fancybox="images">
                    <img
                      height={'300px'}
                      width={'300px'}
                      style={{borderRadius:"100%"}}
                      src={photo}
                      alt=""
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
         
         
        </div>
      </section>

      <div class="footer-about">
        <p>©2023 | All Rights Reserved</p>
      </div>
    </>
  );
}
export default About;
