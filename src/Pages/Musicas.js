import React, { Component } from 'react'
import CardMusicas from '../Components/CardMusicas'

import '../css/Musicas.css'

export default class Musicas extends Component {
    render() {
        return (
            <div className="musicasFeed">
                <div className="musicaCard">
                    <CardMusicas 
                        className="musicaCard"
                        cardImagem="https://picsum.photos/350/450" 
                        tituloMusica="Segue a batida" 
                        descricaoMusica="Seja o primeiro a ouvir o mais novo sucesso" 
                    />
                </div>
                <div className="musicaCard">
                    <CardMusicas 
                        cardImagem="https://picsum.photos/350/450" 
                        tituloMusica="Segue a batida" 
                        descricaoMusica="Seja o primeiro a ouvir o mais novo sucesso" 
                    />
                </div>
                <div className="musicaCard">
                    <CardMusicas 
                        cardImagem="https://picsum.photos/350/450" 
                        tituloMusica="Segue a batida" 
                        descricaoMusica="Seja o primeiro a ouvir o mais novo sucesso" 
                    />
                </div>
                <div className="musicaCard">
                    <CardMusicas 
                        cardImagem="https://picsum.photos/350/450" 
                        tituloMusica="Segue a batida" 
                        descricaoMusica="Seja o primeiro a ouvir o mais novo sucesso" 
                    />
                </div>
            </div>
        )
    }
}
