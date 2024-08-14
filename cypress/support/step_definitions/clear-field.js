import { Then } from '@badeball/cypress-cucumber-preprocessor';
const locators = require('../locators/homePage.json');

Then(/I clear "([^"]*)" field$/, (elementKey) => {
    const element = locators[elementKey];   
    cy.get(element).clear()
})