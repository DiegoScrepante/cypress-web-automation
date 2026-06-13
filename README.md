# cypress-web-automation

Projeto de automação de testes End-to-End (E2E) desenvolvido com Cypress e JavaScript, aplicando boas práticas de automação como Page Object Model (POM) e Fixtures.

## Objetivo

Este projeto foi criado para praticar e demonstrar conhecimentos em:

- Automação de testes E2E
- Cypress
- JavaScript
- Page Object Model (POM)
- Fixtures
- Git e GitHub
- Boas práticas de QA Automation

---

## Tecnologias Utilizadas

- Cypress
- JavaScript
- Node.js
- Git
- GitHub

---

## Estrutura do Projeto

```text
cypress
├── e2e
│   └── login.cy.js
│
├── fixtures
│   ├── usuarioValido.json
│   ├── senhaInvalida.json
│   └── emailInvalido.json
│
├── pages
│   └── LoginPage.js
│
├── support
│   ├── commands.js
│   └── e2e.js
│
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Cenários Automatizados

### Login com usuário válido

**Objetivo:**
Validar o acesso ao sistema utilizando credenciais válidas.

**Validações:**

- Preenchimento de e-mail
- Preenchimento de senha
- Clique no botão de login
- Confirmação de login realizado com sucesso

---

### Login com senha inválida

**Objetivo:**
Validar o comportamento do sistema ao receber uma senha incorreta.

**Validações:**

- Exibição da mensagem de erro para senha inválida

---

### Login com e-mail inválido

**Objetivo:**
Validar o comportamento do sistema ao receber um e-mail em formato inválido.

**Validações:**

- Exibição da mensagem de erro para e-mail inválido

---

## Padrões Aplicados

### Page Object Model (POM)

Os elementos e ações da página foram centralizados na classe:

```text
cypress/pages/LoginPage.js
```

Benefícios:

- Reutilização de código
- Melhor manutenção
- Menor duplicação de comandos

---

### Fixtures

Os dados de teste foram separados dos cenários:

```text
cypress/fixtures/
```

Arquivos utilizados:

- usuarioValido.json
- senhaInvalida.json
- emailInvalido.json

Benefícios:

- Organização dos dados
- Facilidade de manutenção
- Reutilização em múltiplos testes

---

## Como Executar o Projeto

### Clonar o repositório

```bash
git clone https://github.com/DiegoScrepante/cypress-web-automation.git
```

### Acessar a pasta

```bash
cd cypress-web-automation
```

### Instalar dependências

```bash
npm install
```

### Executar o Cypress

```bash
npx cypress open
```

### Executar em modo Headless

```bash
npx cypress run
```

---

## Melhorias Futuras

- [ ] Custom Commands
- [ ] GitHub Actions (CI/CD)
- [ ] Relatórios automatizados
- [ ] Testes de API
- [ ] Massa de dados dinâmica
- [ ] Integração contínua

---

## Autor

### Diego Screpante

QA Automation | Cypress | JavaScript | Git | Testes Manuais e Automatizados

GitHub:
https://github.com/DiegoScrepante

LinkedIn:
https://www.linkedin.com/in/diego-screpante-51a3202a6

---

## Status do Projeto

🚀 Em desenvolvimento e recebendo novas implementações de automação de testes.