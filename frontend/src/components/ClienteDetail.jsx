import React, { useState, useEffect } from 'react';
import api from '../api';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ClienteDetail.css';

const ClienteDetail = () => {
  const { id } = useParams();
  const [cliente, setCliente] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        const response = await api.get(`clientes/${id}/`);
        setCliente(response.data);
      } catch (error) {
        console.error('Erro ao buscar cliente:', error);
      }
    };

    fetchCliente();
  }, [id]);

  const handleDelete = async () => {
    try {
      await api.delete(`clientes/${id}/`);
      navigate('/');
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
    }
  };

  if (!cliente) return <div className="cliente-detail__loading">Carregando...</div>;

  return (
    <div className="cliente-detail">
      <h1>Detalhes do Cliente</h1>
      <div className="cliente-detail__info">
        <p><strong>Nome:</strong> {cliente.nome}</p>
        <p><strong>CPF:</strong> {cliente.cpf}</p>
        <p><strong>Data de Nascimento:</strong> {cliente.data_nascimento}</p>
        <p><strong>Email:</strong> {cliente.email}</p>
      </div>
      <div className="cliente-detail__actions">
        <button className="cliente-detail__button cliente-detail__button--delete" onClick={handleDelete}>Excluir Cliente</button>
        <button className="cliente-detail__button cliente-detail__button--back" onClick={() => navigate('/')}>Voltar</button>
      </div>
    </div>
  );
};

export default ClienteDetail;