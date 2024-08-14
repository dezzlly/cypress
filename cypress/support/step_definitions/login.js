import { Then } from '@badeball/cypress-cucumber-preprocessor';
const locators = require('../locators/homePage.json');

Then(/^log in with saved credentials$/, () => {
 

    const userDataFile = Cypress.env('USER_DATA_FILE');
    const fileName = userDataFile.split('/').pop();
    
    cy.fixture(fileName).then(userData => {
        const { email, password } = userData;
        
        const emailField = locators.signinEmail;
        const passwordField = locators.signinPassword;
        const loginButton = locators.login; 

        cy.login(emailField, passwordField, email, password, loginButton)
        
        cy.url().should('include', '/panel/garage');
    });
});
