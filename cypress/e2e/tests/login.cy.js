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

    switch (test.name) {
      case "Verificar Login exitoso con credenciales válidas":
        cy.url().should('include', test.expected)
        break;

      case "Verificar Login erroneo con usuario inválido":
        loginPage.elements.errorMessage()
          .should('be.visible')
          .and('have.text', test.expected)
        break;

      case "Verificar Login con user bloqueado":
        loginPage.elements.errorMessage()
          .should('be.visible')
          .and('have.text', test.expected)
        break;
      }
    })
  })
}) 