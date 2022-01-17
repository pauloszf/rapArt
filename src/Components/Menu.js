import React from 'react';
import { Link } from 'react-router-dom'
import { Menubar } from 'primereact/menubar';
import { PrimeIcons } from 'primereact/api';

import Mic from '../Assets/mic2.png'
import '../css/Menu.css';


export default function Menu() {
    const itens = [
        {
            icon: PrimeIcons.BARS,
            items:[
                {
                    label: <Link className="p-d-flex p-col p-align-center p-justify-center" to="/musicas">MÚSICAS</Link>,
                },
                {
                    label: <Link className="p-d-flex p-col p-align-center p-justify-center" to="/loja">LOJA</Link>,
                },
                {
                    label: <Link className="p-d-flex p-col p-align-center p-justify-center" to="/contato">CONTATO</Link>,
                },
                {
                    label: <Link className="p-d-flex p-col p-align-center p-justify-center" to="/login">LOGIN</Link> ,
                },
            ]
        }
    ]
    return (
        <div className="menu">
            <div className="m-0 p-d-none p-justify-between max-w-full p-d-md-flex">
                <Link className="linkMenu p-d-flex p-col p-align-center p-justify-center" to="/"><img src={Mic} alt="Logo em forma de microfone" /></Link>
                <Link className="linkMenu p-d-flex p-col p-align-center p-justify-center" to="/musicas">MÚSICAS</Link>
                <Link className="linkMenu p-d-flex p-col p-align-center p-justify-center" to="/loja">LOJA</Link>
                <Link className="linkMenu p-d-flex p-col p-align-center p-justify-center" to="/contato">CONTATO</Link>
                <Link className="linkMenu p-d-flex p-col p-align-center p-justify-center" to="/login">LOGIN</Link> 
            </div>
            <div className="p-d-md-none">
                <Menubar 
                    className='p-d-flex p-align-center p-justify-center'
                    model={itens}
                    end={<Link className="p-d-flex p-col p-align-center p-justify-center" to="/"><img className='w-3' src={Mic} alt="Logo em forma de microfone" /></Link>}
                />
            </div>
        </div>
    )
}
