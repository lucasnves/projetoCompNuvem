# Sistema de Cadastro de Clientes

Um sistema de cadastro de clientes é uma ferramenta essencial para empresas, permitindo a modernização dos processos de gestão de informações e automatização de tarefas internas. Este projeto visa o desenvolvimento de um sistema de CRUD (Create, Read, Update, Delete) para gerenciar o cadastro de clientes de uma empresa, seguindo uma série de requisitos funcionais e técnicos.

## Funcionalidades

O sistema permite a realização das seguintes operações:

- **Cadastrar um novo cliente**: Insere um novo cliente no banco de dados.
- **Alterar dados de um cliente existente**: Atualiza as informações de um cliente cadastrado.
- **Excluir um cliente existente**: Remove um cliente do sistema.
- **Buscar um cliente pelo nome e/ou CPF**: Realiza pesquisas filtradas no banco de dados.
- **Listar todos os clientes cadastrados**: Exibe uma lista completa dos clientes registrados.

## Campos dos Clientes

As informações básicas armazenadas para cada cliente são:

- **Nome**
- **CPF**
- **Data de nascimento**
- **E-mail**

## Requisitos Técnicos

O projeto atende aos seguintes requisitos:

- **Armazenamento**: As informações dos clientes são armazenadas em uma instância de banco de dados relacional (Amazon RDS).
- **Segurança de Rede**: A instância do banco de dados está em uma rede virtual privada (VPC), acessível apenas pela instância do servidor web (Amazon EC2).
- **Interface Web**: O sistema possui uma interface web, hospedada em uma máquina virtual (Amazon EC2).
- **Alternativas de Infraestrutura**: Caso a AWS não seja usada, os mesmos requisitos são atendidos utilizando serviços equivalentes.

## Tecnologias Utilizadas

- **Backend**: Django (Python)
- **Frontend**: React (JavaScript)
- **Banco de Dados**: PostgreSQL (Amazon RDS)
- **Hospedagem**: Amazon EC2
- **API**: Django REST Framework

## Estrutura do Projeto

```bash
├── backend/
│   ├── clientes/
│   ├── manage.py
│   └── ...
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
└── README.md
```

## Como Executar o Projeto

### Pré-requisitos

- Python 3.x
- Node.js
- PostgreSQL

### Backend

1. Navegue até a pasta `backend/` e crie um ambiente virtual:
   ```bash
   python3 -m venv env
   source env/bin/activate
   ```
2. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```
3. Execute as migrações e inicie o servidor:
   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

### Frontend

1. Navegue até a pasta `frontend/` e instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

### Deployment na AWS

1. Crie e configure uma instância EC2.
2. Configure uma instância RDS para o banco de dados.
3. Implemente as configurações de rede para garantir que a EC2 tenha acesso à RDS.
