import { randWord } from "@ngneat/falso";
import Admin from "../page_object/admin";

describe ('should be able to add candiate,and verify the details',()=>{

    beforeEach(()=>{
        cy.login('Admin', 'admin123')
        cy.adminLogin()
    });

    const admin = new Admin();

    it('should be able to add admin',()=>{

        admin.Add_the_admin('G',randWord(),'apple@123','apple@123');
    });

    it('should be able to edit admin info',()=>{
      
        admin.edit_the_admin('Admin','apple@234','apple@234',randWord());
    });

    it('should be able to delete admin',()=>{
     
        admin.delete_the_admin('Cheeku');
    });

})
