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

import 'cypress-file-upload';

Cypress.Commands.add('typeInput', (label, inputText) => {
    cy.contains('label', label).parent().next().type(inputText);
})
Cypress.Commands.add('target',(inputs,types)=>{
    cy.get(`[name="${inputs}"]`).type(types);
})
Cypress.Commands.add('getInput',(labal,inText)=>{
    cy.contains('label',labal).parent().next().type(inText);
})
Cypress.Commands.add('leInput',(ae)=>{
    cy.contains('a',ae).click();
})
Cypress.Commands.add('credentialInput',(Inputs,cText)=>{
    cy.get(`[name="${Inputs}"]`).type(cText);
})
Cypress.Commands.add('Adminclick',(labble,UInput)=>{
    cy.contains('label',labble).parent().next().click().contains(UInput).click();
})
Cypress.Commands.add('AdminType',(Elabel,EInputs)=>{
    cy.contains('label',Elabel).parent().next().type(EInputs);
})
Cypress.Commands.add('AdminEdit',(Ulabel,UserInput)=>{
    cy.contains('label',Ulabel).parent().next().type(UserInput);
})
Cypress.Commands.add('Spinner', () =>{
    cy.get('.oxd-loading-spinner').should('not.exist');
})
Cypress.Commands.add('likeCount',(changeLike)=>{
    cy.get('.orangehrm-buzz-post-footer').first().find('p','.oxd-text oxd-text--p').invoke('text').as(changeLike);
})
