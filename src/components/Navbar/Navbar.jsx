import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { LuUserRound } from "react-icons/lu";
function Navbar() {
    return (
        <>
            <nav>
                <div className="container">
                    <div className="nav_logo">
                        <img src="/imgs/Logo.svg" alt="" />
                    </div>
                    <div className="nav_left">
                        <ul className="links">
                            <li><NavLink to={"/"}>Marketplace</NavLink></li>
                            <li><NavLink to={"/ranking"}>Rankings</NavLink></li>
                            <li><NavLink to={"/connect"} >Connect a wallet</NavLink></li>
                        </ul>
                            <button><LuUserRound /> Sign Up </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar