import { Then } from '@badeball/cypress-cucumber-preprocessor';
const locators = require('../locators/homePage.json');

Then(/I fill "([^"]*)" field with "([^"]*)"$/, (elementKey, data) => {
    const element = locators[elementKey];   
    cy.get(element).type(data)
})

Then(/I fill "([^"]*)" field with "([^"]*)" xpath$/, (elementKey, data) => {
    const element = locators[elementKey];   
    cy.xpath(element).type(data)
})