class LoginHRM {
    visit2(){
        cy.visit('/auth/login');
    }
    credentials(username, password){
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('button[type="submit"]').click();
        //cy.contains('Dashboard');
    }


}
export default LoginHRM;