/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://www.wikipedia.org/')
    cy.get('#js-link-box-en > strong').click();
  })

  it('Verify the Login button is visible', () => {
    cy.get('#pt-login-2 > a > span').should('be.visible');
  })

  it('Verify the Create Account button is visible', () => {
    cy.get('#pt-createaccount-2 > a > span').should('be.visible');

  })

  it('Verify the Vector user links dropdown is visible', () => {
    cy.get('#vector-user-links-dropdown').should('be.visible');
  })
})