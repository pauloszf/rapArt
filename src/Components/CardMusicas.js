import React from 'react';
import { Link } from 'react-router-dom';

import '../css/CardMusicas.css'

export default function CardMusicas(props) {
    return (
        <div className="cardMusica" >
            <div className="cardImagem">
                <img src={props.cardImagem} alt="" />
            </div>
            <div className="cardDescricao">
                <h1>{props.tituloMusica}</h1>
                <p> {props.descricaoMusica} </p>
            </div>
            <div className="link">
                <Link>Clique para ouvir</Link>
            </div>
        </div>
    )
}
