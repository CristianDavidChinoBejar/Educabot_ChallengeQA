class CartPage {
    elements = {
        addToCartSauceLabsBackpackButton: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        addToCartSauceLabsBikeLight: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
        cartIcon: () => cy.get('[data-test="shopping-cart-badge"]'),
        inventoryItem: () => cy.get('[data-test="inventory-item"]'),
        removeItemButton: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
        continueShoppingButton: () => cy.get('[data-test="continue-shopping"]'),
        checkoutButton: () => cy.get('[data-test="checkout"]')
    }

    clickAddToCartSauceLabsBackpack() {
        this.elements.addToCartSauceLabsBackpackButton().click();
    }

    clickAddToCartSauceLabsBikeLight() {
        this.elements.addToCartSauceLabsBikeLight().click();
    }

    clickCartIcon() {
        this.elements.cartIcon().click();
    }

    clickRemoveItemButton() {
        this.elements.removeItemButton().click();
    }

    clickContinueShoppingButton() {
        this.elements.continueShoppingButton().click();
    }
    clickCheckoutButton() {
        this.elements.checkoutButton().click();
    }
}

module.exports = new CartPage();