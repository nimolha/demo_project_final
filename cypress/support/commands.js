
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
    cy.get('.orangehrm-buzz-post-footer').first().find('p','.oxd-text oxd-text--p').first().invoke('text').then(text => {
        cy.wrap(text.match(/(\d+)/g)).as(changeLike);
    })
})
Cypress.Commands.add('commentCount',(changecomment)=>{
    cy.get('.orangehrm-buzz-post-footer').first().find('.orangehrm-buzz-stats-active').last().invoke('text').then(text => {
        cy.wrap(text.match(/(\d+)/g).toString()).as(changecomment);
    })
})
Cypress.Commands.add('login',(username,password)=>{
    cy.visit('/auth/login');
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
})

Cypress.Commands.add('adminLogin',()=>{
    cy.contains('a','Admin').click();
})

Cypress.Commands.add('candidatePage',()=>{
    cy.contains('a','Recruitment').click();
        cy.get('button').contains('Add').click();
        cy.contains('Add Candidate');
})

Cypress.Commands.add('buzzPage',()=>{
    cy.contains('a','Buzz').click();
    cy.contains('Buzz'); 
})

