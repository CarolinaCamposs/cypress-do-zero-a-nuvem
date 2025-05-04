describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(() => {
    cy.visit('src/index.html')
  })

  it('Verifica o título da aplicação', () => {
    cy.title()
      .should('eq', 'Central de Atendimento ao Cliente TAT')
  })
  Cypress._.times(2, () => {
    it('preenche os campos obrigatórios e envia o formulário', () => {
      cy.clock()
      cy.get('#firstName').type('Carolina')
      cy.get('#lastName').type('Campos')
      cy.get('#email').type('carolina@teste.com')
      cy.get('#open-text-area').type('Escrevendo um texto longo para testar o delay', { delay: 0 })
      cy.contains('button', 'Enviar').click()
      cy.get('.success').should('be.visible')
      cy.tick(3000)
      cy.get('.success').should('not.be.visible')
    })
  })

  it.only('exibe mensagem de errro ao submeter o formulário em um email com formatação inválida', () => {
    cy.clock()
    cy.get('#firstName').type('Carolina')
    cy.get('#lastName').type('Campos')
    cy.get('#email').type('carolinateste.com')
    cy.get('#open-text-area').type('Testando')
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
    cy.tick(3000)
    cy.get('.error').should('not.be.visible')
  })


  it('verifica se o campo telefone fica vazio digitando valor não-numérico', () => {
    cy.get('#phone')
      .type('abc')
      .should('have.value', '')
  })

  it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.clock()
    cy.get('#firstName').type('Carolina')
    cy.get('#lastName').type('Campos')
    cy.get('#email').type('carolina@teste.com')
    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area').type('Escrevendo um texto longo para testar o delay')
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
    cy.tick(3000)
    cy.get('.error').should('not.be.visible')
  })

  it('preenche e limpa os campos nome, sonbrenome, email e telefone', () => {
    cy.get('#firstName')
      .type('Carolina')
      .should('have.value', 'Carolina')
      .clear()
      .should('have.value', '')
    cy.get('#lastName')
      .type('Campos')
      .should('have.value', 'Campos')
      .clear()
      .should('have.value', '')
    cy.get('#email')
      .type('carolina@teste.com')
      .should('have.value', 'carolina@teste.com')
      .clear()
      .should('have.value', '')
    cy.get('#phone')
      .type('991912030')
      .should('have.value', '991912030')
      .clear()
      .should('have.value', '')
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })

  it.only('envia o formuário com sucesso usando um comando customizado1', () => {
    cy.clock()
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')
    cy.tick(3000)
    cy.get('.success').should('not.be.visible')
  })

  it('envia o formuário com sucesso usando um comando customizado2', () => {
    const data = {
      firstName: 'Carol',
      lastName: 'Alves',
      email: 'carolina@teste.com',
      text: 'Teste.'
    }

    cy.fillMandatoryFieldsAndSubmit(data)

    cy.get('.success').should('be.visible')
  })

  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')
  })

  it('seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('#product')
      .select('mentoria')
      .should('have.value', 'mentoria')
  })

  it('seleciona um produto (Blog) por seu índice', () => {
    cy.get('#product')
      .select(1)
      .should('have.value', 'blog')
  })

  it('marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('be.checked')
  })

  it('marca cada tipo de atendimento', () => {
    cy.get('input[type="radio"]')
      .each((supportType) => {
        cy.wrap(supportType)
          .check()
          .should('be.checked')
      })
  })

  it('marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
  })

  it('seleciona um arquivo da pasta fixtures', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

  it('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    cy.fixture('example.json').as('sampleFile')
    cy.get('#file-upload')
      .selectFile('@sampleFile')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'href', 'privacy.html')
      .and('have.attr', 'target', '_blank')
  })

  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click()

    cy.contains('h1', 'CAC TAT - Política de Privacidade')
      .should('be.visible')
  })

})

