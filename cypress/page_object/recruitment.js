
class Recuritment{
    
    visit(){
        cy.contains('a','Recruitment').click();
        cy.get('button').contains('Add').click();
        cy.contains('Add Candidate');
    }
    add_candidate(firstName, middleName, lastName, email, number, keywords, notes, ){
        [['firstName',firstName], ['middleName',middleName], ['lastName',lastName]].forEach(ele =>{
             cy.target(ele[0],ele[1])
        });
        cy.get('.oxd-select-text-input').click();
        cy.contains('Senior QA Lead').click();
        [['Email',email],['Contact Number',number],['Keywords',keywords],['Notes',notes]].forEach(ele=>{
            cy.getInput(ele[0],ele[1])
        });
        cy.get('.oxd-file-div--active').click().attachFile('1.doc', { filePath: 'cypress/fixtures' });
        cy.get('.oxd-checkbox-input-icon').click();
        cy.get('button').contains('Save').click();
        cy.contains('Success').should('be.visible');
    }
    page2(note2){
        cy.get('button').contains('Shortlist').click({force: true} );
        cy.contains('Shortlist Candidate');
        cy.get('.oxd-textarea--resize-vertical').type(note2);
        cy.get('button').contains('Save').click();
        cy.contains('Success');
    }
    page3(name,date,time,blah,title){
        cy.get('button').contains('Schedule Interview').click({force: true} );
       // cy.contains('label','Interview Title').parent().next().type(title);
        cy.contains('label','Interviewer').parent().next().type(name);
        cy.contains('Goutam Ganesh').click();
        [['Date', date], ['Time', time], ['Notes', blah],['Interview Title',title]].forEach(ele => {
            cy.typeInput(ele[0], ele[1])
        });
        cy.get('button').contains('Save').click();
        cy.contains('Success');
    }
    method4( blur, blue){
        cy.get('button').contains('Mark Interview Passed').click({force: true} );
        cy.contains('label','Notes').parent().next().type(blur);
        cy.get('button').contains('Save').click();
        cy.contains('Success');
        cy.get('button').contains('Offer Job').click({force: true} );
        cy.contains('label','Notes').parent().next().type(blue);
        cy.get('button').contains('Save').click();
        cy.contains('Success');
    }
    method5(blu){
        cy.get('button').contains('Hire').click({force: true} );
        cy.contains('label','Notes').parent().next().type(blu);
        cy.get('button').contains('Save').click();
        cy.contains('Success');
        cy.contains('Application Stage');


    }
    verify(){
       [['My Info'],['Recruitment']].forEach(ele=>{
             cy.leInput(ele[0])
        });
        //cy.contains('(13) Records Found');
       // cy.get('span').contains('Records Found').invoke('text').then(numberTotal =>{
           // var reg = new RegExp(/\d+/g)
            //let num = numberTotal.match(reg)
           // cy.get('.oxd-table-card').its('length').should('eq', num)
           // cy.wrap(num).as(numberTotal)
       // })
        // cy.get('.oxd-table-body').invoke('text').then(numberTotal =>{
        //     let num = parseInt()
        //     cy.get('..oxd-table-body').its('length').should('eq', num)
        //     cy.wrap(num).as(numberTotal)
        //     cy.should(numberTotal,'eq',numberTotal);
        // })
        

    }


}
export default Recuritment;