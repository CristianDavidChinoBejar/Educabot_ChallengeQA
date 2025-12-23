/// <reference types="cypress" />

import cartPage from '../pages/cartPage'

describe('Validación del carrito de compras', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fixture('users').then((user) => {
      const standardUser = user.standard;
      cy.login(standardUser.username, standardUser.password);
    })

    cartPage.clickAddToCartSauceLabsBackpack()
    cartPage.elements.cartIcon().should('have.text', '1')
    cartPage.clickCartIcon()
  })

  context('Agregar productos al carrito', () => {
    it('Validar que un producto se agregue correctamente', () => {
      cartPage.elements.inventoryItem().should('have.length', 1)
    });

    it('Verificar que se pueda continuar comprando desde el carrito de compras', () => {
      cartPage.clickContinueShoppingButton()
      cy.url().should('include', 'inventory.html')
      cartPage.clickAddToCartSauceLabsBikeLight()
      cartPage.elements.cartIcon().should('have.text', '2')
    });
  })

  context('Eliminar productos del carrito', () => {
    it('Verificar que se elimina el único producto en el carrito', () => {
      cartPage.clickRemoveItemButton()
      cartPage.elements.inventoryItem().should('have.length', 0)
    });
  })

  context('Navegación', () => {
    it('Verificar que los productos permanezcan en el carrito luego de hacer un refresh a la página', () => {
      cy.reload()
      cartPage.elements.inventoryItem().should('have.length', 1)
    });

    it('Verificar redirección al Checkout inicial', () => {
      cartPage.clickCheckoutButton()
      cy.url().should('include', 'checkout-step-one.html')
    });
  })
}) 