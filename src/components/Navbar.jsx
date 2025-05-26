import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar(){


    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-transparent">
            <div className="container-fluid justify-content-center">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to="/" id='navbartxt' className="nav-link active" aria-current="page" href="#">
                        Accueil
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/contact" id='navbartxt' className="nav-link" href="#">
                        Contact
                    </Link>
                    </li>
                    <li className="nav-item dropdown">
                    <a to="/"  id='navbartxt' 
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Projet réalisés
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                        <Link to="/projet1" id='navbartxt' className="dropdown-item" href="#">
                            Parfums
                        </Link>
                        </li>
                        <li>
                        <Link to="/projet2" id='navbartxt' className="dropdown-item" href="#">
                            Tatouages
                        </Link>
                        </li>
                        <li>
                        <Link to="/projet" id='navbartxt' className="dropdown-item" href="#">
                            Créations en cours
                        </Link>
                        </li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

        </>
    )
}