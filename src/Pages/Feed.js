import React, { Component } from 'react'
import CardConteudo from '../Components/CardConteudo'
import { Card } from 'primereact/card';

import micFeed from '../Assets/micFeed.png'
import '../css/Feed.css'

export default class Feed extends Component {
    render() {
        return (
            <div className="conteudoFeed p-d-flex p-align-center p-justify-center">
                <div className="postagens p-d-none p-d-md-inline">
                    <div className="divisorPostagens w-full p-d-flex p-align-center p-justify-center">
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
                <div className="feedResponsivo pb-8 p-d-md-none p-d-inline" >
                    <Card className='w-13rem p-1 h-25rem line-height-2 text-overflow-ellipsis overflow-y-hidden' title="Titulo incrivel 4" header={<img alt="Card" src="https://picsum.photos/200/200" />}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptates voluptatibus rerum expedita officia deserunt, harum impedit minus possimus deleniti rem explicabo quibusdam incidunt corrupti placeat magnam nisi sunt provident.
                    </Card>
                </div>
            </div>
        )
    }
}
