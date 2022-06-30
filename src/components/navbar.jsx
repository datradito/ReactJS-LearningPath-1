import { Link } from "react-router-dom";
import '../styles/navbar.css';

function Navbar(){
    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/Gif">2. Gif Browser</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;