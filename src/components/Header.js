import React, {useState,useEffect} from "react"
import Navbar from "./Navbar";
import '../Header.css'
function Header(){
    const [isshown,setshown]=useState(false);
    useEffect(() => {
        const timeout = setInterval(() => {
            setshown(prevState=>!prevState);
         }, 1200);
     
        return () => clearTimeout(timeout);
       },[]);
    return(
        <div>
            <Navbar/>
            <div className="row heading">
                <p>DOCHOUSE {isshown?<i class="fas fa-user-graduate"></i>:<i class="fas fa-user"></i>}</p>
                <h1>AB ENGINEERING HOGI ASAAN!</h1>
            </div>
            <div className="row search">
                <input type="text" placeholder="Enter subject" />
            </div>
            <img className="cover" src="http://4.bp.blogspot.com/-zJOGr6L6WXI/T5WktVyAIII/AAAAAAAAAAc/bi2MsS9jePI/s1600/head_gear_500_clr.gif" alt="img"/>
        </div>
    );
}

export default Header