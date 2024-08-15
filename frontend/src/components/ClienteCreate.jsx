import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import '../styles/ClienteCreate.css';

const ClienteCreate = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError(null);

    try {
      await api.post('clientes/', {
        nome,
        cpf,
        data_nascimento: dataNascimento,
        email
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      navigate('/');
    } catch (error) {
      console.error('Erro ao criar cliente:', error);
      setError('Ocorreu um erro ao criar o cliente. Verifique os dados e tente novamente.');
    }
  };

  return (
    <div className="cliente-create">
      <h1>Cadastrar Novo Cliente</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="cliente-create__form">
        <label>
          Nome:
          <input 
            type="text" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            required 
          />
        </label>
        <label>
          CPF:
          <input 
            type="text" 
            value={cpf} 
            onChange={(e) => setCpf(e.target.value)} 
            required 
          />
        </label>
        <label>
          Data de Nascimento:
          <input 
            type="date" 
            value={dataNascimento} 
            onChange={(e) => setDataNascimento(e.target.value)} 
            required 
          />
        </label>
        <label>
          Email:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
        <button type="submit" className="cliente-create__button">Cadastrar</button>
        <button type="button" className="cliente-create__button cliente-create__button--back" onClick={() => navigate('/')}>Voltar para a Página Inicial</button>
      </form>
    </div>
  );
};

export default ClienteCreate;