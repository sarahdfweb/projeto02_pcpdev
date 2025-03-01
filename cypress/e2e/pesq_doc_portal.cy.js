/// <reference types="cypress" />

beforeEach(() => {
  cy.acessarSite();
});

it('deve acessar a página documentação do portal e fazer a pesquisa no campo', () => {
 /*Página com erro  na URL não é possível avançar nos testes desta aba*/
  cy.visit('https://bibliotecapcp.zendesk.com/hc/pt-br/categories/4563001871258-Documenta%C3%A7%C3%A3o-do-Portal');
})


