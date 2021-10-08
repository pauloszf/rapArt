import React from 'react';
import { Link } from 'react-router-dom'

import Mic from '../Assets/mic2.png'
import '../css/Menu.css';

export default function Menu() {
    return (
        <div className="menu">
            <ul className="menuBar">
                <li className="linkMenu"><Link to="/">INÍCIO</Link></li>
                <li className="linkMenu"><Link to="/musicas">MÚSICAS</Link></li>
                <li className="logoMenu"><img src={Mic} alt="Logo em forma de microfone" /></li>
                <li className="linkMenu"><Link to="/loja">LOJA</Link></li>
                <li className="linkMenu">CONTATO</li>
            </ul>
        </div>
    )
}
