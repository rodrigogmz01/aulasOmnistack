import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png'


export default function NewIncident() {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [value, setValue] = useState('');

const history = useHistory();

const ongId = localStorage.getItem('ongId');

async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
        title,
        description,
        value,
    };

try {
    await api.post('incidents', data, {
        headers: {
            Autorization: ongId,
        }
    })

    history.push('/profile');
} catch (err) {
    alert('Erro ao cadastrar caso, por favor tente novamente.');
}

}
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="RBB Consultoria"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrarmos a solucao!</p>
                    
                    <Link className="back-link" to="/Profile">
                    <FiArrowLeft size={16} color="#B8860B" />
                    Pagina inicial
                    </Link>

                </section>
            <form onSubmit={handleNewIncident}>
                <input 
                placeholder="Titulo do caso" 
                value={title}
                onChange={e =>setTitle(e.target.value)}
                />

                <textarea 
                placeholder="Descricao"
                value={description}
                onChange={e =>setDescription(e.target.value)}
                />
            
                <input 
                placeholder="Valor em Reais" 
                value={value}
                onChange={e =>setValue(e.target.value)}
                />

                            
            <button className="button" type="submit"> Cadastrar </button>
            </form>
            </div>
        </div>
    );
}