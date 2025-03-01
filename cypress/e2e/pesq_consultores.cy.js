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

it('deve clicar em Sobre, escolher Consultores e pesquisar', () => {

  cy.get('.open').click();
  cy.screenshot('menu-aberto'); 

  cy.get('.submenu-head > [href="/consultores"]')
    .scrollIntoView()
    .should('be.visible')
    .click();
  
  cy.screenshot('pagina-consultores'); 

  cy.url().should('include', '/consultores');

  cy.get('#PesquisaConsultores').type('amado{enter}');
  cy.screenshot('apos-busca-amado'); 
  cy.contains('Amado').should('be.visible');
  cy.screenshot('resultado-amado');
});
