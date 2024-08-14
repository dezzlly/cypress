import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given('I go to homepage', () => {
  cy.visit('/');
});