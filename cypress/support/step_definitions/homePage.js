import { Then } from '@badeball/cypress-cucumber-preprocessor'
const locators = require('../locators/homePage.json');

Then(/^And find all (buttons|links) in (header|footer) and check their content$/, (elementType, sectionName, dataTable) => {
    const sectionLocator = locators.sections[sectionName];
    const elementLocator = locators.elements[elementType];
    const fullLocator = `${sectionLocator} ${elementLocator}`;

    cy.document().then((doc) => {
        const elements = doc.querySelectorAll(fullLocator);

        if (elements.length === 0) {
            cy.log(`No elements found with locator: "${fullLocator}"`);
            return; 
        }

        cy.get(fullLocator).each(($el) => {
            const content = elementType === 'links' ? $el.prop('href') : $el.text().trim();
            cy.log(content);

            let found = false;
            if (dataTable) {
                dataTable.rawTable.forEach((row) => {
                    if (content.includes(row[0])) {
                        found = true;
                    }
                });

                if (!found) {
                    cy.log(`No matching content found for ${elementType} with content: "${content}"`);
                }

                expect(found).to.be.true;
            }
        });
    });
});

// Then(/^And find all (buttons|links) in (header|footer) and check their content$/, (elementType, sectionName, dataTable) => {
//     const sectionLocator = locators.sections[sectionName];
//     const elementLocator = locators.elements[elementType];

//     const fullLocator = `${sectionLocator} ${elementLocator}`;

//     cy.get(fullLocator).each(($el) => {
        
//         const content = elementType === 'links' ? $el.prop('href') : $el.text();
//         cy.log(content);
        
//         let found = false;
//         dataTable.rawTable.forEach((row) => {
//             if (content.includes(row[0])) {
//                 found = true;
//             }
//         });

//         expect(found).to.be.true;
//     });
// });

// Then(/^It find all (buttons|links) in (header|footer)$/, (element, section) => {
//     let locator = '';

//     // Определяем локатор на основе переданных аргументов
//     if (section === 'header') {
//         locator = '.header ';
//     } else if (section === 'footer') {
//         locator = '#contactsSection ';
//     }

//     if (element === 'buttons') {
//         locator += 'button';
//     } else if (element === 'links') {
//         locator += 'a';
//     }

//     // Ищем элементы по локатору и выполняем действия
//     cy.get(locator).each(($el) => {
//         if (locator === '.header button') {
//             cy.log($el.text());
//         } else {
//             cy.log($el.attr('href'));
//         }
        
//     });
// });

// Then('Find all buttons in header', () => {
   
//     cy.get('.header').should('exist').within(() => {
//       cy.get('button').each(($button) => {
//         cy.log($button.text());
//       });
//     });
    
// });

// Then('Find all links in footer', () => {
   
//     cy.get('#contactsSection').should('exist').within(() => {
//       cy.get('a').each(($link) => {
//         cy.log($link.attr('href'));
//       });
//     });

// });

// Then('Find all buttons in footer', () => {
   
//     cy.get('#contactsSection').should('exist').within(() => {
//       cy.get('button').each(($button) => {
//         cy.log($button.text());
//       });
//     });
    
// });