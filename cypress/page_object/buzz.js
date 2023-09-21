class Buzz{

    visit(){
        cy.contains('a','Buzz').click();
        cy.contains('Buzz');
    }
    post_withText(postText){
        cy.Spinner();
        cy.get('.oxd-buzz-post--active').type(postText);
        cy.get('button[type="submit"]').then(btn =>{
            cy.wrap(btn).scrollIntoView();
            cy.wrap(btn).click({force: true}) });
        cy.Spinner();
        cy.get('.orangehrm-buzz-post-body').first().find('p').should('contain',postText);
    }

    post_withPhoto(){
        cy.contains('button','Share Photos').click();
        cy.get('form').last().then(form =>{
            cy.wrap(form).should('be.visible');
            cy.wrap(form).find('input[type="file"]').selectFile('cypress/fixtures/2.jpg', {force: true});
            cy.wrap(form).wait(1000).find('button').contains('Share').click();
        })
        cy.Spinner();
        cy.get('.orangehrm-buzz-post-body').first().should('exist'); 
       
    }
    liking_post(){
        [['initialLikeCount'],['updatedLikeCount']].forEach(ele=>{
            cy.likeCount(ele[0])
        })
        cy.get('.orangehrm-buzz-post-footer').first().should('exist')
            .find('.orangehrm-heart-icon-path').first().wait(2000).click({force: true});
            cy.get('@initialLikeCount').then((initialCount) => {
                cy.get('@updatedLikeCount').should('not.equal', initialCount);
             })}
    commenting_post(comment){
        cy.get('.orangehrm-buzz-post-footer').first().scrollIntoView().should('exist')
        .find('.oxd-icon-button').first().scrollIntoView().wait(2000).click({force: true});
        cy.get('form').last().then(form =>{
            cy.wrap(form).should('be.visible');
            cy.wrap(form).find('[placeholder="Write your comment..."]').scrollIntoView().type(comment).wait(2000).type('{enter}');
        })
        cy.get('.orangehrm-buzz-comment').last().should('contain',comment);
        
    }
    share_post(shareComment){
        cy.get('.orangehrm-buzz-post-footer').first().scrollIntoView().should('exist')
        .find('.oxd-icon-button').last().scrollIntoView().wait(2000).click({force: true});
        cy.get('form').last().then(form =>{
            cy.wrap(form).should('be.visible');
            cy.wrap(form).find('.oxd-buzz-post-input').scrollIntoView().type(shareComment);
            cy.wrap(form).find('button',' Share ').click();
        })
        
        cy.get('.orangehrm-buzz-post-body').first().find('p').should('contain',shareComment);
    }
    edit_post(newComment){
        cy.get('.oxd-loading-spinner').should('not.exist');
        cy.get('.orangehrm-buzz-post').first().scrollIntoView()
          .find('.oxd-icon-button')
          .click({force: true}).wait(2000);
          cy.get('.oxd-dropdown-menu').find('.orangehrm-buzz-post-header-config-item').last().click();
          cy.get('form').last().then(form=>{
            cy.wrap(form).should('be.visible');
            cy.wrap(form).find('.oxd-buzz-post-input').clear().type(newComment);
            cy.wrap(form).find('button',' Post ').click();
          })
          cy.get('.orangehrm-buzz-post-body').first().find('p').should('contain',newComment);  
    }
    delete_post(){
        cy.get('.oxd-loading-spinner').should('not.exist');
        cy.get('.orangehrm-buzz-post').first().scrollIntoView()
          .find('.oxd-icon-button')
          .click({force: true}).wait(2000);
          cy.get('.oxd-dropdown-menu').find('.orangehrm-buzz-post-header-config-item').first().click();
          cy.get('button').contains(' Yes, Delete ').click();
          cy.contains('Successfully Deleted');
    }
}
export default Buzz;
