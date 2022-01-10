import React from 'react';
import { Link } from 'react-router-dom'
import 'primeflex/primeflex.css';

import Mic from '../Assets/mic2.png'
import '../css/Menu.css';

export default function Menu() {
    return (
        <div className="menu">
            <div className="p-grid p-justify-between">
                <Link className="linkMenu p-d-flex p-col p-align-center p-justify-center" to="/"><img src={Mic} alt="Logo em forma de microfone" /></Link>
                <Link className="linkMenu p-d-flex p-col p-align-center p-justify-center" to="/musicas">MÚSICAS</Link>
                <Link className="linkMenu p-d-flex p-col p-align-center p-justify-center" to="/loja">LOJA</Link>
                <Link className="linkMenu p-d-flex p-col p-align-center p-justify-center" to="/contato">CONTATO</Link>
                <Link className="linkMenu p-d-flex p-col p-align-center p-justify-center" to="/musicas">LOGIN</Link> 
            </div>
        </div>
    )
}
