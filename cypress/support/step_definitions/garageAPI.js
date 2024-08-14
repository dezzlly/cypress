import { Then } from '@badeball/cypress-cucumber-preprocessor';
const routes = require('../routes/garage.json');

function getFormattedDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${year}-${month}-${day}`;
}

Then(/I get response from route "([^"]*)", check added ID car parameters: "([^"]*)", "([^"]*)", "([^"]*)"$/, (routeKey, 
    brand, 
    model, 
    initialMileage) => {

    const route = routes[routeKey]; 
    const fullRoute = Cypress.env('API_BASE_URL') + route
    const carFile = Cypress.env('CAR_DATA_FILE')
    const fileName = carFile.split('/').pop();

    cy.fixture(fileName).then(carID => {
        const { id } = carID

        cy.request('GET', fullRoute).then((response) => {
            expect(response.body.data[0].brand).to.equal(brand);
            expect(response.body.data[0].model).to.equal(model);
            expect(response.body.data[0].initialMileage).to.equal(Number(initialMileage));
            expect(response.body.data[0].id).to.equal(id);
            cy.log(response.body.data[0].id)
        })    
    })    
})

Then(/I add expense via API route "([^"]*)" and parameters: "([^"]*)", "([^"]*)", "([^"]*)"$/, (routeKey, 
    mileage, 
    liters, 
    totalCost) => {

    const route = routes[routeKey];
    const fullRoute = Cypress.env('API_BASE_URL') + route
    const carFile = Cypress.env('CAR_DATA_FILE')
    const fileName = carFile.split('/').pop();

    cy.fixture(fileName).then(carID => {
        const { id } = carID
        cy.request('POST', fullRoute, {
            "carId": id,
            "reportedAt": getFormattedDate(),
            "mileage": Number(mileage),
            "liters": Number(liters),
            "totalCost": Number(totalCost),
            "forceMileage": false
        })
    })
})