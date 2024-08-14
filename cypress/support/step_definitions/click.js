import { Then } from '@badeball/cypress-cucumber-preprocessor';
const locators = require('../locators/homePage.json');

Then(/I click the "([^"]*)" (button|link|element|icon|field)$/, (elementKey) => {
    const element = locators[elementKey];   
    cy.get(element).click()
})

Then(/I click the "([^"]*)" (button|link|element|icon|field) xpath$/, (elementKey) => {
    const element = locators[elementKey];   
    cy.xpath(element).click()
})

Then(/I click the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" "([^"]*)" (button|link|element|icon|field) xpath$/, (elementKey) => {
    const element = locators[elementKey];   
    const index = Number(elementPosition.match(/\d/g)?.join('')) -1
    cy.xpath(element).eq(index).click()
})