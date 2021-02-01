describe('Open counter page', () => {
    if('Visit counter page', () => {

        const root = 'http://localhost:3000/';
        cy.visit(`${root}counter`);
        const button = cy.findByRole('button', { name: /\+/i });
        button.click();
        button.click();
        button.click();

        cy.visit(`${root}users`);
        cy.visit(`${root}counter`);
        //const textElem = cy.findByText('Current value: 0');
    });
});
