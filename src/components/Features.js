import React from "react"
import '../Features.css'
import Card from './Card'
import 'animate.css'
function Features(){
     return(
         <div>
         <div className="feature typewriter" id="features" style={{textAlign:'center'}}>
         <h1>FEATURES</h1>
         </div>
         <div className="row">
             <div className="col-sm-12 col-md-4 animate__animated animate__zoomIn">
             <Card title="SUBJECT WISE NOTES"
                   logo={<i class="fas fa-sticky-note fa-3x"></i>} 
                   desc="Get handy notes for revising key topics and concepts"
                   />
             </div>
             <div className="col-sm-12 col-md-4 animate__animated animate__zoomIn">
             <Card title="PREVIOUS YEAR QUESTION PAPERS"
             logo={<i class="fas fa-scroll fa-3x"></i>}
             desc="Get to know previously asked questions and know your current level of preparation."/>
             </div>
             <div className="col-sm-12 col-md-4 animate__animated animate__zoomIn">
             <Card title="REFERENCE BOOKS"
             logo={<i class="fas fa-book fa-3x"></i>}
             desc="Get some books of renownded authors you can refer to for crystal clear concepts"/>
             </div>
             </div>
             <div className="row">
             <div className=" col-sm-12 col-md-4 animate__animated animate__zoomIn">
             <Card title="STUDY TOGETHER"
             logo={<i class="fas fa-users fa-3x"></i>}
             desc="Study and grow together- Form group of friends and enjoy studying together"/>
             </div>
             <div className=" col-sm-12 col-md-4 animate__animated animate__zoomIn">
             <Card title="GO CHAT"
             logo={<i class="fas fa-comment-dots fa-3x"></i>}
             desc="You are provided with a chat system for solving each other doubts and discuss something."/>
             </div>
             <div className=" col-sm-12 col-md-4 animate__animated animate__zoomIn">
             <Card title="VOICE OUT"
             logo={<i class="fas fa-microphone-alt fa-3x"></i>}
             desc="You may also voice out to your friends and take your experience to another level!"/>
         </div>
         </div>
         </div>
     )
}
export default Features