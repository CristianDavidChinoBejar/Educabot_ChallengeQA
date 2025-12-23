class CartPage {
    elements = {
        addToCartSauceLabsBackpackButton: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        cartIcon: () => cy.get('[data-test="shopping-cart-badge"]'),
        inventoryItem: () => cy.get('[data-test="inventory-item"]'),
        removeItemButton: () => cy.get('[data-test="remove-sauce-labs-backpack"]')
    }

    clickAddToCartSauceLabsBackpack() {
        this.elements.addToCartSauceLabsBackpackButton().click();
    }

    clickCartIcon() {
        this.elements.cartIcon().click();
    }

    clickRemoveItemButton() {
        this.elements.removeItemButton().click();
    }
}

module.exports = new CartPage();