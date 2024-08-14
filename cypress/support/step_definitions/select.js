import { Then } from '@badeball/cypress-cucumber-preprocessor';
const locators = require('../locators/homePage.json');

Then(/I select the "([^"]*)" auto "([^"]*)"$/, (elementKey, brand) => {
    const element = locators[elementKey];   
    cy.get(element).select(brand)
})

Then(/I select the "([^"]*)" auto "([^"]*)" xpath$/, (elementKey, brand) => {
    const element = locators[elementKey];   
    cy.xpath(element).select(brand)
})