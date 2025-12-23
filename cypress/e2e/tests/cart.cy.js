/// <reference types="cypress" />

import CartPage from '../pages/cartPage'

describe('Validación del carrito de compras', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fixture('users').then((user) => {
      const standardUser = user.standard;
      cy.login(standardUser.username, standardUser.password);
    })

    CartPage.clickAddToCartSauceLabsBackpack()
    CartPage.elements.cartIcon().should('have.text', '1')
    CartPage.clickCartIcon()
  })

  it('Validar que un producto se agregue correctamente', () => {
    CartPage.elements.inventoryItem().should('have.length', 1)
  });

  it('Verificar que se elimina el único producto en el carrito', () => {
    CartPage.clickRemoveItemButton()
    CartPage.elements.inventoryItem().should('have.length', 0)
  });

  it('Verificar que los productos permanezcan en el carrito luego de hacer un refresh a la página', () => {
    cy.reload()
    CartPage.elements.inventoryItem().should('have.length', 1)
  });
}) 