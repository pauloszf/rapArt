import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

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

    setValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    render() {
        return (
            <div className="p-d-flex mt-4 p-align-center p-justify-center">
                <div className="formulario">
                    <form action="">
                        <label htmlFor="">Nome</label>
                        <InputText className="w-full my-2" name="nome" value={this.state.nome} onChange={(e) => this.setValue(e)} />
                        <label htmlFor="">E-mail</label>
                        <InputText className="w-full my-2" name="email" value={this.state.email} onChange={(e) => this.setValue(e)} />
                        <label htmlFor="">Telefone</label>
                        <InputText className="w-full my-2" name="telefone" value={this.state.telefone} onChange={(e) => this.setValue(e)}/>
                        <label htmlFor="">Mensagem</label>
                        <InputTextarea className="w-full my-2" rows={10} cols={30} name="mensagem" value={this.state.mensagem} onChange={(e) => this.setValue(e)} autoResize />
                    </form>
                    <div className="p-d-flex">
                        <Button className="w-full my-2 mx-1 btEnviar" label="Enviar" />
                        <Button className="w-full my-2 mx-1 btLimpar" label="Apagar" />
                    </div>
                </div>
            </div>
        )
    }
}
