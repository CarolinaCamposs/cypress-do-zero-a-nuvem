# Testes Automatizados com Cypress

Este repositório contém a automação de testes da aplicação fictícia "Central de Atendimento ao Cliente TAT", desenvolvida como parte do curso da **Escola Talking About Testing**. Os testes foram escritos com Cypress e cobrem cenários de formulários, seleção de produtos, interações com checkboxes e radio buttons, upload de arquivos e comportamento de links externos.

## 📋 Pré-requisitos

Antes de iniciar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão recomendada: LTS)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node)
- [Git](https://git-scm.com/) (para clonar o repositório)

## 🛠️ Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/CarolinaCamposs/cypress-do-zero-a-nuvem.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd cypress-do-zero-a-nuvem
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## ▶️ Como rodar os testes

### Cypress Runner (modo interativo)
Para abrir a interface gráfica do Cypress:

```bash
npx cypress open
```

Escolha o navegador e clique no arquivo de teste desejado.

### Simular viewport de dispositivo móvel

```bash
npm run cy:mobile
```

## Funcionalidades testadas

- Preenchimento de campos obrigatórios e envio de formulário
- Validação de campos com erros
- Uso de comandos customizados para otimizar a escrita de testes
- Seleção de produtos via combobox
- Interações com radio buttons e checkboxes
- Upload de arquivos com selectFile, incluindo drag-and-drop e alias de fixture
- Testes com verificação e manipulação de atributos de links
- Simulação de diferentes tamanhos de tela (viewport)

---

> Este é um curso da **Escola Talking About Testing**.
