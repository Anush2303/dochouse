import React,{useState} from "react"
import '../Card.css'
function Card(props){
    const [bgColour, setBgColour] = useState("#fafafa")
    const [fcolor,setfcolor]=useState("black")
    const styles={
        background:`${bgColour}`,
        color:`${fcolor}`,
        width:"31%"
    }
    function handlechange(){
        setBgColour("#c83f49")
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