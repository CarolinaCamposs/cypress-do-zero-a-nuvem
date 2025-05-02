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

## 🧪 Funcionalidades testadas

- Verificar título da aplicação
- Preencher e limpar campos de formulário
- Validar mensagens de sucesso e erro
- Validar formatos inválidos de e-mail e telefone
- Validar campos obrigatórios e condicionais
- Usar comandos customizados (Cypress.Commands.add)
- Testes com elementos <select> (combobox)
    - Seleção de opções por texto visível
    - Seleção por atributo value
    - Seleção por índice
- Testes com campos do tipo radio e checkbox
    - Marcação de cada tipo de atendimento usando .check() e .each()
    - Marcação e desmarcação de checkboxes com .check() e .uncheck()
- Selecionar arquivos com .selectFile(), inclusive usando:
    - Caminho direto da fixture
    - Simulação de drag and drop
    - Fixture com alias
- Validar abertura de links em nova aba e navegar programaticamente
- Simular diferentes tamanhos de viewport (como dispositivos móveis)

---

> Este é um curso da **Escola Talking About Testing**.