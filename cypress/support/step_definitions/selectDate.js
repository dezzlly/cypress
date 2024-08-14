import { Then } from '@badeball/cypress-cucumber-preprocessor';
const locators = require('../locators/homePage.json');

function getFormattedDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}.${month}.${year}`;
  }

Then(/I select the "([^"]*)" in calendar$/, (elementKey) => {
    const element = locators[elementKey];   

    const date = getFormattedDate()
    cy.get(element).type(date)
})