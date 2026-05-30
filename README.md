# Pedidos Veloz — Plataforma de Microsserviços com Docker, Kubernetes e Observabilidade

## 📌 Sobre o Projeto

O projeto **Pedidos Veloz** foi desenvolvido como uma solução cloud-native baseada em microsserviços para uma empresa fictícia de e-commerce chamada **Loja Veloz**.

O objetivo principal foi modernizar a infraestrutura da aplicação, automatizando deploys, melhorando escalabilidade, reduzindo riscos em produção e implementando observabilidade completa.

---

#  Objetivos do Projeto

- Padronizar ambiente de desenvolvimento
- Implementar microsserviços containerizados
- Automatizar execução com Docker Compose
- Orquestrar serviços com Kubernetes
- Criar pipeline CI/CD com GitHub Actions
- Implementar observabilidade com Prometheus e Grafana
- Melhorar escalabilidade e disponibilidade da aplicação

---

# Arquitetura da Aplicação

```txt
                 ┌──────────────┐
                 │   Gateway    │
                 └──────┬───────┘
                        │
        ┌───────────────┼────────────────┐
        │               │                │
        ▼               ▼                ▼
┌────────────┐  ┌────────────┐  ┌────────────┐
│ Pedidos    │  │ Estoque    │  │ Pagamentos │
│ Service    │  │ Service    │  │ Service    │
└─────┬──────┘  └─────┬──────┘  └────────────┘
      │               │
      ▼               ▼
┌────────────┐  ┌────────────┐
│ PostgreSQL │  │ RabbitMQ   │
└────────────┘  └────────────┘
```

---

# ⚙️ Tecnologias Utilizadas

## Backend
- Node.js
- Express.js

## Banco de Dados
- PostgreSQL

## Mensageria
- RabbitMQ

## Containerização
- Docker
- Docker Compose

## Orquestração
- Kubernetes

## CI/CD
- GitHub Actions

## Observabilidade
- Prometheus
- Grafana

---

# 📁 Estrutura do Projeto

```txt
pedidos-veloz/
│
├── gateway/
├── pedidos-service/
├── estoque-service/
├── pagamentos-service/
│
├── k8s/
│   ├── pedidos-deployment.yaml
│   ├── postgres-deployment.yaml
│   ├── configmap.yaml
│   └── secret.yaml
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── docker-compose.yml
├── prometheus.yml
└── README.md
```

---

# 🐳 Executando com Docker Compose

## Pré-requisitos

- Docker Desktop
- Git
- Node.js (opcional)

---

## Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/pedidos-veloz-kubernetes.git
```

---

## Acesse o projeto

```bash
cd pedidos-veloz-kubernetes
```

---

## Execute os containers

```bash
docker compose up --build
```

---

# 🌐 Serviços Disponíveis

| Serviço | Porta |
|---|---|
| Gateway | 3001 |
| Pedidos Service | 3000 |
| PostgreSQL | 5432 |
| RabbitMQ | 15672 |
| Prometheus | 9090 |
| Grafana | 3002 |

---

# ☸️ Kubernetes

O projeto também possui configuração para execução em Kubernetes.

---

## Aplicar os manifests

```bash
kubectl apply -f k8s/
```

---

## Verificar pods

```bash
kubectl get pods
```

---

## Verificar services

```bash
kubectl get services
```

---

# 🔄 CI/CD com GitHub Actions

O projeto utiliza GitHub Actions para integração contínua.

A pipeline executa automaticamente:

- Instalação de dependências
- Validação dos microsserviços
- Build automatizado
- Verificação do ambiente

Arquivo da pipeline:

```txt
.github/workflows/ci.yml
```

---

# 📊 Observabilidade

## Prometheus

O Prometheus foi utilizado para coleta de métricas e monitoramento dos serviços.

Acesso:

```txt
http://localhost:9090
```

---

## Grafana

O Grafana foi utilizado para criação de dashboards e visualização das métricas coletadas pelo Prometheus.

Acesso:

```txt
http://localhost:3002
```

Login padrão:

```txt
Usuário: admin
Senha: admin
```

---

# 🔐 Segurança

O projeto utiliza:

- ConfigMaps
- Secrets
- Variáveis de ambiente
- Isolamento via containers
- Kubernetes Deployments

---

# 🚀 Escalabilidade

A aplicação foi preparada para ambientes escaláveis utilizando Kubernetes.

Características implementadas:

- Deployments
- Containers independentes
- Microsserviços desacoplados
- Estrutura compatível com HPA (Horizontal Pod Autoscaler)

---

# 📸 Evidências do Projeto

Foram realizados testes e validações utilizando:

- Docker Compose
- Kubernetes
- Prometheus
- Grafana
- GitHub Actions

As evidências incluem:

- Pods em execução
- Serviços ativos
- Pipeline CI/CD validada
- Dashboards de observabilidade
- Targets do Prometheus em estado UP

---

# 📚 Conceitos Aplicados

- Cloud Native
- DevOps
- Microsserviços
- Conteinerização
- Orquestração
- Observabilidade
- Integração Contínua
- Entrega Contínua
- Escalabilidade
- Infraestrutura como Código

---

# 👨‍💻 Autor

Projeto desenvolvido para fins acadêmicos na disciplina de Cloud DevOps e Microsserviços.

Aluno: Gabriel Ferreira

---

# ✅ Conclusão

O projeto Pedidos Veloz demonstrou a implementação de uma arquitetura moderna baseada em microsserviços utilizando práticas DevOps.

A solução proposta permitiu:

- maior automação
- melhor escalabilidade
- deploys mais seguros
- observabilidade da aplicação
- padronização do ambiente

resultando em uma aplicação mais confiável e preparada para crescimento.
