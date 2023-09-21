class Admin{

    vivsit(){
        cy.contains('a','Admin').click();
    }
    page1(ename, uname, passwd, cpasswd,){
        cy.get('button').contains('Add').click();
        cy.contains('Admin');
        //cy.contains('-- Select --').click();
        //cy.contains('ESS').click();
        cy.contains('label','User Role').parent().next().click().contains('Admin').click();
        cy.contains('label','Status').parent().next().click().contains('Enabled').click();
        //cy.contains('label','Employee Name').parent().next().type(ename);
        cy.contains('label','Employee Name').parent().next().type(ename);
        cy.contains('Goutam Ganesh').click();
        cy.contains('label','Username').parent().next().type(uname);
        cy.contains('label','Password').parent().next().type(passwd);
        cy.contains('label','Confirm Password').parent().next().type(cpasswd);
        cy.get('button').contains('Save').click();
    }
    edit(UName, newPassword, CnewPasswd ,uName){
        cy.contains('label','Username').parent().next().type(UName);
        cy.get('.oxd-form-actions').find('button').contains('Search').click({force: true});
        cy.get('.oxd-table-cell-actions').first().then(clase=>{
            cy.wrap(clase).should('be.visible')
            cy.wrap(clase).find('i','.oxd-icon bi-pencil-fill').last().click({force: true});//.scrollIntoView()//.type(shareComment);
        })
        cy.contains('label','Status').parent().next().click().contains('Disabled').click();
        cy.get('.oxd-checkbox-input-icon').click()
        cy.get('.user-password-cell').type(newPassword);
        cy.contains('label','Confirm Password').parent().next().type(CnewPasswd);
        cy.contains('label','Username').parent().next().type(uName);
        cy.get('button').contains('Save').click();
        cy.contains('Success');
    }
    delete(SName){
        //cy.contains('label','Username').parent().next().type(SName);
      //  cy.get('.oxd-form-actions').find('button').contains('Search').click({force: true});
        cy.get('.oxd-table-cell-actions').last().then(claee=>{
            cy.wrap(claee).should('be.visible')
            cy.wrap(claee).find('i','.oxd-icon bi-trash').first().click({force: true});
        });

        cy.get('.oxd-sheet').find('.orangehrm-button-margin').last().click();
        cy.contains('Successfully Deleted');
        cy.get('.oxd-loading-spinner').should('not.exist');


    }
    
}
export default Admin;