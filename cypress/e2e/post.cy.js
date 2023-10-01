import Buzz from "../page_object/buzz";
import { randSentence, randWord } from "@ngneat/falso";

describe('should be able to add post',()=>{

    const buzze = new Buzz();

    beforeEach(()=>{
        cy.login('Admin', 'admin123')
        cy.buzzPage()
    });
    
    it('should be able to add post with only Text',()=>{
        buzze.post_withText(randSentence());
    });

    it('should be able to add post with image',()=>{
         buzze.post_withPhoto();
    });

    it('should be able to like post with image',()=>{
        buzze.liking_Post();
    });

    it('should be able to comment post with image',()=>{
        buzze.commenting_Post(randWord());
    });

    it('should be able to share post with image',()=>{
        buzze.share_Post(randWord());
    });

    it('should be able to edit post',()=>{
        buzze.edit_Post(randWord());
    });

    it('should be able to delete post',()=>{
        buzze.delete_Post();
    });
})