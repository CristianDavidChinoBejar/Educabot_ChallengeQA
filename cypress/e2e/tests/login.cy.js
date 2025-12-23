/// <reference types="cypress" />

import loginPage from '../pages/loginPage'
import tests from "../../fixtures/login.json";

describe('Validación del login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  tests.forEach(test => {
    it(test.name, () => {
      loginPage.typeUsername(test.userName)
      loginPage.typePassword(test.password)
      loginPage.clickLoginButton()

    if (test.type === "success") {
      cy.url().should('include', test.expected)
    } else if (test.type === "error") {
      loginPage.elements.errorMessage()
        .should('be.visible')
        .and('have.text', test.expected)
      }
    })
  })
}) 