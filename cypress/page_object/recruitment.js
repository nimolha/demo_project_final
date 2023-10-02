
class Recuritment{
    
    add_Candidate(employee ){
        [['firstName',employee.firstName], ['middleName',employee.middleName], ['lastName',employee.lastName]].forEach(ele =>{
             cy.target(ele[0],ele[1])
        });
        cy.get('.oxd-select-text-input').click();
        cy.contains('Senior QA Lead').click();
        [['Email',employee.email],['Contact Number',employee.number],['Keywords',employee.keywords],['Notes',employee.notes]].forEach(ele=>{
            cy.getInput(ele[0],ele[1])
        });
        cy.get('.oxd-file-div--active').click().attachFile('1.doc', { filePath: 'cypress/fixtures' });
        cy.get('.oxd-checkbox-input-icon').click();
        cy.get('button').contains('Save').click();
        cy.contains('Success').should('be.visible');
    }

    set_forShortlist(note2){
        cy.get('button').contains('Shortlist').click({force: true} );
        cy.contains('Shortlist Candidate');
        cy.get('.oxd-textarea--resize-vertical').type(note2);
        cy.get('button').contains('Save').click();
        cy.contains('Success');
    }

    schedule_Interview(name,date,time,blah,title){
        cy.spinner();
        cy.get('button').contains('Schedule Interview').click({force: true} );
        cy.contains('label','Interviewer').parent().next().type(name);
        cy.contains('Goutam Ganesh').click();
        [['Date', date], ['Time', time], ['Notes', blah],['Interview Title',title]].forEach(ele => {
            cy.typeInput(ele[0], ele[1])
        });
        cy.get('button').contains('Save').click();
        cy.contains('Success');
    }

    recurit_Employee( blur, blue){
        cy.get('button').contains('Mark Interview Passed').click({force: true} );
        cy.contains('label','Notes').parent().next().type(blur);
        cy.get('button').contains('Save').click();
        cy.contains('Success');
        cy.get('button').contains('Offer Job').click({force: true} );
        cy.contains('label','Notes').parent().next().type(blue);
        cy.get('button').contains('Save').click().wait(2000);
       // cy.contains('Success');
    }

    hire_Employee(blu){
        cy.get('button').contains('Hire').click({force: true} );
        cy.contains('label','Notes').parent().next().type(blu);
        cy.get('button').contains('Save').click();
        cy.contains('Success');
        cy.contains('Application Stage');

    }

    Verify(firstName){
       [['My Info'],['Recruitment']].forEach(ele=>{
             cy.leInput(ele[0])                                                            
        });
    }

}

export default Recuritment;
