import { randWord } from "@ngneat/falso";
import Admin from "../page_object/admin";
import LoginHRM from "../page_object/login2";
describe ('should be able to add candiate,and verify the details',()=>{
    //beforeEach(()=>{
        //cy.visit('/')
    //})
    const admin = new Admin();
    const logs = new LoginHRM();
    it('should be able to add admin',()=>{
        logs.visit2();
        logs.credentials('Admin', 'admin123');
        admin.vivsit();
        admin.page1('G',randWord(),'apple@123','apple@123');
    })
    it('should be able to edit admin info',()=>{
        logs.visit2();
        logs.credentials('Admin', 'admin123');
        admin.vivsit();
        admin.edit('Admin','apple@234','apple@234',randWord());
    })
    it('should be able to edit admin info',()=>{
        logs.visit2();
        logs.credentials('Admin', 'admin123');
        admin.vivsit();
        admin.delete('Cheeku');
    })
})
