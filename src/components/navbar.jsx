import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/Counter">1. Contador</Link></li>
                    <li><Link to="/Gif">2. Gif Browser</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;