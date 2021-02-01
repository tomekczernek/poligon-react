describe('', () =>{
    const root = 'http://localhost:3000/';
    cy.visit(`${root}`);

    const firstNameField = cy.findByTestId('first_name');
    firstNameField.type('Tom');
});