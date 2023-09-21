
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
    set_forShortlist(note2){
        cy.get('button').contains('Shortlist').click({force: true} );
        cy.contains('Shortlist Candidate');
        cy.get('.oxd-textarea--resize-vertical').type(note2);
        cy.get('button').contains('Save').click();
        cy.contains('Success');
    }
    schedule_interview(name,date,time,blah,title){
        cy.Spinner();
        cy.get('button').contains('Schedule Interview').click({force: true} );
        cy.contains('label','Interviewer').parent().next().type(name);
        cy.contains('Goutam Ganesh').click();
        [['Date', date], ['Time', time], ['Notes', blah],['Interview Title',title]].forEach(ele => {
            cy.typeInput(ele[0], ele[1])
        });
        cy.get('button').contains('Save').click();
        cy.contains('Success');
    }
    recurit_employee( blur, blue){
        cy.get('button').contains('Mark Interview Passed').click({force: true} );
        cy.contains('label','Notes').parent().next().type(blur);
        cy.get('button').contains('Save').click();
        cy.contains('Success');
        cy.get('button').contains('Offer Job').click({force: true} );
        cy.contains('label','Notes').parent().next().type(blue);
        cy.get('button').contains('Save').click();
        cy.contains('Success');
    }
    Hire_employee(blu){
        cy.get('button').contains('Hire').click({force: true} );
        cy.contains('label','Notes').parent().next().type(blu);
        cy.get('button').contains('Save').click();
        cy.contains('Success');
        cy.contains('Application Stage');

    }
    verify(firstName){
       [['My Info'],['Recruitment']].forEach(ele=>{
             cy.leInput(ele[0])                                                            
        });
    }
}
export default Recuritment;