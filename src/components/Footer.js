import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <>        
        <footer className="page-footer font-small blue">  
            <div className="footer-copyright text-center py-3">© 2021 Copyright:            
            <Link to={{ pathname: "https://github.com/EdKillah" }}  rel="noopener noreferrer" target="_blank" style={{color:'black'}}>EdKillah (Eduard Jimenez)</Link>
            </div>
        </footer>
    </>
    );
};


export default Footer;