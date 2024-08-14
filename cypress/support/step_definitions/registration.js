import { Then } from '@badeball/cypress-cucumber-preprocessor';
const locators = require('../locators/homePage.json');


Then(/^create user$/, () => { 

    const nameField = locators.name
    const lastNameField = locators.lastName
    const emailField = locators.email
    const passwordField = locators.password
    const repeatPasswordField = locators.repeatPassword
    const registrationButton = locators.registrationButton

    const name = 'Aleksandr'
    const lastName = 'Osypenko'
    const idAccount = new Date().getTime()
    const email = 'qa_automation_' + idAccount + '@gmail.com'
    cy.log(email)
    const password = 'Qa12345!'

    cy.registration(nameField, 
        lastNameField, 
        emailField, 
        passwordField, 
        repeatPasswordField, 
        name, 
        lastName, 
        email, 
        password, 
        registrationButton
    )

    const userDataFile = Cypress.env('USER_DATA_FILE');    

    const userData = { email, password };
    cy.writeFile(userDataFile, userData)

});