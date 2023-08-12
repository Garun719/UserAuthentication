import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../assets/css/contact.css';
function ContactUs() {
  return (
    <>

    <section class="contact-sec sec-pad">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="contact-detail">
          <h1 class="section-title">Contact us</h1>

          <ul class="contact-ul">
            <li><i class="fa fa-location-dot"></i> 
            <a href="https://www.google.com/maps/place/Sector+58,+Noida,+Uttar+Pradesh+201301/@28.6059788,77.3528751,16z/data=!4m6!3m5!1s0x390ce56cf11a7011:0x49d7576acb82fa23!8m2!3d28.6067511!4d77.3597194!16s%2Fg%2F1w0j2k_v?entry=ttu">Bishunpura ,noida sector-58, Delhi</a> </li>

            <li>
              <i class="fa fa-phone"></i>
              <a href="tel:08510004495"><b>7651819061</b></a>,
              <a href="tel:08510005495"><b>6367598978</b></a>
            </li>

            <li>
              <i class="fa-solid fa-envelope"></i>
              <a href="mailto:pardeepkumar4bjp@gmail.com"><b> garunsahu719@gmail.com</b></a>
            </li>
          </ul>

          <span>
            <a href="#" class="fb"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" class="insta"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="twitter"><i class="fa-brands fa-twitter"></i></a>
          </span>
        </div>
      </div>

      <div class="col-md-6">
        <form action="#" class="contFrm" method="POST">
          <div class="row">
            <div class="col-sm-6">
              <input type="text" name="name" placeholder="Your Name" class="inptFld" required />
            </div>

            <div class="col-sm-6">
              <input type="email" name="email" placeholder="Email Address" class="inptFld" required />
            </div>

            <div class="col-sm-6">
              <input type="tel" name="phone" placeholder="Phone Number" class="inptFld" required />
            </div>

            <div class="col-sm-6">
              <input type="text" name="sub" placeholder="Subject" class="inptFld" required />
            </div>

            <div class="col-12">
              <textarea class="inptFld" rows="" cols="" placeholder="Your Message..." required></textarea>
            </div>

            <div class="col-12">
              <input type="submit" name="submit" value="SUBMIT" class="inptBtn" />
            </div>
          </div>
        </form>
      </div>
    </div>

   

  </div>
</section>
    <Footer/>
    </>
  )
}

export default ContactUs