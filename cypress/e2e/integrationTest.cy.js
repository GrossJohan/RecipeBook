describe('Adding recipes as existing user', () => {
    it('should log in a user and create a new book successfully', () => {
        cy.visit('http://localhost:3000');
        cy.get('button').contains('Sign In').click();
        cy.get('#signInEmail').type('admin');
        cy.get('#signInPassword').type('admin123');
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.wait(2000);
        cy.get('button').contains('Add Recipe').click();
        cy.get('#addRecipeTitle').type('New Recipe');
        cy.get('#addRecipeContent').type('Recipe content');
        cy.get('#addRecipeModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.wait(2000);
        cy.get('.recipe-card').should('contain', 'New Recipe');
    });
});