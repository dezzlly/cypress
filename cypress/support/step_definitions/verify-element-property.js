import { Then } from '@badeball/cypress-cucumber-preprocessor';
const locators = require('../locators/homePage.json');

Then(/the "([^"]*)" should have border-color "([^"]*)"$/, (elementKey, expectedBorderColor) => {
    const element = locators[elementKey];
    cy.get(element).should('have.css', 'border-color', expectedBorderColor)
})

Then(/the "([^"]*)" should have attribute "([^"]*)"$/, (elementKey, expectedAttr) => {
    const element = locators[elementKey];
    cy.xpath(element).should('have.attr', expectedAttr)
})

Then(/the "([^"]*)" should have value "([^"]*)"$/, (elementKey, expectedValue) => {
    const element = locators[elementKey];
    cy.get(element).should('have.value', expectedValue)
})