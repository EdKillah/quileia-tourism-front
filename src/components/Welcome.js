import React from 'react';
import { Link } from 'react-router-dom';
import './style/Welcome.css';

const Welcome = () => {

    return (
        <>
            <h1>¡Bienvenido al turismo de Quileia!</h1>
            <div id="buttons">
                <Link to="/cities">
                    <button className="btn btn-primary" style={{ marginRight: "7px" }}>
                        Ver Ciudades
                    </button>
                </Link>
                <Link to="tourists">
                    <button className="btn btn-success" style={{ marginRight: "7px" }} >
                        Ver Turistas
                    </button>
                </Link>
            </div>
        </>
    );
};

export default Welcome;