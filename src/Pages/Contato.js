import React, { Component } from 'react'

import '../css/Contato.css';

export default class Contato extends Component {
    constructor(){
        super();

        this.state = {
            nome: '',
            email: '',
            telefone: '',
            mensagem: '',
        }
    }
    render() {
        return (
            <div className="contato">
                <div className="formulario">
                    <form action="">
                        <label htmlFor="">Nome</label>
                        <input type="text" />
                        <label htmlFor="">E-mail</label>
                        <input type="text" />
                        <label htmlFor="">Telefone</label>
                        <input type="text" />
                        <label htmlFor="">Mensagem</label>
                        <textarea name="" id="" cols="30" rows="10" />
                    </form>
                    <div className="botoes">
                        <button className="btEnviar">Enviar</button>
                        <button className="btLimpar">Apagar</button>
                    </div>
                </div>
            </div>
        )
    }
}
