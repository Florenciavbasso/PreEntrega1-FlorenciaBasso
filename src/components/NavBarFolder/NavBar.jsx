import CartWidget from '../CartWidgetFolder/CartWidget';
import "./NavBar.css";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <h2 className="navbar-h2"> charra! </h2>

            <div className="navlinks">
                <Link className="links" to="/">Inicio</Link>
                <Link className="links" to="/Buzos">Buzos</Link>
                <Link className="links" to="/Remeras">Remeras</Link>
                <Link className="links" to="/Accesorios">Accesorios</Link>
            </div>

            <CartWidget width="20px" height="20px" />
        </nav>
    )
}

export default NavBar