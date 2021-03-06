import React from 'react';


const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary"> 
            <a className="navbar-brand" href="#">QuileiaTurismo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/cities">Ciudades</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/tourists">Turistas</a>
                    </li>                    
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;