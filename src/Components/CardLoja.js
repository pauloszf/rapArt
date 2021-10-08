import React from 'react';

import '../css/CardLoja.css';

export default function CardLoja(props) {
    return (
        <div className="cardProduto">
            <div className="imagemProduto">
                <img src={props.imagemProduto} alt="" />
            </div>
            <div className="descricao">
                <h3>
                    {props.nomeProduto}
                </h3>
                <h6>
                    {props.nomeMarca}
                </h6>
            </div>
            <div className="preco">
                <h3>
                    {props.preco}
                </h3>
            </div>
        </div>
    )
}
