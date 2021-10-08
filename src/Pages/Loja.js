import React, { Component } from 'react'
import CardLoja from '../Components/CardLoja'

import '../css/Loja.css';
import Camiseta from '../Assets/camiseta.jpg';

export default class Loja extends Component {
    render() {
        return (
            <div className="lojaProdutos">
                <div className="produtosLista">
                    <CardLoja className="produto" imagemProduto={Camiseta} nomeProduto="Camiseta punk" nomeMarca="Dellil" preco="29.99R$" />
                    <CardLoja className="produto" imagemProduto={Camiseta} nomeProduto="Camiseta punk" nomeMarca="Dellil" preco="29.99R$" />
                    <CardLoja className="produto" imagemProduto={Camiseta} nomeProduto="Camiseta punk" nomeMarca="Dellil" preco="29.99R$" />
                    <CardLoja className="produto" imagemProduto={Camiseta} nomeProduto="Camiseta punk" nomeMarca="Dellil" preco="29.99R$" />
                    <CardLoja className="produto" imagemProduto={Camiseta} nomeProduto="Camiseta punk" nomeMarca="Dellil" preco="29.99R$" />
                    <CardLoja className="produto" imagemProduto={Camiseta} nomeProduto="Camiseta punk" nomeMarca="Dellil" preco="29.99R$" />
                    <CardLoja className="produto" imagemProduto={Camiseta} nomeProduto="Camiseta punk" nomeMarca="Dellil" preco="29.99R$" />
                </div>
            </div>
        )
    }
}
