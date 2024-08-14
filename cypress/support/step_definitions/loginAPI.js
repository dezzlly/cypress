import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
const routes = require('../routes/garage.json');

Given(/I login via API "([^"]*)"$/, (routeKey) => {
    const route = routes[routeKey];
    const fullRoute = Cypress.env('API_BASE_URL') + route
    const userDataFile = Cypress.env('USER_DATA_FILE');
    const fileName = userDataFile.split('/').pop();
    
    cy.fixture(fileName).then(userData => {
        const { email, password } = userData;

        cy.request('POST', fullRoute, {
            "email": email,
            "password": password,
            "remember": false
        })
    });   
})