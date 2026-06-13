class LoginPage {

  acessarLogin() {
    cy.visit('https://automationpratice.com.br/login')
  }

  preencherEmail(email) {
    cy.get('#user').type(email)
  }

  preencherSenha(senha) {
    cy.get('#password').type(senha)
  }

  clicarBotaoLogin() {
    cy.get('#btnLogin').click()
  }

  validarLoginRealizado() {
    cy.get('#swal2-title').should('have.text', 'Login realizado')
  }

  validarMensagemErro() {
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
  }

}  
export default new LoginPage()