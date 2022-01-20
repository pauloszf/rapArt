import React, { Component } from 'react'
import CardConteudo from '../Components/CardConteudo'

import micFeed from '../Assets/micFeed.png'
import '../css/Feed.css'

export default class Feed extends Component {
    render() {
        return (
            <div className="conteudoFeed p-d-flex p-align-center p-justify-center">
                <div className="postagens">
                    <div className="divisorPostagens p-d-flex p-align-center p-justify-center">
                        <img src={micFeed} alt="" />
                        <h1>Postagens novas</h1>
                        <img src={micFeed} alt="" />
                    </div>
                    <div className="cardsNoticias overflow-y-scroll overflow-x-hidden">
                        <CardConteudo 
                            imgCard="https://picsum.photos/200/200" 
                            titulo="Titulo incrivel" 
                            descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, ducimus. Quas aut aspernatur optio officia. Suscipit at consequuntur odio, quas rerum ratione ea qui ducimus, eaque dolore eos esse accusantium!" 
                        />

                        <CardConteudo 
                            imgCard="https://picsum.photos/200/200" 
                            titulo="Titulo incrivel 2" 
                            descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, ducimus. Quas aut aspernatur optio officia. Suscipit at consequuntur odio, quas rerum ratione ea qui ducimus, eaque dolore eos esse accusantium!" 
                        />

                        <CardConteudo 
                            imgCard="https://picsum.photos/200/200" 
                            titulo="Titulo incrivel 3" 
                            descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, ducimus. Quas aut aspernatur optio officia. Suscipit at consequuntur odio, quas rerum ratione ea qui ducimus, eaque dolore eos esse accusantium!" 
                        />

                        <CardConteudo 
                            imgCard="https://picsum.photos/200/200" 
                            titulo="Titulo incrivel 4" 
                            descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, ducimus. Quas aut aspernatur optio officia. Suscipit at consequuntur odio, quas rerum ratione ea qui ducimus, eaque dolore eos esse accusantium!" 
                        />
                    </div>
                </div>
            </div>
        )
    }
}
