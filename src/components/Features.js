import React from "react"
import '../Features.css'
import Card from './Card'
function Features(){
  
     return(
         <div>
         <div className="feature typewriter" id="features">
         <h1>FEATURES</h1>
         </div>
         <div class="row">
             <Card title="SUBJECT WISE NOTES"
                   logo={<i class="fas fa-sticky-note fa-3x"></i>} 
                   desc="Get handy notes for revising key topics and concepts"
                   />
             <Card title="PREVIOUS YEAR QUESTION PAPERS"
             logo={<i class="fas fa-scroll fa-3x"></i>}
             desc="Get to know previously asked questions and know your current level of preparation."/>
             <Card title="REFERENCE BOOKS"
             logo={<i class="fas fa-book fa-3x"></i>}
             desc="Get some books You can refer to"/>
         </div>
         <div class="row">
             <Card title="STUDY TOGETHER"
             logo={<i class="fas fa-users fa-3x"></i>}
             desc="Study and grow together- Form group of friends and enjoy studying together"/>
             <Card title="GO CHAT"
             logo={<i class="fas fa-comment-dots fa-3x"></i>}
             desc="You are provided with a chat system for solving each other doubts and discuss something."/>
             <Card title="VOICE OUT"
             logo={<i class="fas fa-microphone-alt fa-3x"></i>}
             desc="You may also voice out to your friends and take your experience to another level!"/>
         </div>
         </div>
     )
}
export default Features