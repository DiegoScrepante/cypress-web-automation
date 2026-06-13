import LoginPage from "../pages/LoginPage";
//Validcao de login utilizando fixture para carregar os dados de um usuário válido. 
// O teste acessa a página de login, preenche os campos de email e senha com os dados do usuário, clica no botão de login e valida se o login foi realizado com sucesso.
describe('Login', () => {

  it('Login com usuario valido', () => {
    
    cy.fixture('usuarioValido').then((usuario) => { 

      LoginPage.acessarLogin()

      LoginPage.preencherEmail(usuario.email)
      LoginPage.preencherSenha(usuario.senha)

      LoginPage.clicarBotaoLogin()

      LoginPage.validarLoginRealizado()
    })   
  
  })  
  

  it('Login com senha invalida', () => {

    cy.fixture('senhaInvalida').then((usuario) => {

      LoginPage.acessarLogin()

      LoginPage.preencherEmail(usuario.email)
      LoginPage.preencherSenha(usuario.senha)

      LoginPage.clicarBotaoLogin()


    })
  })  

  it('Login com email invalido', () => {

    cy.fixture('emailInvalido').then((usuario) => {

      LoginPage.acessarLogin()

      LoginPage.preencherEmail(usuario.email)
      LoginPage.preencherSenha(usuario.senha)

      LoginPage.clicarBotaoLogin()

      LoginPage.validarMensagemErro('E-mail inválido.')

    })    
  })       

})