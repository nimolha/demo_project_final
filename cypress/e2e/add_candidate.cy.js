import Recuritment from "../page_object/recruitment";
import LoginHRM from "../page_object/login";
import { randEmail, randFirstName, randLastName, randNumber, randWord } from "@ngneat/falso";

describe ('should be able to add candiate,and verify the details',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    const add = new Recuritment();
    const loginh = new LoginHRM();
    it('should be able to add candidate',()=>{
        loginh.visit();
        loginh.credentials('Admin', 'admin123');
        add.visit();
        add.add_candidate(randFirstName(),'pema', randLastName(),  randEmail(), randNumber(), randWord(), randWord(), );
        add. set_forShortlist(randWord());
        add.schedule_interview('G', '2023-10-01','11:00 AM', randWord(),  randWord());
        add.recurit_employee(randWord(), randWord());
        add.Hire_employee( randWord());
        add.verify();

    })
    // it('should be able to verify new candidate',()=>{
    //     loginh.visit();
    //     loginh.credentials('Admin', 'admin123');
    //     add.visit();
        
    // })
    
})