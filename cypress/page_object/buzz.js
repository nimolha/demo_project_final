class Buzz{

    vivsit(){
        cy.contains('a','Buzz').click();
        //cy.get('button').contains('Add').click();
        cy.contains('Buzz');
    }

    post(postText){
        cy.get('.oxd-loading-spinner').should('not.exist');
        cy.get('.oxd-buzz-post--active').type(postText);
        // cy.get('.oxd-grid-item.oxd-grid-item--gutters').scrollTo('top')
        cy.get('button[type="submit"]').then(btn =>{
            cy.wrap(btn).scrollIntoView();
            cy.wrap(btn).click({force: true})
        })
        cy.get('.oxd-loading-spinner').should('not.exist');
        cy.get('.orangehrm-buzz-post-body').first().find('p').should('contain',postText);
    }

    photo(){
       // cy.get('.oxd-buzz-post--active').type(eth).wait(2000);
        cy.contains('button','Share Photos').click();
        // cy.get('.oxd-glass-button').first().scrollIntoView().contains( 'Share Photos').click();
        //cy.contains('p','Add Photos').click({force:true});
        cy.get('form').last().then(form =>{
            cy.wrap(form).should('be.visible');
            cy.wrap(form).find('input[type="file"]').selectFile('cypress/fixtures/2.jpg', {force: true});
            cy.wrap(form).wait(1000).find('button').contains('Share').click();
        })
        cy.get('.oxd-loading-spinner').should('not.exist');
        cy.get('.orangehrm-buzz-post-body').first().should('exist'); 
       
    }
    liking_post(){
        cy.get('.orangehrm-buzz-post-footer').first().find('p','.oxd-text oxd-text--p').invoke('text').as('initialLikeCount');
        cy.get('.orangehrm-buzz-post-footer').first().should('exist')
        
        //cy.get('.orangehrm-buzz-post-actions').first().contains('g','.orangehrm-heart-icon-group7').click();
            .find('.orangehrm-heart-icon-path').first().wait(2000).click({force: true});
            cy.get('.orangehrm-buzz-post-footer').first().find('p','.oxd-text oxd-text--p').invoke('text').as('updatedLikeCount');
            cy.get('@initialLikeCount').then((initialCount) => {
                cy.get('@updatedLikeCount').should('not.equal', initialCount);
             })}
    commenting_post(comment){
        cy.get('.orangehrm-buzz-post-footer').first().scrollIntoView().should('exist')
        .find('.oxd-icon-button').first().scrollIntoView().wait(2000).click({force: true});
        //.type(comment);
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
          .find('.oxd-icon-button')//('.orangehrm-buzz-post-header-config','li')
          .click({force: true}).wait(2000);//.contains('ul','li','.orangehrm-buzz-post-header-config-item');
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
          .find('.oxd-icon-button')//('.orangehrm-buzz-post-header-config','li')
          .click({force: true}).wait(2000);//.contains('ul','li','.orangehrm-buzz-post-header-config-item');
          cy.get('.oxd-dropdown-menu').find('.orangehrm-buzz-post-header-config-item').first().click();
          cy.get('button').contains(' Yes, Delete ').click();
          cy.contains('Successfully Deleted');
    }
}
export default Buzz;
