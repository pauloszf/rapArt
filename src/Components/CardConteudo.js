import { Link } from 'react-router-dom'
import React from 'react'

import '../css/CardConteudo.css';

export default function CardConteudo(props) {
    return (
        <div className="card" >
            <div className="cardHeader">
                <div className="cardImage">
                    <img src={props.imgCard} alt="" />
                </div>
                <div className="cardConteudo">
                    <h2>{props.titulo}</h2>
                    <p>
                        {props.descricao}
                    </p>
                </div>
            </div>
            <div className="cardRodape">
                <Link>Ler mais...</Link>
                <Link>Compartilhar</Link>
            </div>
        </div>
    )
}
