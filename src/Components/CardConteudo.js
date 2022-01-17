import { Link } from 'react-router-dom'
import React from 'react'

import '../css/CardConteudo.css';

export default function CardConteudo(props) {
    return (
        <div className="card my-4 shadow-4" >
            <div className="p-d-flex">
                <div className="cardImage">
                    <img src={props.imgCard} alt="" />
                </div>
                <div className="p-4">
                    <h2>{props.titulo}</h2>
                    <p>
                        {props.descricao}
                    </p>
                </div>
            </div>
            <div className="cardRodape p-3">
                <Link className="mx-2 text-white">Ler mais...</Link>
                <Link className="mx-2 text-white">Compartilhar</Link>
            </div>
        </div>
    )
}
