class Admin{
    vivsit(){
        cy.contains('a','Admin').click();
    }
    Add(ename, uname, passwd, cpasswd,){
        cy.get('button').contains('Add').click();
        cy.contains('Admin');
        [['User Role','Admin'],['Status','Enabled']].forEach(ele=>{
            cy.Adminclick(ele[0],ele[1])
        });
        [['Username',uname],['Password',passwd],['Confirm Password',cpasswd],['Employee Name',ename]].forEach(ele=>{
            cy.AdminType(ele[0],ele[1])
        });
        cy.contains('Goutam Ganesh').click();
        cy.get('button').contains('Save').click();
    }
    edit(UName, newPassword, CnewPasswd ,uName){
        cy.contains('label','Username').parent().next().type(UName);
        cy.get('.oxd-form-actions').find('button').contains('Search').click({force: true});
        cy.get('.oxd-table-cell-actions').first().then(clase=>{
            cy.wrap(clase).should('be.visible')
            cy.wrap(clase).find('i','.oxd-icon bi-pencil-fill').last().click({force: true});
        });
        cy.contains('label','Status').parent().next().click().contains('Disabled').click();
        cy.get('.oxd-checkbox-input-icon').click()
        cy.get('.user-password-cell').type(newPassword);
        [['Confirm Password',CnewPasswd],['Username',uName]].forEach(ele=>{
            cy.AdminEdit(ele[0],ele[1])
        });
        cy.get('button').contains('Save').click();
        cy.contains('Success');
    }
    delete(SName){
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