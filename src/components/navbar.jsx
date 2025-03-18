
import { useState } from "react";
import Login from "./login";
import { Link } from "react-router-dom";

const Navbar = ()=>{
    const [admin, setAdmin] = useState(false)

    const handleAdmin = ()=>{
        
    }
    return(
        <>
        <nav>
            <p>Inventory</p>
            <button onClick={handleAdmin}>Admin</button>
            <Link to="/">Login</Link>
            

        </nav>
        </>
    )
}

export default Navbar;