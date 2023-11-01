interface Product {
    name: string;
    price: number;
}

//VARIABLES : dbdfgbgfbgfbgf
describe('Test avec TypeScript', () => {
    it('devrait manipuler un objet avec des types', () => {
        const product: Product = {
            name: 'Laptop',
            price: 1000,
        };

        cy.wrap(product).should('have.property', 'name', 'Laptop');
        cy.wrap(product).should('have.property', 'price').and('be.a', 'number');
    });
});

