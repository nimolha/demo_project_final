import Recuritment from "../page_object/recruitment";
import LoginHRM from "../page_object/login2";
import { randEmail, randFirstName, randLastName, randNumber, randWord } from "@ngneat/falso";

describe ('should be able to add candiate,and verify the details',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    const add = new Recuritment();
    const loginh = new LoginHRM();
    it('should be able to add candidate',()=>{
        loginh.visit2();
        loginh.credentials('Admin', 'admin123');
        add.visit();
        add.add_candidate(randFirstName(),'pema', randLastName(),  randEmail(), randNumber(), randWord(), randWord(), );
        add.page2(randWord());
        add.page3('G', '2023-10-01','11:00 AM', randWord(),  randWord());
        add.method4(randWord(), randWord());
        add.method5( randWord());
        add.verify();

    })
})