/// <reference types="cypress" />

beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('net::ERR_CERT_AUTHORITY_INVALID')) {
      return false; 
    }
    return true;
  });
  cy.acessarSite();
});

it('deve clicar no menu e escolher a opção', () => {

  cy.get('.menu-head > [href="https://bibliotecapcp.zendesk.com/hc/pt-br"]')
  .should('be.visible')
  .click();

});




