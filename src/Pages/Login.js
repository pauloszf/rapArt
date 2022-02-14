import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

import '../css/Login.css';

export default class Login extends Component {
    constructor(){
        super();

        this.state = {
            usuario: '',
            senha: ''
        }
    }

    setValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
  render() {
    return (
        <div className="flex justify-content-center flex-wrap h-screen ">
            <div className="align-self-center mb-8 shadow-4 p-4">
                <h1 className="text-center">Login</h1>
                <InputText className="flex w-full mb-2" placeholder="Usuário" name="usuario" value={this.state.usuario} onChange={(e) => this.setValue(e)} />
                <InputText className="flex w-full" type="password" placeholder="Senha" name="senha" value={this.state.senha} onChange={(e) => this.setValue(e)} />
                <span> <Link to="/login" className="text-red no-underline">Esqueceu a senha</Link></span>
                <Button className="btLogin w-full mt-4" label="Login" />
            </div>
        </div>
    );
  }
}
