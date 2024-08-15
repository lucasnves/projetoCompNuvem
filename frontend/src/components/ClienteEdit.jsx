import React, { useState, useEffect } from 'react';
import api from '../api';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ClienteEdit.css';

const ClienteEdit = () => {
  const { id } = useParams();
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        const response = await api.get(`clientes/${id}/`);
        const cliente = response.data;
        setNome(cliente.nome);
        setCpf(cliente.cpf);
        setDataNascimento(cliente.data_nascimento);
        setEmail(cliente.email);
      } catch (error) {
        console.error('Erro ao buscar cliente:', error);
      }
    };

    fetchCliente();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      await api.put(`clientes/${id}/`, { nome, cpf, data_nascimento: dataNascimento, email });
      navigate('/');
    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
      setError('Ocorreu um erro ao atualizar o cliente. Verifique os dados e tente novamente.');
    }
  };

  return (
    <div className="cliente-edit">
      <h1>Editar Cliente</h1>
      {error && <p className="cliente-edit__error">{error}</p>}
      <form onSubmit={handleSubmit} className="cliente-edit__form">
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div>
          <label>CPF:</label>
          <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
        </div>
        <div>
          <label>Data de Nascimento:</label>
          <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="cliente-edit__actions">
          <button type="submit" className="cliente-edit__button">Atualizar</button>
          <button type="button" className="cliente-edit__button cliente-edit__button--back" onClick={() => navigate('/')}>Voltar</button>
        </div>
      </form>
    </div>
  );
};

export default ClienteEdit;