/// <reference types="cypress" />

beforeEach(() => {
    
    cy.acessarSite();
  });
  
  it('deve realizar a pesquisa de processos', () => {
   
    cy.get('#objeto').type('Concorrência - Técnica e Preço');
    cy.get('#processo').type('271022-1');
    cy.get('#orgao').type('Luiz');
    cy.get('.btn-pesquisa-p').click();
  
    
    cy.contains('271022-1').should('be.visible');

    cy.get(':nth-child(1) > .aside-item > .btn-default')
    .should('have.length.greaterThan', 0); 
});
  