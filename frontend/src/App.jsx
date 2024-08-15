import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClienteList from './components/ClienteList';
import ClienteCreate from './components/ClienteCreate';
import ClienteEdit from './components/ClienteEdit';
import ClienteDetail from './components/ClienteDetail';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<ClienteList />} />
          <Route path="/clientes/criar" element={<ClienteCreate />} />
          <Route path="/clientes/editar/:id" element={<ClienteEdit />} />
          <Route path="/clientes/:id" element={<ClienteDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;