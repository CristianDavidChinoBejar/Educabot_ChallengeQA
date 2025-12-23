/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command para login
     * @example cy.login('usuario', 'password')
     */
    login(username: string, password: string): Chainable<void>
  }
}