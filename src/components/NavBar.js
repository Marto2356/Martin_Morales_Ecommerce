import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/">Categories</Link>
                    <ul>
                        <li><Link to="#">Géneros</Link>
                                <ul>
                                    <li><Link to="realismo-magico">Realismo mágico</Link></li>
                                    <li><Link to="novela">Novela</Link></li>
                                    <li><Link to="literatura-modernista">Literatura modernista</Link></li>
                                    <li><Link to="satira">Sátira</Link></li>
                                    <li><Link to="ficcion-de-aventuras">Ficción de aventuras</Link></li>
                                </ul>
                        </li>
                    </ul>
                </li>
                <li><Link to="#">Acerca de</Link></li>
                <li><Link to="#">Login</Link></li>
            </nav>
            <CartWidget/>
        </>
    )
}

export default NavBar