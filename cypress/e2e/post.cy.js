import LoginHRM from "../page_object/login";
import Buzz from "../page_object/buzz";
import { randSentence, randWord } from "@ngneat/falso";

describe('should be able to add post',()=>{
    const log = new LoginHRM();
    const buzze = new Buzz();
    
    it('should be able to add post with only Text',()=>{
        log.visit();
        log.credentials('Admin', 'admin123');
        buzze.visit();
        buzze.post_withText(randSentence());
    });

    it('should be able to add post with image',()=>{
        log.visit();
        log.credentials('Admin', 'admin123');
        buzze.visit();
        buzze.post_withPhoto();
    });
    it('should be able to like post with image',()=>{
        log.visit();
        log.credentials('Admin', 'admin123');
        buzze.visit();
        buzze.liking_post();
    });
    it('should be able to comment post with image',()=>{
        log.visit();
        log.credentials('Admin', 'admin123');
        buzze.visit();
        buzze.commenting_post(randWord());
    });
    it('should be able to share post with image',()=>{
        log.visit();
        log.credentials('Admin', 'admin123');
        buzze.visit();
        buzze.share_post(randWord());
    });
    it('should be able to edit post',()=>{
        log.visit();
        log.credentials('Admin', 'admin123');
        buzze.visit();
        buzze.edit_post(randWord());
    });
    it('should be able to delete post',()=>{
        log.visit();
        log.credentials('Admin', 'admin123');
        buzze.visit();
        buzze.delete_post();
    });
})