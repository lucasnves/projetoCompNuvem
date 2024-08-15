import React, { useState, useEffect } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import '../styles/ClienteList.css';

const ClienteList = () => {
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await api.get('clientes/', {
          params: {
            nome: nome || undefined,
            cpf: cpf || undefined,
          }
        });
        if (Array.isArray(response.data)) {
          setClientes(response.data);
        } else {
          console.error('Resposta da API não é um array:', response.data);
        }
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
    };

    fetchClientes();
  }, [nome, cpf]);

  const handleDelete = async (id) => {
    try {
      await api.delete(`clientes/${id}/`);
      setClientes(clientes.filter(cliente => cliente.id !== id));
    } catch (error) {
      console.error('Erro ao deletar cliente:', error);
    }
  };

  return (
    <div className="cliente-list">
      <h1>Lista de Clientes</h1>
      <div className="cliente-list__top-bar">
        <button className="cliente-list__create-button" onClick={() => navigate('/clientes/criar')}>Cadastrar Novo Cliente</button>
        <div className="cliente-list__search">
          <input
            type="text"
            placeholder="Buscar por nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="Buscar por CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
      </div>
      {clientes.length > 0 ? (
        <ul className="cliente-list__items">
          {clientes.map(cliente => (
            <li key={cliente.id} className="cliente-list__item">
              <div className="cliente-list__details">
                <p><strong>Nome:</strong> {cliente.nome}</p>
                <p><strong>CPF:</strong> {cliente.cpf}</p>
                <p><strong>Email:</strong> {cliente.email}</p>
                <p><strong>Data de Nascimento:</strong> {cliente.data_nascimento}</p>
              </div>
              <div className="cliente-list__actions">
                <button className="cliente-list__button" onClick={() => navigate(`/clientes/editar/${cliente.id}`)}>Editar</button>
                <button className="cliente-list__button" onClick={() => navigate(`/clientes/${cliente.id}`)}>Visualizar</button>
                <button className="cliente-list__button cliente-list__button--delete" onClick={() => handleDelete(cliente.id)}>Deletar</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="cliente-list__empty">Sem clientes cadastrados</p>
      )}
    </div>
  );
};

export default ClienteList;