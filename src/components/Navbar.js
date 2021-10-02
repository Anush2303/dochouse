import React from "react"
function Navbar(){
     return(
        <div>
        <div className="btn">
        <button type="button" class="btn btn-success btn-lg">LOGIN <i class="fas fa-user "></i></button>
        <button type="button" class="btn btn-danger btn-lg">SIGNUP <i class="far fa-user "></i></button> 
        </div>
        </div>
     );
}

export default Navbar