import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';


import logoImg from '../../assets/logo.png';
import heroesImg from '../../assets/heroes.jpg';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

            try {
                const response = await api.post('sessions', { id });

                localStorage.setItem('ongId', id);
                localStorage.setItem('ongName', response.data.name);
                
                history.push('/profile');
            } catch (err) {
                alert('Falha no login, por favor tente novamente!');
            }
    }

    return (
        <div className="logon-container">
        <section className="form">
        <img src={logoImg} alt="RBB Consultoria" />  

        <form onSubmit={handleLogin}>
        <h1>Realize seu login</h1>

        <input placeholder="Sua ID" 
        value={id}
        onChange={e => setId(e.target.value)}
        />
        <button className="button" type="submit">Entrar</button>
        <Link className="back-link" to="/cadastro">
            <FiLogIn size={16} color="#B8860B" />
            Quero me cadastrar
        </Link>
        </form>
        </section>
        <img src={heroesImg} alt="Heroes" />
        </div>
 );
}