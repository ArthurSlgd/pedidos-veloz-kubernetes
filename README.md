# Pedidos Veloz – Microsserviços com Docker, PostgreSQL, RabbitMQ e Kubernetes

## 📌 Sobre o Projeto

O projeto **Pedidos Veloz** foi desenvolvido com o objetivo de demonstrar a implementação de uma arquitetura baseada em microsserviços utilizando tecnologias modernas de conteinerização, persistência de dados e mensageria.

A aplicação permite o cadastro e consulta de pedidos, armazenando os dados em um banco PostgreSQL e enviando mensagens para uma fila RabbitMQ, simulando um ambiente corporativo de processamento assíncrono.

---

## 🎯 Objetivos

* Implementar uma arquitetura baseada em microsserviços;
* Utilizar Docker para conteinerização da aplicação;
* Orquestrar serviços utilizando Docker Compose;
* Utilizar PostgreSQL para persistência de dados;
* Implementar comunicação assíncrona utilizando RabbitMQ;
* Executar serviços em ambiente Kubernetes;
* Aplicar conceitos de Cloud Computing e DevOps.

---

## 🏗 Arquitetura da Solução

```text
                 ┌─────────────┐
                 │   Gateway   │
                 └──────┬──────┘
                        │
                        ▼
                ┌─────────────┐
                │   Pedidos   │
                │   Service   │
                └──────┬──────┘
                       │
          ┌────────────┴────────────┐
          ▼                         ▼
   ┌─────────────┐          ┌─────────────┐
   │ PostgreSQL  │          │  RabbitMQ   │
   └─────────────┘          └─────────────┘
```

---

## ⚙️ Tecnologias Utilizadas

### Backend

* Node.js
* Express.js

### Banco de Dados

* PostgreSQL 16

### Mensageria

* RabbitMQ

### Conteinerização

* Docker
* Docker Compose

### Orquestração

* Kubernetes

### Controle de Versão

* Git
* GitHub

---

## 📁 Estrutura do Projeto

```text
pedidos-veloz-kubernetes/

├── gateway/
│
├── pedidos-service/
│   ├── src/
│   │   ├── database/
│   │   ├── models/
│   │   └── rabbitmq/
│   │
│   └── index.js
│
├── kubernetes/
│
├── docker-compose.yml
│
└── README.md
```

---

## 🐳 Executando com Docker Compose

### Pré-requisitos

* Docker Desktop
* Git

### Clonar o projeto

```bash
git clone https://github.com/ArthurSlgd/pedidos-veloz-kubernetes.git
```

### Acessar a pasta

```bash
cd pedidos-veloz-kubernetes
```

### Executar os containers

```bash
docker compose up -d
```

### Verificar containers

```bash
docker ps
```

---

## 🌐 Serviços Disponíveis

| Serviço             | Porta |
| ------------------- | ----- |
| Gateway             | 3000  |
| Pedidos Service     | 3001  |
| PostgreSQL          | 5432  |
| RabbitMQ Management | 15672 |
| RabbitMQ AMQP       | 5672  |

---

## 🧪 Testes Realizados

### Criar Pedido

Endpoint:

```http
POST http://localhost:3001/pedido
```

Body:

```json
{
  "produto": "Mouse",
  "quantidade": 3
}
```

Resposta esperada:

```json
{
  "id": 1,
  "produto": "Mouse",
  "quantidade": 3
}
```

---

### Consultar Pedidos

Endpoint:

```http
GET http://localhost:3001
```

Resposta:

```json
[
  {
    "id": 1,
    "produto": "Mouse",
    "quantidade": 3
  }
]
```

---

## 🐘 Banco de Dados PostgreSQL

A aplicação utiliza PostgreSQL para armazenamento persistente dos pedidos.

Tabela criada automaticamente pelo Sequelize:

```sql
Pedidos
```

Exemplo de consulta:

```sql
SELECT * FROM "Pedidos";
```

---

## 📨 RabbitMQ

O RabbitMQ é utilizado para processamento assíncrono dos pedidos cadastrados.

Painel administrativo:

```text
http://localhost:15672
```

Credenciais padrão:

```text
Usuário: guest
Senha: guest
```

Fila utilizada:

```text
pedidos
```

---

## ☸️ Kubernetes

O projeto também contempla a execução de workloads em Kubernetes.

Comandos utilizados:

```bash
kubectl apply -f .
```

Verificar pods:

```bash
kubectl get pods
```

Verificar deployments:

```bash
kubectl get deployments
```

Verificar serviços:

```bash
kubectl get services
```

---

## 📸 Evidências

Durante a execução do projeto foram coletadas evidências referentes a:

* Containers Docker em execução;
* Serviços ativos no Docker Compose;
* Criação de pedidos via API;
* Persistência dos dados no PostgreSQL;
* Mensagens enviadas ao RabbitMQ;
* Execução dos pods Kubernetes;
* Testes funcionais dos endpoints.

---

## 📚 Conceitos Aplicados

* Microsserviços
* Docker
* Docker Compose
* Kubernetes
* Banco de Dados Relacional
* Mensageria
* Persistência de Dados
* APIs REST
* Cloud Computing
* DevOps

---

## 👨‍💻 Autor

Arthur Salgado

Projeto desenvolvido para fins acadêmicos na disciplina de Cloud, DevOps e Microsserviços.

---

## ✅ Conclusão

O projeto demonstrou a aplicação prática de conceitos modernos de desenvolvimento e infraestrutura, utilizando microsserviços, conteinerização e mensageria.

Foi possível implementar uma solução funcional capaz de registrar pedidos, persistir informações em banco de dados e realizar comunicação assíncrona através de filas, simulando uma arquitetura utilizada em ambientes corporativos.
