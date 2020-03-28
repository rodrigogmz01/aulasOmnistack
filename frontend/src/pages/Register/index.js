import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';

import logoImg from '../../assets/logo.png'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsApp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try { 
            const response = await api.post('ongs', data);

            alert(`Seu ID de acesso: ${response.data.id}`);
            
            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, favor tentar novamente!');
        }
    
    }
    
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="RBB Consultoria"/>
                    <h1>Cadastro</h1>
                    <p>Realize seu cadastro, entre na plataforma e fique antenado em todas as nossas novidades.</p>
                    
                    <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#B8860B" />
                    Pagina inicial
                    </Link>

                </section>
            <form onSubmit={handleRegister}>
            <input placeholder="Nome Completo" 
            value={name}
            onChange={e => setName(e.target.value)}
            />

            <input type="email" placeholder="E-mail"
             value={email}
             onChange={e => setEmail(e.target.value)}
            />

            <input placeholder="WhatsApp"
             value={whatsapp}
             onChange={e => setWhatsApp(e.target.value)}
            />
            <div className="input-group">
                <input placeholder="Cidade" 
                 value={city}
                 onChange={e => setCity(e.target.value)}
                />
                
                <input placeholder="UF" style={ { width: 80 } }
                 value={uf}
                 onChange={e => setUf(e.target.value)}
                />
            </div>
            <button className="button" type="submit"> Cadastrar </button>
            </form>
            </div>
        </div>

    );
}