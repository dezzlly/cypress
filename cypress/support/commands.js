// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('cypress-xpath');

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {  
      options.log = false      
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      })
    }
  
    return originalFn(element, text, options)
})

Cypress.Commands.add('login', (emailField, passwordField, email, password, loginButton) => {
    cy.get(emailField).type(email);
    cy.get(passwordField).type(password, { sensitive: true });
    cy.xpath(loginButton).click();
})

Cypress.Commands.add('registration', (nameField, 
    lastNameField, 
    emailField, 
    passwordField, 
    repeatPasswordField, 
    name, 
    lastName, 
    email, 
    password, 
    registrationButton
) => {
    cy.get(nameField).type(name)
    cy.get(lastNameField).type(lastName)
    cy.get(emailField).type(email)
    cy.get(passwordField).type(password)
    cy.get(repeatPasswordField).type(password)
    cy.xpath(registrationButton).click()
})