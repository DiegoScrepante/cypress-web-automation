//<reference types="cypress"/>

//const cypressConfig = require("../../cypress.config")

// Funcinalidade
describe('Login', () => {

  // Cenario 1
  it('Login com sucesso', () => {
    // abre o app
    cy.visit('https://automationpratice.com.br/login')
    cy.wait(1000) //- tempo para carregar
    // preenche o email
    cy.get('#user').type('test@example.com')
    // preenche a senha
    cy.get('#password').type('123456')
    cy.wait(1000) //- tempo para carregar
    // clica no botao de login
    cy.get('#btnLogin').click()
    //valida se o login foi bem sucedido
    cy.get('#swal2-title').should('have.text', 'Login realizado')
    cy.wait(1000)
  })
  
  // Cenario 2
  it('Login com senha invalido', () => {
    // abre o app
    cy.visit('https://automationpratice.com.br/login')
    cy.wait(1000)
    // preenche o email
    cy.get('#user').type('test@example.com')
    // preenche a senha
    cy.get('#password').type('6543')
    cy.wait(1000)
    // clica no botao de login
    cy.get('#btnLogin').click()
    // valida se a senha é invalida
    cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    cy.wait(1000)
  })

  //Cenario 3
  it('Login com e-mail ivalido', () => {
    // abre o app
    cy.visit('https://automationpratice.com.br/login')
    cy.wait(1000)
    // preenche o email
    cy.get('#user').type('testexample.com')
    // preenche a senha
    cy.get('#password').type('123456')
    cy.wait(1000)
    // clica no botao de login
    cy.get('#btnLogin').click()
    // valida se o e-mail é invalido
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    cy.wait(1000)
  })
})