import React from "react";
import '../Contact.css'
import { Jumbotron } from "reactstrap";
function Contact(){
    return(
      
      <Jumbotron>
      <div id="contact">
       <div className="display-3 head">
           GET IN TOUCH !
       </div>
       <div className="row">
       <div className="col-12 col-sm-12 col-md-6 col-lg-6">
           <div className="contact-wrapper">
           <ul class="contact-list">
            <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Pitampura,Delhi</span></i></li>
            <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:7292030414" title="Give me a call">7292030414</a></span></i></li>
            <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:anushgupta2303@gmail.com" title="Send me an email">anushgupta2303@gmail.com</a></span></i></li>
          </ul>
          </div>
           <ul className="justify-content-center social-media-list">
            <a href="https://github.com/Anush2303" target="_blank"><li  class="contact-icon">
              <i class="fab fa-github"  aria-hidden="true"></i></li>
            </a>
            <a href="#" target="_blank" ><li class="contact-icon">
              <i class="fab fa-twitter" aria-hidden="true"></i></li>
            </a>
            <a href="#" target="_blank" ><li class="contact-icon">
              <i class="fab fa-instagram" aria-hidden="true"></i></li>
            </a>       
          </ul>
          <div class="justify-content-center copyright">&copy; ALL RIGHTS RESERVED</div>
          </div>
          <div className="imgcover col-12 col-sm-12 col-md-6 col-lg-6">
              <img src="https://finwave.co/images/gif/Contact-1.gif" alt="img"/> 
          </div>
       </div>
       </div>
       </Jumbotron>
    );
}
export default Contact