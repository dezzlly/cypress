import { Then } from '@badeball/cypress-cucumber-preprocessor';
const locators = require('../locators/homePage.json');

Then(/I remove focus from the "([^"]*)" field$/, (elementKey) => {
    const element = locators[elementKey];   
    cy.get(element).blur();
})