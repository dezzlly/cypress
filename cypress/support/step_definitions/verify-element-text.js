import { Then } from '@badeball/cypress-cucumber-preprocessor';
const locators = require('../locators/homePage.json');

Then(/the "([^"]*)" should contain the text "([^"]*)"$/, (elementKey, expectedElementText) => {
    const element = locators[elementKey];       
    cy.get(element).should('exist').and('have.text', expectedElementText)
    
})

Then(/the "([^"]*)" should not exist$/, (elementKey) => {
    const element = locators[elementKey];    
    cy.get(element).should('not.exist')
})

Then(/the "([^"]*)" should contain the text "([^"]*)" xpath$/, (elementKey, expectedElementText) => {
    const element = locators[elementKey];    
    cy.xpath(element).should('exist').and('have.text', expectedElementText)    
})

Then(/the "([^"]*)" should not exist xpath$/, (elementKey) => {
    const element = locators[elementKey];    
    cy.xpath(element).should('not.exist')
})

Then(/the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" "([^"]*)" should contain the text "(.*)"$/, (elementPosition, elementKey, expectedElementText) => {
    const element = locators[elementKey];      
    const index = Number(elementPosition.match(/\d/g)?.join('')) -1
    cy.get(element).eq(index).should('exist').and('contain.text', expectedElementText)
})

Then(/the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" "([^"]*)" should contain the text "(.*)" xpath$/, (elementPosition, elementKey, expectedElementText) => {
    const element = locators[elementKey];      
    const index = Number(elementPosition.match(/\d/g)?.join('')) -1
    cy.xpath(element).eq(index).should('exist').and('contain.text', expectedElementText)
})