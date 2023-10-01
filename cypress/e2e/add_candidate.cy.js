import Recuritment from "../page_object/recruitment";
import { randWord } from "@ngneat/falso";
import { employee } from "../utility/user";


describe ('should be able to add candiate,and verify the details',()=>{
    beforeEach(()=>{
        cy.login('Admin', 'admin123')
        cy.candidatePage()
    });
    const new_employee = new employee();
    const add = new Recuritment();
    const add_employee ={
        firstName : new_employee.firstName,
        middleName : new_employee.middleName,
        lastName : new_employee.lastName,
        email : new_employee.email,
        number : new_employee.number,
        keywords : new_employee.keywords,
        notes : new_employee.notes
    };
    it('should be able to add candidate',()=>{

        add.add_Candidate(add_employee);
        add. set_forShortlist(randWord());
        add.schedule_Interview('G', '2023-10-01','11:00 AM', randWord(),  randWord());
        add.recurit_Employee(randWord(), randWord());
        add.hire_Employee( randWord());
        add.Verify();

    })
    
})