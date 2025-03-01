/// <reference types="cypress" />

beforeEach(() => {
  cy.acessarSite();
});

it('deve acessar a página Trabalhe Conosco e buscar vagas de QA', () => {
 
  cy.visit('https://portaldecompraspublicas.vagas.solides.com.br/');
  cy.screenshot('pagina-inicial-trabalhe-conosco'); 
  cy.get('.placeholder\\:text-font-color-disabled')
    .should('be.visible')
    .type('QA');

  cy.contains('Buscar vaga').click();
  cy.screenshot('apos-busca-QA'); 
  cy.get(':nth-child(1) > .leading-5 > a')
    .should('be.visible')
    .and('have.attr', 'href');
  cy.screenshot('vaga-encontrada'); 
});

  
  


