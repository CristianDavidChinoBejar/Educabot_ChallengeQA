describe('API Mercado Libre - Departments', () => {
  it('Verificar que la response contenga "departments"', () => {
    cy.request('GET', 'https://www.mercadolibre.com.ar/menu/departments')
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('departments');
            cy.allure().attachment('Response JSON', JSON.stringify(response.body), 'application/json');
        });
  });
});
