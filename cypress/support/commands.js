
// Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
//     cy.get('#firstName').type('Carol')
//     cy.get('#lastName').type('Campos')
//     cy.get('#email').type('carolina@teste.com')
//     cy.get('#open-text-area').type('Testando comando customizado')
//       cy.contains('button', 'Enviar').click()
// })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'Ana',
    lastName: 'Silva',
    email: 'ana@teste.com',
    text: 'Teste'
})=> {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.contains('button', 'Enviar').click()
})

