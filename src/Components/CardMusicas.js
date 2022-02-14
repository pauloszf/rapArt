import React from 'react';
import { Link } from 'react-router-dom';

import '../css/CardMusicas.css'

export default function CardMusicas(props) {
    return (
        <div className="w-20rem shadow-4 cardMusica" >
            <div className="cardImagem">
                <img className="w-20rem h-27rem" src={props.cardImagem} alt="" />
            </div>
            <div className="cardDescricao text-center px-4">
                <h1>{props.tituloMusica}</h1>
                <p> {props.descricaoMusica} </p>
            </div>
            <div className="link">
                <Link>Clique para ouvir</Link>
            </div>
        </div>
    )
}
