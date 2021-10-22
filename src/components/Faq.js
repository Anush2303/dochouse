import React from "react"
import Navbar from './Navigation/Navbar.js'
import './Faq.css'
function Faq(){
    return(
        <div>
        <Navbar />
        <div className="faqhead animate__animated animate__zoomIn">FREQUENTLY ASKED QUESTIONS (FAQs) <i class="fas fa-book-reader fa-2x"></i></div>
        <div class="accordion accordion-flush" id="accordionFlush">
        <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        WHAT IS DOCHOUSE ?
        </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body"><i class="fas fa-hand-pointer"></i> DOCHOUSE is basically a platform which is unique in its own terms. It is the one stop destination of all Engineering students! You will get access to all the key notes of subjects which
        we all know how handy it is before the exams. You can share your screen and chat with your friends to solve each other doubts. For more details head out to our Features section on Homepage </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        HOW IS IT USEFUL TO US..? WHAT ARE THE BENEFITS OF DOCHOUSE..?
        </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <p>
          <i class="fas fa-hand-pointer"></i> Get access to handy notes for revising key topics and concepts
          <hr/>
          <i class="fas fa-hand-pointer"></i> Get access to Previous Year Question Papers
          <hr/>
          <i class="fas fa-hand-pointer"></i> Get some books of renowned authors you can refer to
          <hr/>
          <i class="fas fa-hand-pointer"></i> Form group of friends and grow together
          <hr/>
          <i class="fas fa-hand-pointer"></i> You are also provided with a chat system for solving each other doubts and discuss.
          </p>
        </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
         WHAT IS MEANING OF SELL NOTES ?
        </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body"><i class="fas fa-hand-pointer"></i> Motive and vision of Dochouse is to grow together.
        Therefore we have created Sell Notes section where we expect students to share their valuable notes which could be helpful to some other students as well.</div>
        </div>
        </div>
        </div>
        </div>
    );
}
export default Faq;