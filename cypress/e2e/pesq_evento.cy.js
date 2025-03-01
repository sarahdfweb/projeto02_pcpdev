/// <reference types="cypress" />

beforeEach(() => {
  cy.acessarSite();
});

it('deve acessar a página Aprenda e fazer a pesquisa no campo', () => {
 
  cy.visit('/aprenda');


  cy.url().should('include', '/aprenda');


  cy.get('#campoPesquisa').type('Eventos{enter}');

  cy.get(':nth-child(5) > .container > .title')
    .should('be.visible')
    .and('contain', 'Eventos'); 
});
