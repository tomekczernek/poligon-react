describe('Form testing', () => {
    if('should find form', () => {

        const root = 'http://localhost:3000/';
        cy.visit(`${root}`);

        const firstNameField = cy.findByTestId('first_name');
        firstNameField.type('Tom');

        const submitButton = cy.findByRole('button', { name: /submit/i });
        submitButton.click();

        cy.findByText(/Wymagany/i).should('exist');
    });
});