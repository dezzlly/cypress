import { Then } from '@badeball/cypress-cucumber-preprocessor';
const routes = require('../routes/garage.json');
const locators = require('../locators/homePage.json');


Then(/I intercept response from route "([^"]*)" when I click "([^"]*)" button$/, (routeKey, elementKey) => {
    const route = routes[routeKey]; 
    const fullRoute = Cypress.env('API_BASE_URL') + route
    cy.intercept('POST', fullRoute).as('interceptedRequest')

    const element = locators[elementKey];   
    cy.xpath(element).click()

    cy.wait('@interceptedRequest').then((interception) => {        
        expect(interception.response.statusCode).to.eq(201);        
        cy.wrap(interception.response.body.data.id).as('responseId');
    });

    cy.get('@responseId').then((id) => {
        const carDataFile = Cypress.env('CAR_DATA_FILE');
        cy.writeFile(carDataFile, { id });
        cy.log(`Car with ID ${id} saved to file: ${carDataFile}`);
    });
})