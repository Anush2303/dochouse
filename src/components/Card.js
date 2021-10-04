import React,{useState} from "react"
import '../Card.css'
function Card(props){
    const [bgColour, setBgColour] = useState("#fafafa")
    const [fcolor,setfcolor]=useState("black")
    const styles={
        background:`${bgColour}`,
        color:`${fcolor}`
    }     
    function handlechange(){
        setBgColour("linear-gradient(10deg, rgba(2,0,36,1) 29%, rgba(154,50,35,1) 100%, rgba(0,212,255,1) 100%)")
        setfcolor("white")
    }
    return(
        <div class="card" onMouseEnter={handlechange} style={styles}>
        <div class="card-body" >
        <h5 class="card-title">{props.title}</h5>
        {props.logo}
        <p class="card-text">{props.desc}</p>
        </div>
        </div>
    );
}
export default Card