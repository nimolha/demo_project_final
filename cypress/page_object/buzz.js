import { expect } from "chai";

class Buzz{

    post_withText(postText){
        cy.spinner();
        cy.get('.oxd-buzz-post--active').type(postText);
        cy.get('button[type="submit"]').then(btn =>{
            cy.wrap(btn).scrollIntoView();
            cy.wrap(btn).click({force: true}) });
        cy.spinner();
        cy.get('.orangehrm-buzz-post-body').first().find('p').should('contain',postText);
    }

    post_withPhoto(){
        cy.contains('button','Share Photos').click();
        cy.get('form').last().then(form =>{
            cy.wrap(form).should('be.visible');
            cy.wrap(form).find('input[type="file"]').selectFile('cypress/fixtures/2.jpg', {force: true});
            //cy.wrap(form).wait(1000).find('button').contains('Share').click();
        })
       
            cy.get('.orangehrm-buzz-post-body-picture').first().invoke('attr', 'src', '/web/index.php/buzz/photo/24').should('have.css', 'width', '580px')
            .should('have.css', 'height', '325.71875px');
    }

    liking_Post(){
        //5
        cy.likeCount('initialLikeCount');
        cy.get('.orangehrm-buzz-post-footer').first().should('exist')
            .find('.orangehrm-heart-icon-path').first().wait(2000).click({force: true}).wait(2000);
        cy.likeCount('updatedLikeCount')
            cy.get('@initialLikeCount').then((initialCount) => {
                cy.get('@updatedLikeCount').should('not.equal', initialCount); 
        })
    }

    commenting_Post(comment){
        cy.commentCount('initialcommentCount');
        cy.get('.orangehrm-buzz-post-footer').first().scrollIntoView().should('exist')
        .find('.oxd-icon-button').first().scrollIntoView().wait(2000).click({force: true});
        cy.get('form').last().then(form =>{
            cy.wrap(form).should('be.visible');
            cy.wrap(form).find('[placeholder="Write your comment..."]').scrollIntoView().type(comment).wait(2000).type('{enter}').wait(2000);
        });
        cy.get('.orangehrm-buzz-comment').should('contain',comment);
        cy.commentCount('updatedcommentCount');
        cy.get('@initialcommentCount').then((initialcommentCount) => {
            cy.get('@updatedcommentCount').should('eq', parseInt(++initialcommentCount).toString()); 
            });
    }
    share_Post(shareComment){
        cy.get('.orangehrm-buzz-post-footer').first().scrollIntoView().should('exist')
        .find('.oxd-icon-button').last().scrollIntoView().wait(2000).click({force: true});
        cy.get('form').last().then(form =>{
            cy.wrap(form).should('be.visible');
            cy.wrap(form).find('.oxd-buzz-post-input').scrollIntoView().type(shareComment);
            cy.wrap(form).find('button',' Share ').click();
        })
        
        cy.get('.orangehrm-buzz-post-body').first().find('p').should('contain',shareComment);
    }

    edit_Post(newComment){
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

    delete_Post(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/buzz/feed?limit=10&offset=0&sortOrder=DESC&sortField=share.createdAtUtc').as('post')
        cy.wait('@post').then(req => {
            cy.log(req.response.body.data);
            const posts = req.response.body.data
            var post = posts.find(pi => pi.id === 12)
            cy.log(post.text)
            cy.get('.oxd-grid-1').find('.orangehrm-buzz-post-body-text').contains(post.text).parentsUntil('.oxd-grid-item--gutters[data-v-c93bdbf3]').last()
            .find('.oxd-icon-button').first().click({force: true});
            cy.get('.oxd-dropdown-menu').find('.orangehrm-buzz-post-header-config-item').first().click();
            cy.get('button').contains(' Yes, Delete ').click();//.should('match',post.text);
            cy.get('.orangehrm-buzz-post-body-text').should('not.contain',post.text);
        });
    }
}

export default Buzz;
