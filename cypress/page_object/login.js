class LoginHRM {
    visit(){
        cy.visit('/auth/login');
    }
    credentials(username, password){
        [['username',username],['password',password]].forEach(ele=>{
            cy.credentialInput(ele[0],ele[1])
        }) 
        cy.get('button[type="submit"]').click();
    }
}
export default LoginHRM;