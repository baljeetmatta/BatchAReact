import { NavLink } from "react-router-dom";
import { Link, Navigate, useNavigate } from "react-router-dom"

const Navbar=()=>{
const navigate=useNavigate();
    return (
        <>
        <div className="flex gap-2">
            <ul>
        <li>
        <NavLink to="/">Home Page</NavLink>
        
        </li>
        <li>
        <NavLink to="/about">About Page</NavLink>
        
        </li>

        <li>
        <NavLink to="/contact">Contact us </NavLink>
        
        </li>
        </ul>
        <button className="bg-red-300 p-2 text-white" onClick={()=>{navigate("/about",{state:{data:1}})}}>Login</button>
        </div>
        </>
    )
}
export default Navbar;